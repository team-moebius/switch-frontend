import { createStackNavigator } from '@react-navigation/stack';
import { SecuritySettingMain } from './screens/SecuritySettingMain';
import { SecuritySettingPassword } from './screens/SecuritySettingPassword';

const Stack = createStackNavigator();

const SecuritySettingRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={'SecuritySettingMain'}
        component={SecuritySettingMain}
      />
      <Stack.Screen
        name={'SecuritySettingPassword'}
        component={SecuritySettingPassword}
      />
    </Stack.Navigator>
  );
};

export { SecuritySettingRoute };
