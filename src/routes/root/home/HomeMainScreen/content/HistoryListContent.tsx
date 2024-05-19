import { FlatList } from 'react-native-gesture-handler';
import { Flexbox, Separator } from 'src/components/atom';
import { HistoryListItem } from 'src/components/molecule';
import { useCommonInfiniteQuery } from 'src/hooks/useCommonInfiniteQuery';
import {
  SliceSwitchResponse,
  SwitchResponse,
} from '@team-moebius/api-typescript';
import { SwitchAPI } from 'src/api';
import { getPageableContent } from 'src/utils/getPageableContent';
import { convertLocalTime } from 'src/utils/convertLocalTime';

const ListItem = ({ item }: { item: SwitchResponse }) => (
  <Flexbox.Item flex={1} width={'100%'}>
    <HistoryListItem
      data={{
        //TODO: 프로퍼티 refactoring
        myItem: item.itemName ? `${item.itemName}` : '',
        selectedItem: item.pairedItemName ? `${item.pairedItemName}` : '',
        ago: item.updatedAt ? convertLocalTime(item.updatedAt) : '', // TODO: 시간 계산하는 로직 필요
      }}
      mirrorDirection={'row'}
    />
  </Flexbox.Item>
);

const HistoryListContent = () => {
  const { fetchNextPage, data, isFetchingNextPage } =
    useCommonInfiniteQuery<SliceSwitchResponse>({
      api: (params) =>
        SwitchAPI.getSwitches('done', params.page, params.size, params.sort),
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
        data={getPageableContent(data)}
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
