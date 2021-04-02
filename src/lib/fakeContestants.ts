import faker from 'faker';

export interface Contestant {
  firstName: string;
  lastName: string;
  nationality: string;
  shooting: Shooting;
  time: number;
};

interface Shooting {
  shBouts: string;
  total: number;
};

const shooting = (bouts: number): Shooting => {
  let tempArray = [];
  for(let i = 0; i < bouts / 2; i++) {
    tempArray.push(
      faker.datatype.number({min: 0, max: bouts}),
      faker.datatype.number({min: 0, max: 1})
    );
  };
  return {
    shBouts: `${tempArray.join('+')}`,
    total: tempArray.reduce((acc, curr) => acc + curr)
  };
};

export const fakeContestants = (amount: number, sex: number): Contestant[] => {
  let contestants: Contestant[] = [];
  for(let i = 0; i < amount; i++) {
    contestants.push({
      firstName: `${faker.name.firstName(sex)}`,
      lastName: `${faker.name.lastName(sex)}`,
      nationality: faker.address.country(),
      shooting: shooting(4),
      time: faker.datatype.number({min: 2000, max: 2400})
    });
  };
  return contestants;
};