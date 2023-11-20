import { useState } from 'react';

import { Flexbox, Icon, Toggle } from 'src/components/atom';

import { ScreenWrapper } from 'src/components/template';
import { HistoryListContent } from './content/HistoryListContent';
import { ItemListContent } from './content/ItemListContent';

const HomeMainScreen = ({ navigation }) => {
  const [isItemView, setIsItemView] = useState<boolean>(true);

  return (
    <ScreenWrapper>
      <Flexbox
        height={'90%'}
        flexDirection={'column'}
        justifyContent={'space-between'}
      >
        {isItemView ? (
          <ItemListContent
            onClickList={(data) => {
              navigation?.navigate('SwitchDetail', { ...data });
            }}
          />
        ) : (
          <HistoryListContent />
        )}
        <Flexbox
          height={'10%'}
          width={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Toggle
            value={!isItemView}
            handleOnPress={() => {
              setIsItemView((prev) => !prev);
            }}
            selectColor='blue'
            backgroundColor='gray'
            iconA={
              <Icon
                name='timer-outline'
                size={24}
                color={isItemView ? 'black' : 'white'}
              />
            }
            iconB={
              <Icon
                name='copy-outline'
                size={24}
                color={isItemView ? 'white' : 'black'}
              />
            }
          />
        </Flexbox>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { HomeMainScreen };
