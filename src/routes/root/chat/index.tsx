import { createStackNavigator } from '@react-navigation/stack';
import { ChatMainScreen } from './ChatMainScreen';
import ChatAlbumScreen from './ChatAlbumScreen';

const Stack = createStackNavigator();

const ChatRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'ChatMain'} component={ChatMainScreen} />
      <Stack.Screen name={'ChatAlbum'} component={ChatAlbumScreen} />
    </Stack.Navigator>
  );
};

export { ChatRoute };
