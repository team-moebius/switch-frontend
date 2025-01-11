import { useContext, useEffect, useRef, useState } from 'react';
import { Box, Button, Flexbox } from 'src/components/atom';
import { Separator } from 'src/components/atom/Separator';
import { HistoryListItem, PressableIcon } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { ChatInput } from './content/ChatInput';
import ChatBubble from './content/ChatBubble';
import { FlatList } from 'react-native-gesture-handler';
import { SwitchCompleteModal } from './content/modals/SwitchCompleteModal';
import { StackScreenProps } from '@react-navigation/stack';
import { ChatRouteParamList } from '.';
import { COLORS } from 'src/assets/theme/base';
import { UserContext } from 'src/context/user';
import { SubCallbackProps, useSocket } from 'src/context/socket';

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
  const { userId } = useContext(UserContext);
  const { send, subscribe, unsubscribe, isConnected } = useSocket();

  const [chatText, setChatText] = useState('');
  const [completeModalVisible, setCompleteModalVisible] = useState(false);
  const [messageData, setMessageData] = useState<SubCallbackProps[]>([]);

  const onChatTextHandler = (text: string) => {
    setChatText(text);
  };

  const onSendChatMessage = () => {
    send('/topics/chats/1', {
      type: 'CHAT',
      chatId: 1,
      senderId: userId,
      content: chatText,
    });
    setChatText('');
  };

  const onSubMessage = (message: SubCallbackProps) => {
    setMessageData((prev) => [message, ...prev]);
  };

  useEffect(() => {
    if (isConnected) subscribe('/topics/chats/1', onSubMessage);

    return () => unsubscribe('/topics/chats/1');
  }, [isConnected]);

  return (
    <ScreenWrapper>
      <Flexbox width={'100%'} height={'94%'} flexDirection={'column'}>
        <Flexbox.Item width={'100%'} height={'auto'}>
          <Flexbox.Item width={'100%'}>
            <Separator />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Flexbox
              width={'100%'}
              alignItems='center'
              justifyContent='space-between'
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
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Separator />
          </Flexbox.Item>
        </Flexbox.Item>
        <Flexbox.Item width={'100%'} flex={1}>
          <FlatList
            data={messageData}
            renderItem={ChatBubble}
            onEndReachedThreshold={0.1}
            onEndReached={() => {
              console.debug('Reached the end');
                const copy = prev.slice();
                const reversed = [...CHAT_MOCK_DATA].reverse();
            }}
            ref={scrollViewRef}
            inverted
          />
        </Flexbox.Item>
      </Flexbox>
      <Flexbox
        width={'100%'}
        height={'auto'}
        mt={10}
        backgroundColor={COLORS.container_background}
      >
        <ChatInput
          value={chatText}
          onChangeText={onChatTextHandler}
          placeholder={'대화 보내기'}
          width={'80%'}
          right={
            <PressableIcon
              name={'paper-plane-outline'}
              size={24}
              onPress={onSendChatMessage}
            />
          }
        />
      </Flexbox>
      <SwitchCompleteModal
        visible={completeModalVisible}
        onPressBack={() => setCompleteModalVisible(false)}
        onConfirm={() => {
          setCompleteModalVisible(false);
          navigation.navigate('SwitchResult');
        }}
      />
    </ScreenWrapper>
  );
};

export { ChatDetailScreen };
