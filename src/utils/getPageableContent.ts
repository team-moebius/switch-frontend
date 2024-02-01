import { InfiniteData } from 'react-query';
import { SliceItem as CommonSlice } from '@team-moebius/api-typescript/dist/src/model/slice-item';

interface SliceItem<T> extends Omit<CommonSlice, 'content'> {
  content: Array<T>;
}

export const getPageableContent = (
  data: InfiniteData<SliceItem<any>> | undefined
) => data?.pages.map((page) => (page.content ? page.content : [])).flat() ?? [];
