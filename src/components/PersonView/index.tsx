import { isEqual } from 'lodash';
import { memo } from 'react';

import { Person } from 'types/Person';

interface PersonViewProps {
  person: Person;
}

export const PersonView = memo(({ person }: PersonViewProps) => {
  return (
    <div className="flex">
      <img className="w-[3rem] h-[3rem] sm:w-[6rem] sm:h-[6rem]" src={person.avatar} alt={person.name} />
      <div className="ml-2 sm:ml-6">
        <div className="text-gray1 font-bold">{person.name}</div>
        <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray2">{person.description}</div>
      </div>
    </div>
  );
}, isEqual);
