import { createStackNavigator } from '@react-navigation/stack';
import { ChatMainScreen } from './ChatMainScreen';
import { SwitchResultScreen } from './SwitchResultScreen';
import { ChatDetailScreen } from './ChatDetailScreen';

const Stack = createStackNavigator();

const ChatRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'ChatMain'} component={ChatMainScreen} />
      <Stack.Screen name={'SwitchResult'} component={SwitchResultScreen} />
      <Stack.Screen name={'ChatDetail'} component={ChatDetailScreen} />
    </Stack.Navigator>
  );
};

export { ChatRoute };
