import { createStackNavigator } from '@react-navigation/stack';
import { SubmitPhoneNumber } from './SubmitPhoneNumber';

import { SubmitValidationCode } from './SubmitValidationCode';

const Stack = createStackNavigator();

const SignUpRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitle: '' }}>
      <Stack.Screen name={'SubmitPhone'} component={SubmitPhoneNumber} />
      <Stack.Screen
        name={'SubmitValidationCode'}
        component={SubmitValidationCode}
      />
    </Stack.Navigator>
  );
};

export { SignUpRoute };
