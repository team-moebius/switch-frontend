import { createStackNavigator } from '@react-navigation/stack';

import { MyInfoMainScreen } from './MyInfoMainScreen';
import { FeedbackScreen } from './FeedbackScreen';
import { VersionScreen } from './VersionScreen';
import { SettingScreen } from './SettingScreen';
import { SwitchRecordsScreen } from './SwitchRecordsScreen';
import { SettingMainScreen } from './SettingMainScreen';
import { WithdrawRoute } from './WithdrawScreen';
import { SecuritySettingRoute } from './security-setting';

const Stack = createStackNavigator();

const MyInfoRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'MyInfoHome'} component={MyInfoMainScreen} />
      <Stack.Screen name={'SettingMain'} component={SettingMainScreen} />
      <Stack.Screen name={'Record'} component={SwitchRecordsScreen} />
      <Stack.Screen name={'Setting'} component={SettingScreen} />
      <Stack.Screen
        name={'Security'}
        navigationKey={'security-setting'}
        component={SecuritySettingRoute}
      />
      <Stack.Screen name={'Version'} component={VersionScreen} />
      <Stack.Screen name={'Feedback'} component={FeedbackScreen} />
      <Stack.Screen name={'Withdraw'} component={WithdrawRoute} />
    </Stack.Navigator>
  );
};

export { MyInfoRoute };
