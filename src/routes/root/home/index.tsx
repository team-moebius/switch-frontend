import { createStackNavigator } from '@react-navigation/stack';
import { HomeMainScreen } from './HomeMainScreen';
import MySwitchListScreen from './HomeMainScreen/MySwitchListScreen';

const Stack = createStackNavigator();

const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'HomeMain'} component={HomeMainScreen} />
      <Stack.Screen name={'MySwitchList'} component={MySwitchListScreen} />
    </Stack.Navigator>
  );
};

export { HomeRoute };
