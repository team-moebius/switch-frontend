import { createStackNavigator } from '@react-navigation/stack';
import { Flexbox, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

const Stack = createStackNavigator();

const RegisterMain = () => {
  return (
    <ScreenWrapper>
      {/* write contents */}
      <Flexbox height={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Typography fontSize={12}>Register Main</Typography>
      </Flexbox>
    </ScreenWrapper>
  );
};

const RegisterRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='RegisterMain' component={RegisterMain} />
    </Stack.Navigator>
  );
};

export { RegisterRoute };
