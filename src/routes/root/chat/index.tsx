import { createStackNavigator } from '@react-navigation/stack';
import { Flexbox, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

const Stack = createStackNavigator();

const ChatMain = () => {
  return (
    <ScreenWrapper>
      {/* write contents */}
      <Flexbox height={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Typography fontSize={12}>Chat Main</Typography>
      </Flexbox>
    </ScreenWrapper>
  );
};

const ChatRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'ChatMain'} component={ChatMain} />
    </Stack.Navigator>
  );
};

export { ChatRoute };
