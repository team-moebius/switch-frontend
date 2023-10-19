import { useCallback, useMemo, useState } from 'react';
import { Flexbox, Select } from 'src/components/atom';
import { ImageCard, TradingListItem } from 'src/components/molecule';
import { ListView } from 'src/components/template/ListView';
import { ListViewType, useFlatList } from 'src/hooks/useFlatList';
import { StuffListItemData, STUFF_LIST_MOCK } from '../SwitchList.mock';
import PressableIcon from 'src/components/molecule/PressableIcon';

const SELECT_OPTIONS = ['무작위', '최신순', '내 위치와 가까운 순'] as const;
type SectionOptionType = (typeof SELECT_OPTIONS)[number];

const GridItem = ({
  item,
  navigation,
}: {
  item: StuffListItemData;
  navigation: any;
}) => {
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
          navigation.navigate('SwitchDetail');
        }}
      />
    </Flexbox.Item>
  );
};

const ListItem = ({
  item,
  navigation,
}: {
  item: StuffListItemData;
  navigation: any;
}) => {
  return (
    <TradingListItem
      data={{
        title: item.name,
        src: item.thumbnail || '',
        location: item.location || '',
      }}
      onPress={() => {
        navigation.navigate('SwitchDetail');
      }}
      childDirection={'column'}
      cardDirection={'row'}
      itemJustify={'left'}
      fontSize={'cardList'}
      imageResizeMode={'cover'}
    />
  );
};

const ItemListContent = ({ navigation }) => {
  const [type, setType] = useState<ListViewType>('grid');
  const [sort, setSort] = useState<SectionOptionType>('무작위');

  const loadMoreData = useCallback(() => {
    console.debug('reacted end');
  }, []);

  const renderItem = useMemo(() => {
    switch (type) {
      case 'grid':
        return ({ item }: { item: StuffListItemData }) =>
          GridItem({ item, navigation });

      case 'list':
        return ({ item }: { item: StuffListItemData }) =>
          ListItem({ item, navigation });
    }
  }, [navigation, type]);

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
