import { useState, useEffect, useCallback } from 'react';

const useWebSocket = () => {
  const [socket, setSocket] = useState<WebSocket>();

  const sendMessage = useCallback(
    (message: string) => {
      if (socket && message.trim() !== '') {
        socket.send(message);
      }
    },
    [socket]
  );

  useEffect(() => {
    const webSocket = new WebSocket('ws://example-backend-server-address:3000');

    webSocket.onopen = () => {
      console.log('WebSocket opened');
    };

    webSocket.onmessage = (event) => {
      console.log(`Received: ${event.data}`);
      sendMessage(event.data);
    };

    webSocket.onerror = (event) => {
      // an error occurred
      const errorEvent = event as WebSocketErrorEvent;
      console.log(errorEvent.message);
    };

    webSocket.onclose = (event) => {
      console.log(event.code, event.reason, 'WebSocket closed');
    };

    setSocket(webSocket);

    return () => {
      webSocket.close();
    };
  }, [sendMessage]);

  return { sendMessage };
};

export default useWebSocket;
