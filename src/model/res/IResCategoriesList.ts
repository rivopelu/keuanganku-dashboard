import { faker } from "@faker-js/faker";

export interface IResCategoriesList {
  name: string;
  total_transaction: number;
  id: string;
  code: string;
}

export const dummyResCategoriesList: IResCategoriesList[] = Array.from({
  length: 20,
}).map(() => {
  return {
    code: faker.finance.creditCardCVV(),
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    total_transaction: faker.number.int({ min: 1, max: 200 }),
  };
});
