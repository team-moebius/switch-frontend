import React, { useEffect, useRef, useState } from 'react';
import { Button, Flexbox } from 'src/components/atom';
import { Separator } from 'src/components/atom/Separator';
import { HistoryListItem } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { ChatInput } from './content/ChatInput';
import ChatBubble from './content/ChatBubble';
import { FlatList } from 'react-native-gesture-handler';

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

const ChatDetailScreen = () => {
  const [chatText, setChatText] = useState('');
  const [messageData, setMessageData] = useState<typeof CHAT_MOCK_DATA>([]);
  const scrollViewRef = useRef<FlatList | null>(null);
  const [firstRendered, setFirstRendered] = useState<boolean>(false);

  const onChatTextHandler = (text: string) => {
    setChatText(text);
  };

  useEffect(() => {
    if (!firstRendered) setFirstRendered(true);
    setMessageData([...CHAT_MOCK_DATA].reverse());
  }, [firstRendered]);

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
                  onPress={() => window.alert('clicked')}
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
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => {
              console.debug('Reached the end');
              // 실험을 위해서 onEndReached 이벤트가 실행될 때 마다 CHAT_MOCK_DATA 채팅 데이터를 넣어주는 액션을 추가했습니다.
              if (!messageData) return;
              setMessageData((prev) => {
                const copy = prev.slice();
                const reversed = [...CHAT_MOCK_DATA].reverse();
                copy.push(...reversed);
                return copy;
              });
            }}
            onEndReachedThreshold={0.1}
            ref={scrollViewRef}
            onContentSizeChange={() => {
              if (!firstRendered)
                scrollViewRef.current?.scrollToOffset({ offset: 0 });
            }}
            inverted
          />
        </Flexbox.Item>
      </Flexbox>
      <Flexbox width={'100%'} height={'auto'} mt={10} backgroundColor={'#fff'}>
        <ChatInput
          value={chatText}
          onChangeText={onChatTextHandler}
          placeholder={'대화 보내기'}
          width={'85%'}
        />
      </Flexbox>
    </ScreenWrapper>
  );
};

export { ChatDetailScreen };
