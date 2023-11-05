import { createStackNavigator } from '@react-navigation/stack';
import { ChatMainScreen } from './ChatMainScreen';

const Stack = createStackNavigator();

const ChatRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'ChatMain'} component={ChatMainScreen} />
    </Stack.Navigator>
  );
};

export { ChatRoute };
