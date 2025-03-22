import { ItemResponse } from '@team-moebius/api-typescript';

export const plusMockOne = (data: ItemResponse[]) => {
  const copy = data.slice();
  copy.push({ name: '' });
  return copy;
};
