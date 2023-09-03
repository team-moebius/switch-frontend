import { useCallback, useMemo, useState } from 'react';
import { Pressable } from 'react-native';
import { Flexbox, Icon, Select } from 'src/components/atom';
import { ImageCard, TradingListItem } from 'src/components/molecule';
import { ListView } from 'src/components/template/ListView';
import { useFlatList } from 'src/hooks/useFlatList';
import { StuffListItemData, STUFF_LIST_MOCK } from '../SwitchList.mock';

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

const ItemListContent = () => {
  const [type, setType] = useState<ViewType>('grid');
  const [sort, setSort] = useState<SectionOptionType>('무작위');

  const loadMoreData = useCallback(() => {
    console.debug('reacted end');
  }, []);

  const renderItem = useMemo(() => {
    switch (type) {
      case 'grid':
        return GridItem;
      case 'list':
        return ListItem;
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
