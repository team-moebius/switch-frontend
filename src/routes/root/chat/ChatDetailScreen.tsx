import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  InputAccessoryView,
  Platform,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

import { Box, Button, Flexbox, Separator } from 'src/components/atom';
import {
  HistoryListItem,
  PressableIcon,
  ScreenHeader,
} from 'src/components/molecule';

import { ChatInput } from './content/ChatInput';
import ChatBubble from './content/ChatBubble';
import { SwitchCompleteModal } from './content/modals/SwitchCompleteModal';

import { ChatRouteParamList } from '.';
import { SubCallbackProps, useSocket } from 'src/context/socket';

import { UserContext } from 'src/context/user';
import { ThemeContext } from 'src/context/theme';

import { StackScreenProps } from '@react-navigation/stack';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { PADDING } from 'src/assets/theme/base';
import { DeclineSwitchModal, UserControlModal } from './content/modals';

type SwitchChatData = {
  id: number;
  user: string;
  message: string;
  timestamp: string;
};

const CHAT_MOCK_DATA: SwitchChatData[] = [
  {
    id: 1,
    user: 'Alice',
    message: '안녕! 어떻게 지내세요?',
    timestamp: '2023-10-16T10:00:00',
  },
  {
    id: 2,
    user: 'Bob',
    message: '안녕! 나도 잘 지내고 있어. 요즘 어떻게 지내?',
    timestamp: '2023-10-16T10:05:00',
  },
  {
    id: 1,
    user: 'Alice',
    message: '그냥 이것저것 생각 중이에요.',
    timestamp: '2023-10-16T10:10:00',
  },
  {
    id: 2,
    user: 'Bob',
    message: '이해해. 생각을 정리하는 데 시간을 가져도 괜찮아.',
    timestamp: '2023-10-16T10:15:00',
  },
  {
    id: 1,
    user: 'Alice',
    message: '안녕! 어떻게 지내세요?',
    timestamp: '2023-10-16T10:00:00',
  },
  {
    id: 2,
    user: 'Bob',
    message: '안녕! 나도 잘 지내고 있어. 요즘 어떻게 지내?',
    timestamp: '2023-10-16T10:05:00',
  },
  {
    id: 1,
    user: 'Alice',
    message: '그냥 이것저것 생각 중이에요.',
    timestamp: '2023-10-16T10:10:00',
  },
  {
    id: 2,
    user: 'Bob',
    message: '이해해. 생각을 정리하는 데 시간을 가져도 괜찮아.',
    timestamp: '2023-10-16T10:15:00',
  },
  {
    id: 1,
    user: 'Alice',
    message: '안녕! 어떻게 지내세요?',
    timestamp: '2023-10-16T10:00:00',
  },
  {
    id: 2,
    user: 'Bob',
    message: '안녕! 나도 잘 지내고 있어. 요즘 어떻게 지내?',
    timestamp: '2023-10-16T10:05:00',
  },
  {
    id: 1,
    user: 'Alice',
    message: '그냥 이것저것 생각 중이에요.',
    timestamp: '2023-10-16T10:10:00',
  },
  {
    id: 2,
    user: 'Bob',
    message: '이해해. 생각을 정리하는 데 시간을 가져도 괜찮아.',
    timestamp: '2023-10-16T10:15:00',
  },
  {
    id: 1,
    user: 'Alice',
    message: '안녕! 어떻게 지내세요?',
    timestamp: '2023-10-16T10:00:00',
  },
  {
    id: 2,
    user: 'Bob',
    message: '안녕! 나도 잘 지내고 있어. 요즘 어떻게 지내?',
    timestamp: '2023-10-16T10:05:00',
  },
  {
    id: 1,
    user: 'Alice',
    message: '그냥 이것저것 생각 중이에요.',
    timestamp: '2023-10-16T10:10:00',
  },
  {
    id: 2,
    user: 'Bob',
    message: '이해해. 생각을 정리하는 데 시간을 가져도 괜찮아.',
    timestamp: '2023-10-16T10:15:00',
  },
  {
    id: 1,
    user: 'Alice',
    message: '안녕! 어떻게 지내세요?',
    timestamp: '2023-10-16T10:00:00',
  },
  {
    id: 2,
    user: 'Bob',
    message: '안녕! 나도 잘 지내고 있어. 요즘 어떻게 지내?',
    timestamp: '2023-10-16T10:05:00',
  },
  {
    id: 1,
    user: 'Alice',
    message: '그냥 이것저것 생각 중이에요.',
    timestamp: '2023-10-16T10:10:00',
  },
  {
    id: 2,
    user: 'Bob',
    message: '이해해. 생각을 정리하는 데 시간을 가져도 괜찮아.',
    timestamp: '2023-10-16T10:15:00',
  },
  {
    id: 1,
    user: 'Alice',
    message: '안녕! 어떻게 지내세요?',
    timestamp: '2023-10-16T10:00:00',
  },
  {
    id: 2,
    user: 'Bob',
    message: '안녕! 나도 잘 지내고 있어. 요즘 어떻게 지내?',
    timestamp: '2023-10-16T10:05:00',
  },
  {
    id: 1,
    user: 'Alice',
    message: '그냥 이것저것 생각 중이에요.',
    timestamp: '2023-10-16T10:10:00',
  },
  {
    id: 2,
    user: 'Bob',
    message:
      '1111이해해. 생각을 정리하는 데 시간을 가져도 괜찮아.1111이해해. 생각을 정리하는 데 시간을 가져도 괜찮아.1111이해해. 생각을 정리하는 데 시간을 가져도 괜찮아.1111이해해. 생각을 정리하는 데 시간을 가져도 괜찮아.',
    timestamp: '2023-10-16T10:15:00',
  },
];

const ChatDetailScreen = ({
  navigation,
}: StackScreenProps<ChatRouteParamList, 'ChatDetail'>) => {
  const { color } = useContext(ThemeContext);
  const { userId } = useContext(UserContext);
  const { send, subscribe, unsubscribe, isConnected } = useSocket();
  const bottomHeight = useBottomTabBarHeight();

  const [chatText, setChatText] = useState('');
  const [completeModalVisible, setCompleteModalVisible] = useState(false);
  const [messageData, setMessageData] = useState<SubCallbackProps[]>([]);
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [isDeclineModal, setIsDeclineModal] = useState(false);

  const conditionInModalHide = useRef({
    isOpenDeclineModal: false,
    isOpenReportScreen: false,
    isConfirmDecline: false,
  });

  const onChatTextHandler = (text: string) => {
    setChatText(text);
  };

  const handleUserControlHide = () => {
    if (conditionInModalHide.current.isOpenReportScreen) {
      conditionInModalHide.current.isOpenReportScreen = false;
      // TODO : 상대편 이름 추가해야 한다.
      navigation.navigate('Report', {
        previousScreen: 'ChatMain',
        opponentName: '상대편 name',
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

  const onSendChatMessage = () => {
    if (chatText.length == 0) return;
    send('/topics/chats/1', {
      type: 'CHAT',
      chatId: 1,
      senderId: userId,
      content: chatText.trim(),
    });
    setChatText('');
  };

  const onSubMessage = (message: SubCallbackProps) => {
    console.log(message);
    setMessageData((prev) => [message, ...prev]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
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
    });
  }, []);

  useEffect(() => {
    if (isConnected) subscribe('/topics/chats/1', onSubMessage);

    return () => unsubscribe('/topics/chats/1');
  }, [isConnected]);

  return (
    <Flexbox.Item flex={1} backgroundColor={color.container_background}>
      <Separator />
      <Flexbox
        width={'100%'}
        alignItems='center'
        justifyContent='space-between'
        backgroundColor={color.container_background}
        pl={PADDING.wrapper.horizontal}
        pr={PADDING.wrapper.horizontal}
      >
        <Flexbox.Item flex={1}>
          <HistoryListItem
            data={{
              myItem: '디올 원피스',
              selectedItem: '커스텀 키보드',
            }}
            disabled
          />
        </Flexbox.Item>
        <Flexbox.Item width={50}>
          <Button
            size='small'
            type='normal'
            onPress={() => setCompleteModalVisible(true)}
          >
            스위치
          </Button>
        </Flexbox.Item>
      </Flexbox>
      <Separator />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={95}
        style={{ flex: 1 }}
      >
        <FlatList
          data={messageData}
          renderItem={({ item }) => (
            <ChatBubble
              isMine={(userId as string) === `${item.senderId}`}
              content={item.content}
            />
          )}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            console.debug('Reached the end');
          }}
          inverted
        />
        <Box>
          <ChatInput
            value={chatText}
            backgroundColor={color.container_background}
            onChangeText={onChatTextHandler}
            placeholder={'대화 보내기'}
            right={
              <PressableIcon
                name={'paper-plane-outline'}
                size={24}
                onPress={onSendChatMessage}
              />
            }
          />
        </Box>
      </KeyboardAvoidingView>
      <SwitchCompleteModal
        visible={completeModalVisible}
        opponentUsername='청둥오리'
        onPressBack={() => setCompleteModalVisible(false)}
        onConfirm={() => {
          setCompleteModalVisible(false);
          navigation.navigate('SwitchResult');
        }}
      />
      <UserControlModal
        visible={userModalVisible}
        onPressBack={() => setUserModalVisible(false)}
        handleOpenDecline={() => {
          setUserModalVisible(false);
          conditionInModalHide.current.isOpenDeclineModal = true;
        }}
        onReportBlock={() => {
          setUserModalVisible(false);
          conditionInModalHide.current.isOpenReportScreen = true;
        }}
        onModalHide={handleUserControlHide}
      />
      <DeclineSwitchModal
        visible={isDeclineModal}
        onPressBack={() => setIsDeclineModal(false)}
        onModalHide={handleDeclineHide}
        onConfirm={() => {
          conditionInModalHide.current.isConfirmDecline = true;
          setIsDeclineModal(false);
        }}
      />
    </Flexbox.Item>
  );
};

export { ChatDetailScreen };
