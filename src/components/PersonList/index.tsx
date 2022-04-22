import { FC, useState, useEffect, useRef, useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { Person } from 'types/Person';
import { PersonView } from 'components/PersonView';
import { getPeople } from 'api/person';

const PAGE_SIZE = 20;

interface PersonListProps {
  query?: string;
}

export const PersonList: FC<PersonListProps> = ({ query }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Person[]>([]);
  const totalPage = useRef(0);

  useEffect(() => {
    setItems([]);
    totalPage.current = 0;
    handleLoad(0);
    ref.current?.scroll(0, 0);
  }, [query]);

  const handleLoad = (page: number) => {
    const { total, data } = getPeople(page, PAGE_SIZE, query);
    setItems((prev) => [...prev, ...data]);
    totalPage.current = total;
  };

  const result = useMemo(() => items.map((item: Person) => <PersonView key={item.id} person={item} />), [items]);

  return (
    <div ref={ref} className="h-[30rem] overflow-auto">
      <InfiniteScroll
        className="space-y-6"
        loadMore={handleLoad}
        useWindow={false}
        hasMore={totalPage.current > items.length / PAGE_SIZE}
        initialLoad={false}
        loader={
          <div key={0} className="text-center">
            Loading more...
          </div>
        }
      >
        {result}
        {items.length === 0 ? <div className="text-center">No matching result</div> : null}
      </InfiniteScroll>
    </div>
  );
};
