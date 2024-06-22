import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatRoute, ChatRouteParamList } from './chat';
import { FavoriteRoute, FavoriteRouteParamList } from './favorite';
import { HomeRoute, HomeRouteParamList } from './home';
import { MyInfoParamList, MyInfoRoute } from './my-info';
import { RegisterRoute, RegisterRouteParamList } from './register';
import { NavigatorScreenParams } from '@react-navigation/native';

type RootTabsParamList = {
  Home: NavigatorScreenParams<HomeRouteParamList>;
  Favorite: NavigatorScreenParams<FavoriteRouteParamList>;
  Register: NavigatorScreenParams<RegisterRouteParamList>;
  Chat: NavigatorScreenParams<ChatRouteParamList>;
  MyInfo: NavigatorScreenParams<MyInfoParamList>;
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
