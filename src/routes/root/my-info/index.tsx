import { createStackNavigator } from '@react-navigation/stack';

import { MyInfoMainScreen } from './MyInfoMainScreen';
import { FeedbackScreen } from './FeedbackScreen';
import { VersionScreen } from './VersionScreen';
import { SettingScreen } from './SettingScreen';
import { SwitchRecordsScreen } from './SwitchRecordsScreen';
import { SettingMainScreen } from './SettingMainScreen';
import { WithdrawRoute } from './WithdrawScreen';
import { SecuritySettingRoute } from './Security';
import { ScreenHeader, PressableIcon } from 'src/components/molecule';
import { Button, Flexbox } from 'src/components/atom';
import { MyInfoEditScreen } from './MyInfoEditScreen';
import { UserInfoResponse } from '@team-moebius/api-typescript';

type MyInfoParamList = {
  MyInfoMain: undefined;
  MyInfoEdit: { userInfo: UserInfoResponse | undefined };
  Withdraw: undefined;
  SettingMain: undefined;
  Record: undefined;
  Setting: undefined;
  Security: undefined;
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
        <Stack.Screen
          name={'MyInfoEdit'}
          component={MyInfoEditScreen}
          options={{
            header: (props) => {
              return (
                <ScreenHeader
                  {...props}
                  center={'내 정보 편집하기'}
                  right={
                    <Flexbox width={'100%'} justifyContent={'flex-end'}>
                      <Button
                        size={'medium'}
                        type={'transparent'}
                        onPress={() => {
                          props.navigation.setParams({ isEditMode: true });
                        }}
                      >
                        편집
                      </Button>
                    </Flexbox>
                  }
                />
              );
            },
          }}
        />
        <Stack.Screen
          name={'Withdraw'}
          component={WithdrawRoute}
          options={{ header: ScreenHeader }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name={'SettingMain'}
          component={SettingMainScreen}
          options={{ header: ScreenHeader }}
        />
        <Stack.Screen
          name={'Record'}
          component={SwitchRecordsScreen}
          options={{ header: ScreenHeader }}
        />
        <Stack.Screen
          name={'Setting'}
          component={SettingScreen}
          options={{
            header: (props) => (
              <ScreenHeader {...props} center={'스위치 설정'} />
            ),
          }}
        />
      </Stack.Group>
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
