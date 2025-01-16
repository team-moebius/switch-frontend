import { useRef, useState } from 'react';

import { Flexbox } from 'src/components/atom';
import { PressableIcon, ScreenHeader } from 'src/components/molecule';

import { ChatMainScreen } from './ChatMainScreen';
import { SwitchResultScreen } from './SwitchResultScreen';
import { ChatDetailScreen } from './ChatDetailScreen';
import { ReportsScreen } from '../home/ReportsScreen';

import { UserControlModal } from './content/modals/UserControlModal';
import { DeclineSwitchModal } from './content/modals';

import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type ChatRouteParamList = {
  ChatMain: undefined;
  SwitchResult: undefined;
  ChatDetail: undefined;
  Report: { previousScreen?: string };
};

const Stack = createStackNavigator<ChatRouteParamList>();

const ChatRoute = () => {
  const navigation = useNavigation<StackNavigationProp<ChatRouteParamList>>();
  const [isUserModal, setIsUserModal] = useState(false);
  const [isDeclineModal, setIsDeclineModal] = useState(false);

  const conditionInModalHide = useRef({
    isOpenDeclineModal: false,
    isOpenReportScreen: false,
    isConfirmDecline: false,
  });

  const handleCloseUser = () => setIsUserModal(false);
  const handleCloseDecline = () => setIsDeclineModal(false);
  const handleOpenDecline = () => {
    handleCloseUser();
    conditionInModalHide.current.isOpenDeclineModal = true;
  };
  const handleConfirmDecline = () => {
    conditionInModalHide.current.isConfirmDecline = true;
    handleCloseDecline();
  };

  const handleUserControlHide = () => {
    if (conditionInModalHide.current.isOpenReportScreen) {
      conditionInModalHide.current.isOpenReportScreen = false;
      navigation.navigate('Report', {
        previousScreen: 'ChatDetail',
      });
    } else if (conditionInModalHide.current.isOpenDeclineModal) {
      conditionInModalHide.current.isOpenDeclineModal = false;
      setIsDeclineModal(true);
    }
  };
  const handleDeclineHide = () => {
    if (conditionInModalHide.current.isConfirmDecline) {
      conditionInModalHide.current.isConfirmDecline = false;
      navigation.getParent()?.navigate('Home');
    }
  };
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
                      <Flexbox width={'100%'} justifyContent={'flex-end'}>
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
                      <Flexbox justifyContent={'flex-end'}>
                        <PressableIcon
                          size={24}
                          name={'menu'}
                          onPress={() => setIsUserModal(true)}
                        />
                      </Flexbox>
                    }
                  />
                );
              },
            }}
          />
        </Stack.Group>
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
      </Stack.Navigator>
      <UserControlModal
        visible={isUserModal}
        onPressBack={handleCloseUser}
        handleOpenDecline={handleOpenDecline}
        onReportBlock={() => {
          handleCloseUser();
          conditionInModalHide.current.isOpenReportScreen = true;
        }}
        onModalHide={handleUserControlHide}
      />
      <DeclineSwitchModal
        visible={isDeclineModal}
        onPressBack={handleCloseDecline}
        onModalHide={handleDeclineHide}
        onConfirm={handleConfirmDecline}
      />
    </>
  );
};

export { ChatRoute, type ChatRouteParamList };
