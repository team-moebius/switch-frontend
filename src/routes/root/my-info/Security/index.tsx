import { createStackNavigator } from '@react-navigation/stack';
import { SecuritySettingPassword } from './screens/SecuritySettingPassword';
import { SecurityUnlock } from './screens/SecurityUnlock';

type UnlockType = 'PASSWORD' | 'BIO_PASSWORD';

type SecuritySettingParamList = {
  SecuritySettingPassword: undefined;
  SecurityUnlock: { value: UnlockType };
};

const Stack = createStackNavigator<SecuritySettingParamList>();

const SecuritySettingRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={'SecuritySettingPassword'}
        component={SecuritySettingPassword}
      />
      <Stack.Screen name={'SecurityUnlock'} component={SecurityUnlock} />
    </Stack.Navigator>
  );
};

export { SecuritySettingRoute, SecuritySettingParamList };
