import { createStackNavigator } from '@react-navigation/stack';
import { Flexbox, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

const Stack = createStackNavigator();

const FavoriteMain = () => {
  return (
    <ScreenWrapper>
      {/* write contents */}
      <Flexbox height={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Typography fontSize={12}>Favorite Main</Typography>
      </Flexbox>
    </ScreenWrapper>
  );
};

const FavoriteRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'FavoriteMain'} component={FavoriteMain} />
    </Stack.Navigator>
  );
};

export { FavoriteRoute };
