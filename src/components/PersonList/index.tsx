import { FC } from 'react';

import { Person } from 'types/Person';
import { PersonView } from 'components/PersonView';

import people from 'mock/people.json';

interface PersonListProps {
  query?: string;
}

export const PersonList: FC<PersonListProps> = ({ query }) => {
  return (
    <div className="space-y-6">
      {people
        .filter((item: Person) => item.name.toLowerCase()?.includes(query?.toLowerCase() || ''))
        .map((item: Person) => (
          <PersonView key={item.id} person={item} />
        ))}
    </div>
  );
};
