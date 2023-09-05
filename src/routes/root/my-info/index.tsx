import { createStackNavigator } from '@react-navigation/stack';
import { Flexbox, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';
import { MyInfoMainScreen } from './MyInfoMainScreen';
import { FeedbackScreen } from './FeedbackScreen';
import { VersionScreen } from './VersionScreen';

const Stack = createStackNavigator();

const MyInfoMain = () => {
  return (
    <ScreenWrapper>
      {/* write contents */}
      <Flexbox height={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Typography fontSize={12}>My Info Home</Typography>
      </Flexbox>
    </ScreenWrapper>
  );
};

const MyInfoRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'MyInfoHome'} component={MyInfoMainScreen} />
      <Stack.Screen name={'Feedback'} component={FeedbackScreen} />
      <Stack.Screen name={'Version'} component={VersionScreen} />
    </Stack.Navigator>
  );
};

export { MyInfoRoute };
