import { createStackNavigator } from '@react-navigation/stack';
import { SignUpRoute } from './sign-up';

import { TitleScreen } from './TitleScreen';

const Stack = createStackNavigator();

const SignRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Title'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={'Title'} component={TitleScreen} />
      <Stack.Screen name={'SignUp'} component={SignUpRoute} />
      {/* In */}
    </Stack.Navigator>
  );
};

export { SignRoute };
