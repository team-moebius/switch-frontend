import { createStackNavigator } from '@react-navigation/stack';
import { ChatMainScreen } from './ChatMainScreen';
import { ChatDetailScreen } from './ChatDetailScreen';

const Stack = createStackNavigator();

const ChatRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'ChatMain'} component={ChatMainScreen} />
      <Stack.Screen name={'ChatDetail'} component={ChatDetailScreen} />
    </Stack.Navigator>
  );
};

export { ChatRoute };
