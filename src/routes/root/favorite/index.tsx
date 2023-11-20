import { createStackNavigator } from '@react-navigation/stack';
import { FavoriteMainScreen } from './FavoriteMainScreen';

const Stack = createStackNavigator();

const FavoriteRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'FavoriteMain'} component={FavoriteMainScreen} />
    </Stack.Navigator>
  );
};

export { FavoriteRoute };
