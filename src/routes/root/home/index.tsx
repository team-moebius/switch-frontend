import { createStackNavigator } from '@react-navigation/stack';
import { HomeMainScreen } from './HomeMainScreen';

const Stack = createStackNavigator();

const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'HomeMain'} component={HomeMainScreen} />
    </Stack.Navigator>
  );
};

export { HomeRoute };
