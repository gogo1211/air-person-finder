import people from 'mock/people.json';

import { Person } from 'types/Person';

export function getPeople(page: number, pageSize: number, query?: string) {
  const filtered = query
    ? people.filter((person: Person) => person?.name?.toLowerCase().includes(query.toLowerCase()))
    : people;

  return {
    total: Math.round(filtered.length / pageSize),
    data: filtered.slice(page * pageSize, (page + 1) * pageSize)
  };
}
