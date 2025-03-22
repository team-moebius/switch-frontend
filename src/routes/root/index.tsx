import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatRoute, ChatRouteParamList } from './chat';
import { FavoriteRoute, FavoriteRouteParamList } from './favorite';
import { HomeRoute, HomeRouteParamList } from './home';
import { MyInfoParamList, MyInfoRoute } from './my-info';
import { RegisterRoute, RegisterRouteParamList } from './register';
import { NavigatorScreenParams } from '@react-navigation/native';
import { Icon } from 'src/components/atom';

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
      <Tab.Screen
        name={'Home'}
        component={HomeRoute}
        options={{ tabBarIcon: () => <Icon name={'home'} size={20} /> }}
      />
      <Tab.Screen
        name={'Favorite'}
        component={FavoriteRoute}
        options={{ tabBarIcon: () => <Icon name={'heart'} size={20} /> }}
      />
      <Tab.Screen
        name={'Register'}
        component={RegisterRoute}
        options={{ tabBarIcon: () => <Icon name={'add-circle'} size={20} /> }}
      />
      <Tab.Screen
        name={'Chat'}
        component={ChatRoute}
        options={{
          tabBarIcon: () => <Icon name={'chatbox-ellipses'} size={20} />,
        }}
      />
      <Tab.Screen
        name={'MyInfo'}
        component={MyInfoRoute}
        options={{
          tabBarIcon: () => <Icon name={'information-circle'} size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

export { RootTabs, RootTabsParamList };
