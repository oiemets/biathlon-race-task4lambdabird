import { Contestant } from './fakeContestants';

export const sortByName = (a: Contestant, b: Contestant): number => {
  let nameA = a.lastName.toUpperCase();
  let nameB = b.lastName.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

export const sortByTime = (a: Contestant, b: Contestant): number => a.time - b.time;
export const sortByShooting = (a: Contestant, b: Contestant): number => a.shooting.total - b.shooting.total;