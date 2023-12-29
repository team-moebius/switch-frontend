import { useMemo, useState } from 'react';
import { Flexbox, Select } from 'src/components/atom';
import { ImageCard, TradingListItem } from 'src/components/molecule';
import { ListView } from 'src/components/template/ListView';
import { ListViewType, useFlatList } from 'src/hooks/useFlatList';
import { StuffListItemData, STUFF_LIST_MOCK } from '../SwitchList.mock';
import { PressableIcon } from 'src/components/molecule';
import { useCommonInfiniteQuery } from 'src/hooks/useCommonInfiniteQuery';
import { Pageable, SliceItemResponse } from '@team-moebius/api-typescript';
import { ItemApi } from 'src/api';

const SELECT_OPTIONS = ['무작위', '최신순', '내 위치와 가까운 순'] as const;
type SectionOptionType = (typeof SELECT_OPTIONS)[number];

const GridItem = ({
  item,
  withTitleOnly,
  onClick,
}: {
  item: StuffListItemData;
  withTitleOnly?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Flexbox.Item flex={1} width={'100%'}>
      <ImageCard
        title={item.name}
        src={item.thumbnail}
        desc={withTitleOnly ? '' : item.location}
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
  item: StuffListItemData;
  withTitleOnly?: boolean;
  onClick: () => void;
}) => {
  return (
    <TradingListItem
      data={{
        title: item.name,
        src: item.thumbnail || '',
        location: withTitleOnly ? '' : item.location || '',
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

const ItemListContent = ({
  onClickList,
  withTitleOnly,
}: {
  onClickList: (data: StuffListItemData) => void;
  withTitleOnly?: boolean;
}) => {
  const [type, setType] = useState<ListViewType>('grid');
  const [sort, setSort] = useState<SectionOptionType>('무작위');

  const { fetchNextPage, data, isFetchingNextPage } = useCommonInfiniteQuery<
    SliceItemResponse,
    Pageable
  >({
    api: ItemApi.getAllItems,
    queryString: { size: 20, sort: ['updatedAt', 'asc'] },
    queryKey: ['homeMain_itemApi_getAllItems'],
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

  const loadMoreData = () => {
    if (!isFetchingNextPage) return;
    fetchNextPage();
  };

  const renderItem = useMemo(() => {
    switch (type) {
      case 'grid':
        return ({ item }: { item: StuffListItemData }) =>
          GridItem({
            item,
            withTitleOnly,
            onClick: () => {
              onClickList(item);
            },
          });

      case 'list':
        return ({ item }: { item: StuffListItemData }) =>
          ListItem({
            item,
            withTitleOnly,
            onClick: () => {
              onClickList(item);
            },
          });
    }
  }, [withTitleOnly, onClickList, type]);

  const flatListProps = useFlatList<StuffListItemData>({
    type,
    onEndReached: loadMoreData,
    renderItem,
  });

  return (
    <ListView<StuffListItemData>
      {...flatListProps}
      data={STUFF_LIST_MOCK}
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
