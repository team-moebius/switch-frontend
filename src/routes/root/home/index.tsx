import { createStackNavigator } from '@react-navigation/stack';
import { useCallback, useContext, useState } from 'react';

import {
  Button,
  Flexbox,
  Icon,
  Modal as MyItemOptionModal,
  Modal as UserControlModal,
  Tag,
  TextInput,
} from 'src/components/atom';

import {
  ScreenHeader,
  ScreenHeaderProps,
} from 'src/components/molecule/ScreenHeader';
import { ThemeContext } from 'src/context/theme';

import { HomeMainScreen } from './HomeMainScreen';
import { SwitchDetailScreen } from './HomeMainScreen/SwitchDetailScreen';
import { NotificationsScreen } from './NotificationsScreen';
import { RegisteredListScreen } from './RegisteredListScreen';
import { ReportsScreen } from './ReportsScreen';
import { PressableIcon } from 'src/components/molecule';
import { WithImage } from 'src/components/template';
import { ChatDetailScreen } from '../chat/ChatDetailScreen';

const Stack = createStackNavigator();

const HomeRouteHeader = ({
  onSearch,
  right,
}: Pick<ScreenHeaderProps, 'right'> & {
  onSearch?: (value: string) => void;
}) => {
  const { color } = useContext(ThemeContext);
  const [value, setValue] = useState('');
  const changeHandler = useCallback(
    (value: string) => {
      setValue(value);
      onSearch && onSearch(value);
    },
    [onSearch]
  );
  return (
    <Flexbox
      width={'100%'}
      padding={16}
      backgroundColor={color.container_background}
      justifyContent={'space-around'}
      alignItems={'center'}
      height={60}
      flexDirection={'row'}
    >
      <Flexbox.Item flex={4}>
        <TextInput
          width={'100%'}
          name={'search'}
          value={value}
          onChangeText={changeHandler}
        />
      </Flexbox.Item>
      <Flexbox.Item flex={1}>{right}</Flexbox.Item>
    </Flexbox>
  );
};

const HomeRoute = ({ navigation }) => {
  const [myItemModalVisible, setMyItemModalVisible] = useState(false);
  const [userModalVisible, setUserModalVisible] = useState(false);

  return (
    <>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name={'HomeMain'}
            component={HomeMainScreen}
            options={{
              header: ({ navigation }) => {
                return (
                  <HomeRouteHeader
                    onSearch={(value) => {
                      navigation.setParams({
                        search: value,
                      });
                    }}
                    right={
                      <Flexbox width={'100%'} justifyContent={'flex-end'}>
                        <PressableIcon
                          size={24}
                          name={'notifications-outline'}
                          onPress={() => {
                            navigation.navigate('Notifications');
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
            name={'SwitchDetail'}
            component={SwitchDetailScreen}
            // 스위치 제안이 온 경우
            // height 120, 아니면 80?
            // 스위치 제안이 안 온 경우 center, right는 비어있습니다.
            options={{
              header: (props) => (
                <ScreenHeader
                  {...props}
                  containerStyle={{
                    backgroundColor: '#fff',
                    position: 'absolute',
                    height: 120,
                  }}
                  center={
                    <Flexbox
                      width={'100%'}
                      flexDirection='column'
                      alignItems='center'
                    >
                      <Flexbox gap={10}>
                        <Flexbox.Item>
                          <WithImage
                            src='https://cdn-gq.github.io/pokemon/133.webp'
                            text='이브이 스티커'
                            imageWidth={80}
                            imageHeight={80}
                          />
                        </Flexbox.Item>
                        <Flexbox.Item alignSelf='center'>
                          <Tag
                            disabled={false}
                            color={'#FFFFFF'}
                            backgroundColor={'#21BD9E'}
                          >{`+${4}`}</Tag>
                        </Flexbox.Item>
                      </Flexbox>
                      <Flexbox.Item>
                        <Icon name='swap-horizontal' size={24} />
                      </Flexbox.Item>
                    </Flexbox>
                  }
                  right={
                    <Flexbox width={'85%'} justifyContent={'flex-end'}>
                      <PressableIcon
                        size={24}
                        name={'menu'}
                        onPress={() => setMyItemModalVisible((prev) => !prev)}
                      />
                    </Flexbox>
                  }
                />
              ),
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
          <Stack.Screen
            name={'RegisteredList'}
            component={RegisteredListScreen}
            options={{
              header: (props) => {
                return (
                  <ScreenHeader
                    {...props}
                    right={
                      <Flexbox width={'100%'} justifyContent={'flex-end'}>
                        <PressableIcon
                          size={24}
                          name={'md-add-outline'}
                          onPress={() => {
                            props.navigation?.navigate('Register');
                          }}
                        />
                      </Flexbox>
                    }
                  />
                );
              },
            }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name={'Notifications'}
            component={NotificationsScreen}
            options={{
              header: (props) => (
                <ScreenHeader
                  {...props}
                  center={'알림'}
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
              ),
            }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name={'Report'}
            component={ReportsScreen}
            options={{
              header: (props) => {
                return <ScreenHeader {...props} center={'신고하기'} />;
              },
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
      <MyItemOptionModal
        visible={myItemModalVisible}
        width={'50%'}
        height={'15%'}
        backgroundColor={'#fefefe'}
        onPressBack={() => setMyItemModalVisible(false)}
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
              onPress={() => console.debug('수정')}
            >
              수정
            </Button>
          </Flexbox.Item>
          <Flexbox.Item margin={'auto'}>
            <Button
              type='cancel'
              size='medium'
              onPress={() => {
                console.debug('삭제');
                setMyItemModalVisible(false);
              }}
            >
              삭제
            </Button>
          </Flexbox.Item>
        </Flexbox>
      </MyItemOptionModal>
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
              onPress={() => console.debug('스위치 거절')}
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
      </UserControlModal>
    </>
  );
};

export { HomeRoute };
