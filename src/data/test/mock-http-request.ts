import * as faker from 'faker';

import { HttpRequest } from '../protocols';

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['GET']),
  params: faker.random.word(),
});
