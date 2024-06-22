import { createStackNavigator } from '@react-navigation/stack';

import { Flexbox } from 'src/components/atom';
import { ScreenHeader, PressableIcon } from 'src/components/molecule';

import { SecuritySettingParamList, SecuritySettingRoute } from './Security';
import { WithdrawParamList, WithdrawRoute } from './WithdrawScreen';

import { MyInfoMainScreen } from './MyInfoMainScreen';
import { FeedbackScreen } from './FeedbackScreen';
import { VersionScreen } from './VersionScreen';
import { SettingMainScreen } from './SettingMainScreen';
import { MyInfoEditScreen } from './MyInfoEditScreen';
import { UserInfoResponse } from '@team-moebius/api-typescript';
import { NavigatorScreenParams } from '@react-navigation/native';

type MyInfoParamList = {
  MyInfoMain: undefined;
  MyInfoEdit: { userInfo: UserInfoResponse | undefined };
  Withdraw: NavigatorScreenParams<WithdrawParamList>;
  SettingMain: undefined;
  Security: NavigatorScreenParams<SecuritySettingParamList>;
  Version: undefined;
  Feedback: undefined;
};

const Stack = createStackNavigator<MyInfoParamList>();

const MyInfoRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={'MyInfoMain'}
          component={MyInfoMainScreen}
          options={{
            header: (props) => {
              return (
                <ScreenHeader
                  {...props}
                  backVisible={false}
                  right={
                    <Flexbox
                      width={'100%'}
                      flexDirection={'row'}
                      justifyContent={'flex-end'}
                    >
                      <Flexbox.Item flex={1}>
                        <PressableIcon
                          size={24}
                          name={'settings'}
                          onPress={() => {
                            props.navigation.navigate('SettingMain');
                          }}
                        />
                      </Flexbox.Item>
                      <Flexbox.Item flex={1}>
                        <PressableIcon
                          size={24}
                          name={'notifications-outline'}
                          onPress={() => {
                            props.navigation.navigate('Notifications');
                          }}
                        />
                      </Flexbox.Item>
                    </Flexbox>
                  }
                />
              );
            },
          }}
        />
        <Stack.Screen name={'MyInfoEdit'} component={MyInfoEditScreen} />
        <Stack.Screen
          name={'Withdraw'}
          component={WithdrawRoute}
          options={{ header: ScreenHeader }}
        />
      </Stack.Group>
      <Stack.Screen
        name={'SettingMain'}
        component={SettingMainScreen}
        options={{ header: ScreenHeader }}
      />
      <Stack.Group>
        <Stack.Screen
          name={'Security'}
          component={SecuritySettingRoute}
          options={{ header: ScreenHeader }}
        />
      </Stack.Group>
      <Stack.Screen
        name={'Version'}
        component={VersionScreen}
        options={{ header: ScreenHeader }}
      />
      <Stack.Screen
        name={'Feedback'}
        component={FeedbackScreen}
        options={{ header: ScreenHeader }}
      />
    </Stack.Navigator>
  );
};

export { MyInfoRoute, type MyInfoParamList };
