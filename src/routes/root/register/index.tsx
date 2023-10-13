import { createStackNavigator } from '@react-navigation/stack';

import { ScreenWrapper } from 'src/components/template';
import { SwitchDetailForm } from './SwitchDetail/Form';
import { PreferredAddress } from './PreferredAddress';

const Stack = createStackNavigator();

const RegisterMain = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <SwitchDetailForm navigation={navigation} />
    </ScreenWrapper>
  );
};

const RegisterRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='RegisterMain' component={RegisterMain} />
      <Stack.Screen name='PreferredAddress' component={PreferredAddress} />
    </Stack.Navigator>
  );
};

export { RegisterRoute, RegisterMain };
