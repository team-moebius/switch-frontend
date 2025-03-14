import { useCallback, useMemo, useState } from 'react';
import { ScreenWrapper, WithImage } from 'src/components/template';
import { ListViewType, useFlatList } from 'src/hooks/useFlatList';
import {
  STUFF_LIST_MOCK,
  StuffListItemData,
} from '../home/SwitchDetailScreen/SwitchList.mock';
import { Flexbox, Icon, Typography } from 'src/components/atom';
import { ImageCard, PressableIcon } from 'src/components/molecule';
import { ListView } from 'src/components/template/ListView';
import { Pressable } from 'react-native';
import { itemJustifyStyle } from 'src/components/molecule/TradingListItem';
import { StackScreenProps } from '@react-navigation/stack';
import { FavoriteRouteParamList } from '.';

const GridItem = ({
  item,
  navigation,
}: {
  item: StuffListItemData;
  navigation: any;
}) => {
  const isDummy = (() => {
    return item.name.length === 0;
  })();
  const onLikeHandler = () => {
    alert('it‘s so good');
    // setLiked((prev) => !prev);
  };

  if (isDummy) {
    return <Flexbox.Item flex={1}></Flexbox.Item>;
  }

  return (
    <Flexbox.Item flex={1} position='relative'>
      <Flexbox position='absolute' bottom={35} right={10} zIndex={1}>
        {/* TODO : like에 따라 분기처리 해야 함 */}
        {/* <Icon name={'heart'} color='red' size={32} /> */}
        <PressableIcon name='heart-outline' size={32} onPress={onLikeHandler} />
      </Flexbox>
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
  // const [liked, setLiked] = useState(false);

  const { location, thumbnail, name } = item;

  const onPressHandler = () => {
    alert('ringring');
  };

  const onLikeHandler = () => {
    alert('it‘s so good');
    // setLiked((prev) => !prev);
  };

  return (
    <>
      <Flexbox>
        <Flexbox.Item flex={1}>
          <Pressable onPress={onPressHandler}>
            <Flexbox {...itemJustifyStyle['left']}>
              <Flexbox.Item width={'100%'}>
                <WithImage
                  text={name}
                  src={thumbnail as string}
                  fontSize={'cardList'}
                  imageWidth={100}
                  imageHeight={70}
                  imageResizeMode={'cover'}
                  renderItem={
                    <Flexbox justifyContent='space-between' width={'100%'}>
                      <Typography fontSize={13}>
                        {location as string}
                      </Typography>
                      <Flexbox.Item>
                        <Pressable onPress={onLikeHandler}>
                          {/* TODO : like에 따라 분기처리 해야 함 */}
                          {/* <Icon name={'heart'} color='red' size={32} /> */}
                          <Icon name={'heart-outline'} size={32} />
                        </Pressable>
                      </Flexbox.Item>
                    </Flexbox>
                  }
                  childDirection={'column'}
                  cardDirection={'row'}
                />
              </Flexbox.Item>
            </Flexbox>
          </Pressable>
        </Flexbox.Item>
      </Flexbox>
    </>
  );
};

const FavoriteMainScreen = ({
  navigation,
}: StackScreenProps<FavoriteRouteParamList, 'FavoriteMain'>) => {
  const [type, setType] = useState<ListViewType>('grid');

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

  const plusMockOne = (data: StuffListItemData[]) => {
    const copy = data.slice();
    copy.push({ name: '' });
    return copy;
  };

  return (
    <ScreenWrapper>
      <ListView<StuffListItemData>
        {...flatListProps}
        data={
          STUFF_LIST_MOCK.length % 2 !== 0
            ? plusMockOne(STUFF_LIST_MOCK)
            : STUFF_LIST_MOCK
        }
        optionBar={
          <Flexbox
            width={'100%'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Flexbox.Item flex={1}>
              <Flexbox gap={5}>
                <Pressable
                  onPress={() => {
                    setType('grid');
                  }}
                >
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
          </Flexbox>
        }
      />
    </ScreenWrapper>
  );
};

export { FavoriteMainScreen };
