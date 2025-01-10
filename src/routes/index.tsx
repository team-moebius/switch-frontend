import { useContext, useEffect, useMemo, useRef } from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { UserContext } from 'src/context/user';

import { SignRoute, SignRouteParamList } from './sign';
import { RootTabs, RootTabsParamList } from './root';
import { AppPasswordContext } from 'src/context/password';
import { AppUnlock } from './AppUnlock';
import useSocket from 'src/hooks/useSocket';

export type NavigationRouterParamList = {
  Root: NavigatorScreenParams<RootTabsParamList>;
  Sign: NavigatorScreenParams<SignRouteParamList>;
  AppUnlock: undefined;
};

const Stack = createStackNavigator<NavigationRouterParamList>();

const NavigationRouter = () => {
  const { userId } = useContext(UserContext);
  const {
    appPasswordList: { isSetPassword },
  } = useContext(AppPasswordContext);
  const { disconnect, connect } = useSocket();

  const initRouteName = useRef<keyof NavigationRouterParamList | null>(null);

  if (initRouteName.current === null) {
    initRouteName.current = userId
      ? isSetPassword
        ? 'AppUnlock'
        : 'Root'
      : 'Sign';
    // initRouteName.current = 'Sign';
  }

  useEffect(() => {
    if (userId) connect();
    return () => disconnect();
  }, [userId]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initRouteName.current}
      >
        {/* if user signed in, route home */}
        <Stack.Group navigationKey={initRouteName.current}>
          <Stack.Screen name={'AppUnlock'} component={AppUnlock} />
          <Stack.Screen name={'Root'} component={RootTabs} />
          <Stack.Screen name={'Sign'} component={SignRoute} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRouter;
