import { useMemo, useState } from 'react';

import { Flexbox, Select } from 'src/components/atom';
import {
  ImageCard,
  TradingListItem,
  PressableIcon,
} from 'src/components/molecule';
import { ListView } from 'src/components/template/ListView';
import { ListViewType, useFlatList } from 'src/hooks/useFlatList';
import { useCommonInfiniteQuery } from 'src/hooks/useCommonInfiniteQuery';
import { getPageableContent } from 'src/utils/getPageableContent';

import {
  Pageable,
  SliceItemResponse,
  ItemResponse,
} from '@team-moebius/api-typescript';
import { AxiosResponse } from 'axios';

import { StuffListItemData, STUFF_LIST_MOCK } from '../SwitchList.mock';

const SELECT_OPTIONS = ['무작위', '최신순', '내 위치와 가까운 순'] as const;
type SectionOptionType = (typeof SELECT_OPTIONS)[number];
const SELECT_OPTIONS_QUERY = {
  무작위: ['random', 'asc'],
  최신순: ['updatedAt', 'desc'],
  '내 위치와 가까운 순': ['distance', 'asc'],
};

const GridItem = ({
  item,
  withTitleOnly,
  onClick,
}: {
  item: ItemResponse;
  withTitleOnly?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Flexbox.Item flex={1} width={'100%'}>
      <ImageCard
        title={item.name}
        src={item.images ? item.images[0] : ''}
        desc={withTitleOnly ? '' : item.description}
        width={'100%'}
        height={150}
        resizeMode={'cover'}
        onClickHandler={onClick}
      />
    </Flexbox.Item>
  );
};

const ListItem = ({
  item,
  withTitleOnly,
  onClick,
}: {
  item: ItemResponse;
  withTitleOnly?: boolean;
  onClick: () => void;
}) => {
  return (
    <TradingListItem
      data={{
        title: item.name ? item.name : '',
        src: item.images ? item.images[0] : '',
        location: withTitleOnly
          ? ''
          : Array.from(item.preferredLocations || '')[0] || '',
      }}
      onPress={onClick}
      childDirection={'column'}
      cardDirection={'row'}
      itemJustify={'left'}
      fontSize={'cardList'}
      imageResizeMode={'cover'}
    />
  );
};

interface ItemListContentProps {
  onClickList: (data: ItemResponse) => void;
  withTitleOnly?: boolean;
  api: (args: Pageable) => Promise<AxiosResponse<SliceItemResponse, any>>;
}

const ItemListContent = ({
  onClickList,
  withTitleOnly,
  api,
}: ItemListContentProps) => {
  const [type, setType] = useState<ListViewType>('grid');
  const [sort, setSort] = useState<SectionOptionType>('최신순');

  const queryKey = ['homeMain_itemApi_getAllItems', SELECT_OPTIONS_QUERY[sort]];

  const { fetchNextPage, data, isFetchingNextPage } =
    useCommonInfiniteQuery<SliceItemResponse>({
      api,
      queryString: { size: 20, sort: SELECT_OPTIONS_QUERY[sort] },
      queryKey,
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
        console.debug('✅ home main success!! \n', data.pages);
      },
      onError(err) {
        console.debug('🚧🚧 home main fail!! 🚧🚧 \n', err);
      },
    });

  const handleLoadMoreData = () => {
    if (!isFetchingNextPage) return;
    fetchNextPage();
  };

  const renderItem = useMemo(() => {
    switch (type) {
      case 'grid':
        return ({ item }: { item: ItemResponse }) =>
          GridItem({
            item,
            withTitleOnly,
            onClick: () => {
              onClickList(item);
            },
          });

      case 'list':
        return ({ item }: { item: ItemResponse }) =>
          ListItem({
            item,
            withTitleOnly,
            onClick: () => {
              onClickList(item);
            },
          });
    }
  }, [withTitleOnly, onClickList, type]);

  const flatListProps = useFlatList<ItemResponse>({
    type,
    onEndReached: handleLoadMoreData,
    renderItem,
  });

  return (
    <ListView<ItemResponse>
      {...flatListProps}
      data={getPageableContent(data)}
      optionBar={
        <Flexbox
          width={'100%'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Flexbox.Item flex={1}>
            <Flexbox gap={5}>
              <PressableIcon
                onPress={() => {
                  setType('grid');
                }}
                name={type === 'grid' ? 'grid' : 'grid-outline'}
                size={20}
              />
              <PressableIcon
                onPress={() => setType('list')}
                name={type === 'grid' ? 'list-outline' : 'list'}
                size={20}
              />
            </Flexbox>
          </Flexbox.Item>
          <Flexbox.Item width={'auto'} alignSelf={'center'}>
            {!withTitleOnly && (
              <Select
                value={sort}
                options={['무작위', '최신순', '내 위치와 가까운 순']}
                onPressItem={(value) => setSort(value as SectionOptionType)} //TODO: Selct 의 generic 을 수정하면, 타입 단언을 사용하지 않아도 타입 추론되도록 할 수 있을 듯
                disabled={false}
              />
            )}
          </Flexbox.Item>
        </Flexbox>
      }
    />
  );
};

export { ItemListContent };
