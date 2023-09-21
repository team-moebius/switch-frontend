import { createStackNavigator } from '@react-navigation/stack';
import { WithdrawFeedbackScreen } from './WithdrawFeedbackScreen';
import { FarewellScreen } from './FarewellScreen';
import { WithdrawInfoScreen } from './WithdrawInfoScreen';

const Stack = createStackNavigator();

const WithdrawRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'WithdrawInfo'} component={WithdrawInfoScreen} />
      <Stack.Screen
        name={'WithdrawFeedback'}
        component={WithdrawFeedbackScreen}
      />
      <Stack.Screen name={'Farewell'} component={FarewellScreen} />
    </Stack.Navigator>
  );
};

export { WithdrawRoute };
