import { createStackNavigator } from '@react-navigation/stack';
import { FavoriteMainScreen } from './FavoriteMainScreen';

type FavoriteRouteParamList = {
  FavoriteMain: undefined;
};

const Stack = createStackNavigator<FavoriteRouteParamList>();

const FavoriteRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'FavoriteMain'} component={FavoriteMainScreen} />
    </Stack.Navigator>
  );
};

export { FavoriteRoute, FavoriteRouteParamList };
