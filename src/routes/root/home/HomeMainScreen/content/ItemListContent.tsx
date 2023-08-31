import React from 'react';
import { ReactNode, useCallback, useMemo, useState } from 'react';
import { FlatList, FlatListProps, Pressable } from 'react-native';
import { Box, Flexbox, Icon, Select } from 'src/components/atom';
import { ImageCard, TradingListItem } from 'src/components/molecule';
import { StuffListItemData, STUFF_LIST_MOCK } from '../SwitchList.mock';

type ViewType = 'grid' | 'list';

interface ListViewProps<T>
  extends Pick<
    FlatListProps<T>,
    | 'onEndReached'
    | 'keyExtractor'
    | 'numColumns'
    | 'columnWrapperStyle'
    | 'ItemSeparatorComponent'
    | 'onEndReachedThreshold'
    | 'renderItem'
  > {
  data: Array<T>;
  optionBar?: ReactNode;
  viewKey?: string;
}
function ListView<T extends {}>({
  viewKey = '',
  data,
  optionBar,
  ...props
}: ListViewProps<T>) {
  return (
    <Flexbox flexDirection={'column'} width={'100%'} height={'90%'}>
      <Flexbox.Item width={'100%'}>{optionBar}</Flexbox.Item>
      <Flexbox.Item width={'100%'} flex={1}>
        <FlatList<T> key={viewKey} {...props} data={data} />
      </Flexbox.Item>
    </Flexbox>
  );
}

const Separator = () => (
  <Box height={1} backgroundColor={'gray'} mt={10} mb={10} />
);

interface UseFlatListArgs<T>
  extends Pick<
    FlatListProps<T>,
    'onEndReached' | 'keyExtractor' | 'renderItem'
  > {
  type: ViewType;
}

function useFlatList<T extends {}>({
  type,
  onEndReached,
  keyExtractor = (item, index) => `${index}`,
  renderItem,
}: UseFlatListArgs<T>): { viewKey: string } & Pick<
  FlatListProps<T>,
  | 'numColumns'
  | 'columnWrapperStyle'
  | 'ItemSeparatorComponent'
  | 'onEndReachedThreshold'
  | 'renderItem'
> {
  const props: ReturnType<typeof useFlatList<T>> = useMemo(() => {
    switch (type) {
      case 'grid':
        return {
          keyExtractor,
          numColumns: 2,
          onEndReachedThreshold: 0.1,
          onEndReached,
          renderItem,
          columnWrapperStyle: {
            gap: 10,
          },
          viewKey: `${type}`, //TODO: numColumns 를 변경할 경우, viewKey 가 동적으로 변해야함
        };
      case 'list':
        return {
          keyExtractor,
          numColumns: 1,
          onEndReached,
          onEndReachedThreshold: 0.1,
          renderItem,
          ItemSeparatorComponent: Separator,
          viewKey: `${type}`, //TODO:  numColumns 를 변경할 경우, viewKey 가 동적으로 변해야함
        };
    }
  }, [type, onEndReached, keyExtractor, renderItem]);

  return props;
}

const SELECT_OPTIONS = ['무작위', '최신순', '내 위치와 가까운 순'] as const;
type SectionOptionType = (typeof SELECT_OPTIONS)[number];

const GridItem = ({ item }: { item: StuffListItemData }) => {
  return (
    <Flexbox.Item flex={1} width={'100%'}>
      <ImageCard
        title={item.name}
        src={item.thumbnail}
        desc={item.location}
        width={'100%'}
        height={150}
        resizeMode={'cover'}
        onClickHandler={() => {
          window.alert('clicked');
        }}
      />
    </Flexbox.Item>
  );
};

const MemoizedGridItem = React.memo(GridItem);

const ListItem = ({ item }: { item: StuffListItemData }) => {
  return (
    <TradingListItem
      data={{
        title: item.name,
        src: item.thumbnail || '',
        location: item.location || '',
      }}
      onPress={() => {
        alert('list click');
      }}
      childDirection={'column'}
      cardDirection={'row'}
      itemJustify={'left'}
      fontSize={'cardList'}
      imageResizeMode={'cover'}
    />
  );
};

const MemoizedListItem = React.memo(ListItem);

const ItemListContent = () => {
  const [type, setType] = useState<ViewType>('grid');
  const [sort, setSort] = useState<SectionOptionType>('무작위');

  const loadMoreData = useCallback(() => {
    console.debug('reacted end');
  }, []);

  const renderItem = useMemo(() => {
    switch (type) {
      case 'grid':
        return MemoizedGridItem;
      case 'list':
        return MemoizedListItem;
    }
  }, [type]);

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
              <Pressable onPress={() => setType('grid')}>
                <Icon
                  name={type === 'grid' ? 'grid' : 'grid-outline'}
                  size={20}
                />
              </Pressable>
              <Pressable onPress={() => setType('list')}>
                <Icon
                  name={type === 'grid' ? 'list-outline' : 'list'}
                  size={20}
                />
              </Pressable>
            </Flexbox>
          </Flexbox.Item>
          <Flexbox.Item width={'auto'} alignSelf={'center'}>
            <Select
              value={sort}
              options={['무작위', '최신순', '내 위치와 가까운 순']}
              onPressItem={(value) => setSort(value as SectionOptionType)} //TODO: Selct 의 generic 을 수정하면, 타입 단언을 사용하지 않아도 타입 추론되도록 할 수 있을 듯
              disabled={false}
            />
          </Flexbox.Item>
        </Flexbox>
      }
    />
  );
};

export { ItemListContent };
