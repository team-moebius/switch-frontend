import { createStackNavigator } from '@react-navigation/stack';
import { SignUpRoute, SignUpRouteParamList } from './sign-up';

import { TitleScreen } from './TitleScreen';
import { NavigatorScreenParams } from '@react-navigation/native';

type SignRouteParamList = {
  Title: undefined;
  SignUp: NavigatorScreenParams<SignUpRouteParamList>;
};

const Stack = createStackNavigator<SignRouteParamList>();

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

export { SignRoute, SignRouteParamList };
