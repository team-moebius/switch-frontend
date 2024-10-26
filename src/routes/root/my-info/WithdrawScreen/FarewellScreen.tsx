import { useEffect } from 'react';

import { Flexbox, Typography } from 'src/components/atom';

import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import {
  APP_BIO_PASSWORD,
  APP_PASSWORD,
  TOKEN,
  USER_ID,
  expoSecureStore,
} from 'src/common/secureStore';

import PALETTE from 'src/assets/theme/colors/palettes';

import { NavigationRouterParamList } from 'src/routes';

const FarewellScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<NavigationRouterParamList, 'Sign'>>();
  useEffect(() => {
    const backToSign = async (
      navigation: StackNavigationProp<NavigationRouterParamList>
    ) => {
      setTimeout(() => {
        expoSecureStore.deleteToken(TOKEN);
        expoSecureStore.deleteToken(USER_ID);
        expoSecureStore.deleteToken(APP_PASSWORD);
        expoSecureStore.deleteToken(APP_BIO_PASSWORD);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Sign' }],
        });
      }, 3000);
    };

    backToSign(navigation);
  }, []);
  return (
    <Flexbox
      alignItems='center'
      justifyContent='center'
      height={'100%'}
      backgroundColor={PALETTE.white[100]}
    >
      <Typography fontSize={20}>
        그 동안 스위치를 이용해 주셔서 감사합니다.
      </Typography>
    </Flexbox>
  );
};

export { FarewellScreen };
