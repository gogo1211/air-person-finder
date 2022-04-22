import { isEqual } from 'lodash';
import { memo } from 'react';

import { Person } from 'types/Person';

interface PersonViewProps {
  person: Person;
}

export const PersonView = memo(({ person }: PersonViewProps) => {
  return (
    <div className="flex">
      <img className="w-[6rem] h-[6rem]" src={person.avatar} alt={person.name} />
      <div className="ml-6">
        <div className="text-gray1 font-bold">{person.name}</div>
        <div className="mt-2 text-gray2">{person.description}</div>
      </div>
    </div>
  );
}, isEqual);
