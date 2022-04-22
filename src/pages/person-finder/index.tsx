import { SearchInput } from 'components/SearchInput';
import { FC } from 'react';

const PersonFinder: FC = () => {
  return (
    <div className="mt-6 w-[36rem] m-auto">
      <h1 className="text-primary text-header">The Person Finder</h1>
      <p className="mt-[3.75rem] text-gray1 text-base">
        If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type
        the name of the person you are looking for below into the search box!
      </p>
      <SearchInput />
    </div>
  );
};

export default PersonFinder;
