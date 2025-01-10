import { Client, StompSubscription } from '@stomp/stompjs';
import { useEffect, useCallback } from 'react';

interface ObjectType {
  [key: string]: any;
}

const SOCKET_URL = process.env.EXPO_PUBLIC_SOCKET_URL;

let stompObj: Client;
const subList: { [key: string]: StompSubscription } = {};

const useSocket = () => {
  const connect = useCallback(() => {
    if (!stompObj) {
      stompObj = new Client({
        brokerURL: SOCKET_URL,
        connectHeaders: {},
        debug(message) {
          console.debug(
            '☎️ ☎️ ☎️ useStomp의 connect의 객체 debug \n\n',
            message,
            '\n\n',
            stompObj.connected,
            '\n\n',
            subList,
            '\n\n'
          );
        },
        onChangeState(state) {
          console.debug(
            '🇺🇸 🇺🇸 🇺🇸 useStomp의 connect의 소켓 상태 변화 \n',
            state
          );
        },
        onStompError(error) {
          console.error('🚨\n stomp에서 에러 발생!\n', error);
        },
        onWebSocketError(error) {
          console.error('🚨\n webSocket에서 에러 발생!\n', error);
        },
        reconnectDelay: 5000,
        forceBinaryWSFrames: true,
      });

      stompObj.activate();
    }

    console.debug('🟢 🔗🔗🔗 usestomp의 connect가 호출됐습니다.');
  }, []);

  const send = useCallback(
    // (path: string, headers: ObjectType, body: ObjectType) => {
    (path: string, body: ObjectType) => {
      stompObj.publish({
        destination: path,
        // headers,
        body: JSON.stringify(body),
      });

      console.debug('🟢🟢🟢 usestomp의 send가 호출됐습니다.');
    },
    []
  );

  const subscribe = useCallback((path: string) => {
    console.debug('subscribe🐥🐥🐥🐥');
    if (!stompObj) return;
    if (subList[path]) return;

    const subscription = stompObj.subscribe(path, (message) => {
      const body = JSON.parse(message.body);

      console.debug(
        '📩📩📩 useStomp의 subscribe에서 메시지가 수신됐습니다. \n',
        body
      );
    });

    subList[path] = subscription;

    console.debug('🟢 🔗🔗🔗 usestomp의 subscribe가 호출됐습니다.');
  }, []);

  const unsubscribe = useCallback((path: string) => {
    subList[path].unsubscribe();
    delete subList[path];
    console.debug(
      '🚨🚨🚨 usestomp의 unsubscribe가 호출됐습니다. \n\n',
      stompObj.connected,
      '\n\n',
      subList,
      '\n\n'
    );
  }, []);

  const disconnect = useCallback(() => {
    stompObj.deactivate();
    console.debug(
      '🚨🚨🚨 usestomp의 disconnect가 호출됐습니다. \n\n',
      stompObj.connected,
      '\n\n',
      subList,
      '\n\n'
    );
  }, []);

  return {
    connect,
    stompObj,
    subList,
    send,
    subscribe,
    unsubscribe,
    disconnect,
  };
};

export default useSocket;
