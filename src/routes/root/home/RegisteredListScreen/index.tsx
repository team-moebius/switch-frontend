import { Flexbox } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';
import {
  STUFF_LIST_MOCK,
  StuffListItemData,
} from '../HomeMainScreen/SwitchList.mock';
import { useCallback, useMemo, useState } from 'react';
import { ListViewType, useFlatList } from 'src/hooks/useFlatList';
import {
  ImageCard,
  PressableIcon,
  TradingListItem,
} from 'src/components/molecule';
import { ListView } from 'src/components/template/ListView';

const GridItem = ({
  item,
  onClick,
}: {
  item: StuffListItemData;
  // navigation: any;
  onClick?: () => void;
}) => {
  return (
    <Flexbox.Item flex={1} width={'100%'}>
      <ImageCard
        title={item.name}
        src={item.thumbnail}
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
  onClick,
}: {
  item: StuffListItemData;
  onClick: () => void;
}) => {
  return (
    <TradingListItem
      data={{
        title: item.name,
        src: item.thumbnail || '',
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

const RegisteredListScreen = () => {
  const [type, setType] = useState<ListViewType>('grid');

  const loadMoreData = useCallback(() => {
    console.debug('reacted end');
  }, []);

  const renderItem = useMemo(() => {
    switch (type) {
      case 'grid':
        return ({ item }: { item: StuffListItemData }) =>
          GridItem({
            item,
            onClick: () => {
              alert('open modal');
            },
          });

      case 'list':
        return ({ item }: { item: StuffListItemData }) =>
          ListItem({
            item,
            onClick: () => {
              alert('open modal');
            },
          });
    }
  }, [type]);

  const flatListProps = useFlatList<StuffListItemData>({
    type,
    onEndReached: loadMoreData,
    renderItem,
  });
  return (
    <ScreenWrapper>
      <ListView<StuffListItemData>
        {...flatListProps}
        data={STUFF_LIST_MOCK}
        optionBar={
          <Flexbox
            width={'100%'}
            alignItems={'center'}
            justifyContent='flex-start'
            gap={5}
          >
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
        }
      />
    </ScreenWrapper>
  );
};

export { RegisteredListScreen };
