import {
  StackNavigationProp,
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';
import { useCallback, useContext, useState } from 'react';

import { Button, Flexbox, TextInput } from 'src/components/atom';
import { PressableIcon } from 'src/components/molecule';

import { HomeMainScreen } from './HomeMainScreen';
import { SwitchDetailScreen } from './SwitchDetailScreen';
import { NotificationsScreen } from './NotificationsScreen';
import { RegisteredListScreen } from './RegisteredListScreen';
import { ReportScreenProps, ReportsScreen } from './ReportsScreen';
import { ChatDetailScreen } from '../chat/ChatDetailScreen';

import { UserControlModal } from '../chat/content/modals';
import { CancelEditModal, MyItemOptionModal } from './modals';

import {
  ScreenHeader,
  ScreenHeaderProps,
} from 'src/components/molecule/ScreenHeader';

import { ItemResponse } from '@team-moebius/api-typescript';

import { ThemeContext } from 'src/context/theme';
import { PADDING } from 'src/assets/theme/base';

import { RootTabsParamList } from '..';
import { RegisterRoute, RegisterRouteParamList } from '../register';
import { NavigatorScreenParams, useNavigation } from '@react-navigation/native';

type HomeRouteParamList = {
  HomeMain: undefined;
  SwitchDetail: ItemResponse;
  RegisteredList: undefined;
  Notifications: undefined;
  Report: ReportScreenProps;
  ChatDetail: undefined;
  EditItem: NavigatorScreenParams<RegisterRouteParamList>;
};

const Stack = createStackNavigator<HomeRouteParamList>();

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
      padding={PADDING.wrapper.horizontal}
      backgroundColor={color.container_background}
      justifyContent={'space-around'}
      alignItems={'center'}
      height={60}
      flexDirection={'row'}
    >
      <Flexbox.Item flex={4}>
        <TextInput name={'search'} value={value} onChangeText={changeHandler} />
      </Flexbox.Item>
      <Flexbox.Item flex={1}>{right}</Flexbox.Item>
    </Flexbox>
  );
};

const HomeRoute = ({
  navigation,
}: StackScreenProps<RootTabsParamList, 'Home'>) => {
  const [cancelModalVisible, setCancelModalVisible] = useState(false);

  const modalNavigation =
    useNavigation<StackNavigationProp<HomeRouteParamList>>();

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
            options={{
              header: (props) => <ScreenHeader {...props} />,
            }}
          />
          <Stack.Screen
            name={'Report'}
            component={ReportsScreen}
            options={{
              header: (props) => {
                return <ScreenHeader {...props} center={'신고하기'} />;
              },
              // presentation:'modal'
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
                          name={'add-outline'}
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
        <Stack.Screen
          name='EditItem'
          component={RegisterRoute}
          options={{
            header: (props) => {
              return (
                <ScreenHeader
                  {...props}
                  center={'물품 수정하기'}
                  setModalVisible={setCancelModalVisible}
                  isConfirmGoBack
                />
              );
            },
          }}
        />
        <Stack.Screen name={'ChatDetail'} component={ChatDetailScreen} />
      </Stack.Navigator>
      <CancelEditModal
        visible={cancelModalVisible}
        onPressBack={() => setCancelModalVisible(false)}
        onConfirm={() => {
          setCancelModalVisible(false);
          navigation.goBack();
        }}
        onCancel={() => setCancelModalVisible(false)}
      />
    </>
  );
};

export { HomeRoute, HomeRouteParamList };
