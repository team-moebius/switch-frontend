import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from 'src/screens';

const Stack = createStackNavigator();

const MainRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Main'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={'Main'} component={MainScreen} />
    </Stack.Navigator>
  );
};

export { MainRoutes };
