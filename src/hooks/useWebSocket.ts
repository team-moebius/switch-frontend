import { useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client, Message } from '@stomp/stompjs';

const useWebSocket = (url: string) => {
  const sockJS = useRef<WebSocket | null>(null);
  const stompClient = useRef<Client | null>(null);
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    // Connect to SockJS server
    sockJS.current = new SockJS(url);

    // Create STOMP client
    stompClient.current = new Client({
      webSocketFactory: () => new WebSocket(url.replace(/^http/, 'ws')),
      debug: (msg) => console.log(msg),
    });

    // Activate STOMP client
    stompClient.current.activate();

    // Handle connection status
    stompClient.current.onConnect = () => {
      console.log('STOMP connected');
      setConnected(true);
    };

    return () => {
      // Deactivate STOMP client on cleanup
      stompClient.current?.deactivate();
    };
  }, [url]);

  const sendMessage = (destination: string, body: object) => {
    if (connected) {
      stompClient.current?.publish({ destination, body: JSON.stringify(body) });
    }
  };

  const subscribe = (
    destination: string,
    callback: (message: Message) => any
  ) => {
    if (connected) {
      stompClient.current?.subscribe(destination, callback);
    }
  };

  return {
    connected,
    sendMessage,
    subscribe,
  };
};

export default useWebSocket;
