import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatRoute } from './chat';
import { FavoriteRoute } from './favorite';
import { HomeRoute } from './home';
import { MyInfoRoute } from './my-info';
import { RegisterRoute } from './register';

type RootTabsParamList = {
  Home: undefined;
  Favorite: undefined;
  Register: undefined;
  Chat: undefined;
  MyInfo: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParamList>();

const RootTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={'Home'} component={HomeRoute} />
      <Tab.Screen name={'Favorite'} component={FavoriteRoute} />
      <Tab.Screen name={'Register'} component={RegisterRoute} />
      <Tab.Screen name={'Chat'} component={ChatRoute} />
      <Tab.Screen name={'MyInfo'} component={MyInfoRoute} />
    </Tab.Navigator>
  );
};

export { RootTabs, RootTabsParamList };
