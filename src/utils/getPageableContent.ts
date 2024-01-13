import { InfiniteData } from 'react-query';
import { SliceItem } from 'src/hooks/useCommonInfiniteQuery';

export const getPageableContent = (
  data: InfiniteData<SliceItem<any>> | undefined
) => data?.pages.map((page) => (page.content ? page.content : [])).flat() ?? [];
