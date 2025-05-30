import { useState } from 'react';

import { Flexbox, Icon, Toggle } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

import { HistoryListContent } from './content/HistoryListContent';
import { ItemListContent } from './content/ItemListContent';
import { ItemAPI } from 'src/api';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeRouteParamList } from '..';
import { PADDING } from 'src/assets/theme/base';

const HomeMainScreen = ({
  navigation,
}: StackScreenProps<HomeRouteParamList, 'HomeMain'>) => {
  const [isItemView, setIsItemView] = useState<boolean>(true);

  return (
    <ScreenWrapper>
      <Flexbox
        height={'100%'}
        position={'relative'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        pl={PADDING.wrapper.horizontal}
        pr={PADDING.wrapper.horizontal}
      >
        {isItemView ? (
          <ItemListContent
            onClickList={(data) => {
              navigation?.navigate('SwitchDetail', data);
            }}
            api={(params) =>
              ItemAPI.getItems(undefined, params.page, params.size, params.sort)
            }
          />
        ) : (
          <HistoryListContent />
        )}
        <Flexbox
          position={'absolute'}
          bottom={20}
          justifyContent={'center'}
          left={'50%'}
          right={'50%'}
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
