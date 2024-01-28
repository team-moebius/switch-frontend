import { createStackNavigator } from '@react-navigation/stack';
import { ChatMainScreen } from './ChatMainScreen';
import { SwitchResultScreen } from './SwitchResultScreen';
import { ChatDetailScreen } from './ChatDetailScreen';
import { PressableIcon, ScreenHeader } from 'src/components/molecule';
import {
  Flexbox,
  Modal as UserControlModal,
  Modal as DeclineSwitchModal,
  Button,
  Typography,
} from 'src/components/atom';
import { useState } from 'react';

const Stack = createStackNavigator();

const ChatRoute = ({ navigation }) => {
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [declineModalVisible, setDeclineModalVisible] = useState(false);

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
        visible={userModalVisible}
        width={'50%'}
        height={'15%'}
        backgroundColor={'#fefefe'}
        onPressBack={() => setUserModalVisible(false)}
        position={'center'}
      >
        <Flexbox
          width={'100%'}
          height={'100%'}
          margin={'auto'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={10}
        >
          <Flexbox.Item margin={'auto'}>
            <Button
              type='normal'
              size='medium'
              onPress={() => setDeclineModalVisible(true)}
            >
              스위치 거절
            </Button>
          </Flexbox.Item>
          <Flexbox.Item margin={'auto'}>
            <Button
              type='cancel'
              size='medium'
              onPress={() => {
                setUserModalVisible(false);
                navigation.navigate('Report');
              }}
            >
              신고 및 차단
            </Button>
          </Flexbox.Item>
        </Flexbox>
        <DeclineSwitchModal
          visible={declineModalVisible}
          width={'70%'}
          height={'18%'}
          position={'center'}
          backgroundColor={'#fefefe'}
          onPressBack={() => setDeclineModalVisible(false)}
        >
          <Flexbox
            width={'100%'}
            height={'100%'}
            margin={'auto'}
            padding={10}
            gap={50}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Flexbox.Item>
              <Typography
                fontSize={14}
              >{`${'청둥오리'}님의 스위치 제안을 거절 하시겠어요?`}</Typography>
            </Flexbox.Item>
            <Flexbox
              alignItems={'center'}
              justifyContent={'center'}
              width={'100%'}
              gap={10}
            >
              <Flexbox.Item flex={1}>
                <Button
                  size='medium'
                  type='cancel'
                  onPress={() => setDeclineModalVisible(false)}
                >
                  취소
                </Button>
              </Flexbox.Item>
              <Flexbox.Item flex={1}>
                <Button
                  size='medium'
                  type='normal'
                  onPress={() => {
                    setDeclineModalVisible(false);
                    setUserModalVisible(false);
                    navigation.navigate('HomeMain');
                  }}
                >
                  확인
                </Button>
              </Flexbox.Item>
            </Flexbox>
          </Flexbox>
        </DeclineSwitchModal>
      </UserControlModal>
    </>
  );
};

export { ChatRoute };
