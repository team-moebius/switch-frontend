import { createStackNavigator } from '@react-navigation/stack';

import { ScreenWrapper } from 'src/components/template';
import { SwitchDetailForm } from './SwitchDetail/Form';

const Stack = createStackNavigator();

const RegisterMain = () => {
  return (
    <ScreenWrapper>
      <SwitchDetailForm />
    </ScreenWrapper>
  );
};

const RegisterRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='RegisterMain' component={RegisterMain} />
    </Stack.Navigator>
  );
};

export { RegisterRoute, RegisterMain };
