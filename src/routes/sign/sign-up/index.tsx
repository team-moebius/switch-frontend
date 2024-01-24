import { createStackNavigator } from '@react-navigation/stack';
import { ScreenHeader } from 'src/components/molecule';
import { SubmitPhoneNumber } from './SubmitPhoneNumber';

import { SubmitValidationCode } from './SubmitValidationCode';

const Stack = createStackNavigator();

const SignUpRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => (
          <ScreenHeader {...props} containerStyle={{ height: 80 }} />
        ),
      }}
    >
      <Stack.Screen name={'SubmitPhone'} component={SubmitPhoneNumber} />
      <Stack.Screen
        name={'SubmitValidationCode'}
        component={SubmitValidationCode}
      />
    </Stack.Navigator>
  );
};

export { SignUpRoute };
