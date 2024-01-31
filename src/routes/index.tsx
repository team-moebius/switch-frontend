import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { UserContext } from 'src/context/user';

import { SignRoute } from './sign';
import { RootTabs } from './root';
import { AppPasswordContext } from 'src/context/password';
import { AppUnlock } from './AppUnlock';

export type StackParamList = {
  Root: undefined;
  Sign: undefined;
  AppUnlock: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const NavigationRouter = () => {
  const { user } = useContext(UserContext);
  const {
    appPasswordList: { isSetPassword },
  } = useContext(AppPasswordContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={
          user ? (isSetPassword ? 'AppUnlock' : 'Root') : 'Sign'
        }
      >
        {/* if user signed in, route home */}
        <Stack.Group navigationKey={user === null ? 'Sign' : 'Main'}>
          <Stack.Screen name={'AppUnlock'} component={AppUnlock} />
          <Stack.Screen name={'Root'} component={RootTabs} />
          <Stack.Screen name={'Sign'} component={SignRoute} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRouter;
