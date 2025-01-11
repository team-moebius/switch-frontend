import {
  createContext,
  useContext,
  useCallback,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { Client, StompSubscription } from '@stomp/stompjs';

export interface SubCallbackProps {
  chatId: number;
  content: string;
  senderId: number;
  type: string;
}

interface SocketContextProps {
  connect: () => void;
  disconnect: () => void;
  send: (path: string, body: any) => void;
  subscribe: (
    path: string,
    callback: (message: SubCallbackProps) => void
  ) => void;
  unsubscribe: (path: string) => void;
  isConnected: boolean;
}

const SocketContext = createContext<SocketContextProps | null>(null);

const SOCKET_URL = process.env.EXPO_PUBLIC_SOCKET_URL;

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const stompObj = useRef<Client | null>(null);
  const subList = useRef<{ [key: string]: StompSubscription }>({});
  const [isConnected, setIsConnected] = useState(false);

  const connect = useCallback(() => {
    if (!stompObj.current) {
      stompObj.current = new Client({
        brokerURL: SOCKET_URL,
        connectHeaders: {},
        reconnectDelay: 5000,
        debug(message) {
          console.debug('WebSocket Debug:', message);
        },
        onConnect() {
          setIsConnected(true);
        },
        onDisconnect() {
          setIsConnected(false);
        },
        onStompError(error) {
          console.error('Stomp Error:', error);
        },
        forceBinaryWSFrames: true,
      });
      stompObj.current.activate();
    }
  }, []);

  const disconnect = useCallback(() => {
    Object.keys(subList.current).forEach((room) => {
      subList.current[room].unsubscribe();
    });
    subList.current = {};
    if (stompObj.current) {
      stompObj.current.deactivate();
      setIsConnected(false);
      stompObj.current = null;
    }
  }, []);

  const send = useCallback((path: string, body: any) => {
    if (stompObj.current?.connected) {
      stompObj.current.publish({
        destination: path,
        body: JSON.stringify(body),
      });
    }
  }, []);

  const subscribe = useCallback(
    (path: string, callback: (message: SubCallbackProps) => void) => {
      if (!stompObj.current?.connected || subList.current[path]) return;

      const subscription = stompObj.current.subscribe(path, (message) => {
        const body = JSON.parse(message.body);
        callback(body);
      });

      subList.current[path] = subscription;
    },
    []
  );

  const unsubscribe = useCallback((path: string) => {
    if (subList.current[path]) {
      subList.current[path].unsubscribe();
      delete subList.current[path];
    }
  }, []);

  return (
    <SocketContext.Provider
      value={{
        connect,
        disconnect,
        send,
        subscribe,
        unsubscribe,
        isConnected,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context)
    throw new Error('useSocket must be used within a SocketProvider');
  return context;
};
