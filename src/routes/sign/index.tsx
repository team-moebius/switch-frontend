import { createStackNavigator } from '@react-navigation/stack';
import { TitleScreen } from './TitleScreen';

const Stack = createStackNavigator();

const SignRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Title'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={'Title'} component={TitleScreen} />
      {/* In */}
    </Stack.Navigator>
  );
};

export { SignRoute };
