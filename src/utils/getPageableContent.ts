import { InfiniteData } from 'react-query';
import { SliceItem } from '@team-moebius/api-typescript/dist/src/model/slice-item';

export const getPageableContent = <T extends SliceItem>(
  data: InfiniteData<T> | undefined
) => data?.pages.map((page) => (page.content ? page.content : [])).flat() ?? [];
