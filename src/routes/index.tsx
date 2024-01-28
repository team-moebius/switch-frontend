import { useContext, useEffect, useMemo } from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';

import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import { UserContext } from 'src/context/user';

import { SignRoute } from './sign';
import { RootTabs } from './root';

export interface commonNavigationProps<T extends {}, U extends keyof T> {
  navigation: StackNavigationProp<T, U>;
  route: RouteProp<T, U>;
}

const Stack = createStackNavigator();

const NavigationRouter = () => {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* if user signed in, route home */}
        <Stack.Group navigationKey={user === null ? 'Sign' : 'Main'}>
          {user ? (
            <>
              <Stack.Screen name={'Root'} component={RootTabs} />
              <Stack.Screen name={'Sign'} component={SignRoute} />
            </>
          ) : (
            <>
              <Stack.Screen name={'Sign'} component={SignRoute} />
              <Stack.Screen name={'Root'} component={RootTabs} />
            </>
          )}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRouter;
