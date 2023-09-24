import React from 'react';
import { Flexbox } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';
import { STUFF_LIST_MOCK, StuffListItemData } from './SwitchList.mock';
import { FlatList } from 'react-native';
import { ImageCard } from 'src/components/molecule';

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

const MySwitchListScreen = () => {
  return (
    <ScreenWrapper>
      <Flexbox>
        <Flexbox.Item width={'100%'} height={'90%'} flex={1}>
          {STUFF_LIST_MOCK.length ? (
            <FlatList<StuffListItemData>
              data={STUFF_LIST_MOCK}
              renderItem={GridItem}
              keyExtractor={(item, index) => `${index}`}
              numColumns={2}
              onEndReached={() => {
                console.debug('reacted end');
              }}
              onEndReachedThreshold={0.1}
            />
          ) : (
            '아직 등록된 물품이 없습니다.'
          )}
        </Flexbox.Item>
      </Flexbox>
    </ScreenWrapper>
  );
};
export default MySwitchListScreen;
