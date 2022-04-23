import { FC, useState } from 'react';

import { SearchInput } from 'components/SearchInput';
import { PersonList } from 'components/PersonList';

const PersonFinder: FC = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="py-2 sm:py-6 sm:w-[36rem] mx-auto">
      <h1 className="text-primary text-3xl sm:text-header font-georgia">The Person Finder</h1>
      <p className="mt-4 sm:mt-[3.75rem] text-gray1 text-base font-helvetica">
        If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type
        the name of the person you are looking for below into the search box!
      </p>
      <SearchInput className="mt-8" placeholder="Search in Air HQ" fullWidth onChange={setQuery} />
      <div className="mt-4 sm:mt-[3.125rem]">
        <PersonList query={query} />
      </div>
    </div>
  );
};

export default PersonFinder;
