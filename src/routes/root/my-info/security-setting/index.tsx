import { createStackNavigator } from '@react-navigation/stack';
import { SecuritySettingMain } from './screens/SecuritySettingMain';
import { SecuritySettingPassword } from './screens/SecuritySettingPassword';

const Stack = createStackNavigator();

const SecuritySettingRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={'SecuritySettingMain'}
        navigationKey={'/security-setting'}
        component={SecuritySettingMain}
      />
      <Stack.Screen
        name={'SecuritySettingPassword'}
        navigationKey={'/security-setting/password-setting'}
        component={SecuritySettingPassword}
      />
    </Stack.Navigator>
  );
};

export { SecuritySettingRoute };
