import { useEffect, useRef, useState } from 'react';

import { Flexbox, Icon, Toggle } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

import { HistoryListContent } from './content/HistoryListContent';
import { ItemListContent } from './content/ItemListContent';

import { useCommonQuery } from 'src/hooks/useCommonQuery';
import { ItemApi } from 'src/api';
import { Item } from '@team-moebius/api-typescript';
import { expoSecureStore } from 'src/common/secureStore';

const HomeMainScreen = ({ navigation }) => {
  const [isItemView, setIsItemView] = useState<boolean>(true);

  const [token, setToken] = useState('');
  const { data, isLoading, isSuccess } = useCommonQuery<
    Array<Item>,
    Parameters<typeof ItemApi.getAllItems>
  >({
    api: ItemApi.getAllItems,
    queryKey: [
      'homeMain_itemApi_getAllItems',
      {
        headers: {
          Authorization: token,
        },
      },
    ],
    onSuccess(data) {
      console.debug('✅ homemain success! ::: ', data);
    },
    onError(err) {
      console.error('⛔️ ⚠️ homemain failed! ::: ', err);
    },
    enabled: !!token,
  });

  useEffect(() => {
    const getToken = async () => {
      const result = await expoSecureStore.getToken('token');
      if (result) setToken(result);
    };
    getToken();
  });

  return (
    <ScreenWrapper>
      <Flexbox
        height={'100%'}
        position={'relative'}
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
