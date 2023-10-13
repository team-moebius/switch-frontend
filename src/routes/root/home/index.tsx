import { createStackNavigator } from '@react-navigation/stack';
import { HomeMainScreen } from './HomeMainScreen';
import { SwitchDetailScreen } from './HomeMainScreen/SwitchDetailScreen';

const Stack = createStackNavigator();

const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'HomeMain'} component={HomeMainScreen} />
      <Stack.Screen name={'SwitchDetail'} component={SwitchDetailScreen} />
    </Stack.Navigator>
  );
};

export { HomeRoute };
