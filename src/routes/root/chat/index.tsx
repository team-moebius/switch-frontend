import { createStackNavigator } from '@react-navigation/stack';
import { ChatMainScreen } from './ChatMainScreen';
import { SwitchResultScreen } from './SwitchResultScreen';
import { ChatDetailScreen } from './ChatDetailScreen';
import { PressableIcon, ScreenHeader } from 'src/components/molecule';
import { Flexbox } from 'src/components/atom';
import { useState } from 'react';
import { UserControlModal } from './content/\bmodals/UserControlModal';

const Stack = createStackNavigator();

const ChatRoute = ({ navigation }) => {
  const [userModalVisible, setUserModalVisible] = useState(false);

  return (
    <>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name={'ChatMain'}
            component={ChatMainScreen}
            options={{
              header: (props) => {
                return (
                  <ScreenHeader
                    {...props}
                    center={'채팅'}
                    right={
                      <Flexbox
                        width={'100%'}
                        justifyContent={'flex-end'}
                        pr={16}
                      >
                        <PressableIcon
                          size={24}
                          name={'notifications-outline'}
                          onPress={() => {
                            props.navigation.navigate('Notifications');
                          }}
                        />
                      </Flexbox>
                    }
                  />
                );
              },
            }}
          />
          <Stack.Screen
            name={'SwitchResult'}
            component={SwitchResultScreen}
            options={{
              header: (props) => {
                return <ScreenHeader {...props} />;
              },
            }}
          />
          <Stack.Screen
            name={'ChatDetail'}
            component={ChatDetailScreen}
            options={{
              header: (props) => {
                return (
                  <ScreenHeader
                    {...props}
                    center={'채팅 상대 닉네임'}
                    right={
                      <Flexbox width={'85%'} justifyContent={'flex-end'}>
                        <PressableIcon
                          size={24}
                          name={'menu'}
                          onPress={() => setUserModalVisible((prev) => !prev)}
                        />
                      </Flexbox>
                    }
                  />
                );
              },
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
      <UserControlModal
        navigation={navigation}
        visible={userModalVisible}
        onPressBack={() => setUserModalVisible(false)}
        onDeclineSwitch={() => setUserModalVisible(false)}
        onReportBlock={() => {
          setUserModalVisible(false);
          navigation.navigate('Report', { previousScreen: 'ChatDetail' });
        }}
      />
    </>
  );
};

export { ChatRoute };
