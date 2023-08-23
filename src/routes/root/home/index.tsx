import { createStackNavigator } from '@react-navigation/stack';
import { Flexbox, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

const Stack = createStackNavigator();

const HomeMain = () => {
  return (
    <ScreenWrapper>
      <Flexbox height={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Typography fontSize={12}>Home Main</Typography>
      </Flexbox>
    </ScreenWrapper>
  );
};

const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'HomeMain'} component={HomeMain} />
    </Stack.Navigator>
  );
};

export { HomeRoute };
