import { FlatList } from 'react-native-gesture-handler';
import { Flexbox, Separator } from 'src/components/atom';
import { HistoryListItem } from 'src/components/molecule';
import {
  SwitchHistoryListItemData,
  SWITCH_HISTORY_LIST_MOCK,
} from '../SwitchList.mock';
import { useCommonInfiniteQuery } from 'src/hooks/useCommonInfiniteQuery';
import {
  Pageable,
  SliceSwitchResponse,
  SwitchResponse,
} from '@team-moebius/api-typescript';
import { SwitchAPI } from 'src/api';

const ListItem = ({ item }: { item: SwitchResponse }) => (
  <Flexbox.Item flex={1} width={'100%'}>
    <HistoryListItem
      data={{
        //TODO: 프로퍼티 refactoring
        myItem: item.itemId ? `${item.itemId}` : '',
        selectedItem: item.pairedItemId ? `${item.pairedItemId}` : '',
        ago: item.id ? `${item.id}` : '', // TODO: 시간 계산하는 로직 필요
      }}
      mirrorDirection={'row'}
    />
  </Flexbox.Item>
);

const HistoryListContent = () => {
  const { fetchNextPage, data, isFetchingNextPage } = useCommonInfiniteQuery<
    SliceSwitchResponse,
    Pageable
  >({
    api: SwitchAPI.getSwitches,
    queryString: { size: 20 },
    queryKey: ['homeMain_switchApi_getSwitches'],
    getNextPageParam(page) {
      let nextPageNumber: number | undefined;
      if (page.pageable && !page.last) {
        nextPageNumber = (page.pageable.pageNumber as number) + 1;
      } else {
        nextPageNumber = undefined;
      }

      return nextPageNumber;
    },
    onSuccess(data) {
      console.debug('✅ home main success!! \n', data);
    },
    onError(err) {
      console.debug('🚧🚧 home main fail!! 🚧🚧 \n', err);
    },
  });

  const handleLoadMoreData = () => {
    if (!isFetchingNextPage) return;
    fetchNextPage();
  };

  return (
    <Flexbox width={'100%'} height={'100%'}>
      <FlatList<SwitchResponse>
        data={
          data?.pages
            .map((page) => (page.content ? page.content : []))
            .flat() ?? []
        }
        renderItem={ListItem}
        keyExtractor={(item, index) => `${item.id}` ?? `${index}`}
        numColumns={1}
        onEndReached={handleLoadMoreData}
        onEndReachedThreshold={0.1}
        ItemSeparatorComponent={Separator}
      />
    </Flexbox>
  );
};

export { HistoryListContent };
