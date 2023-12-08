import { useState, useEffect, useCallback } from 'react';

const useWebSocket = (url: string) => {
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
    const webSocket = new WebSocket(url);

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
  }, [sendMessage, url]);

  return { sendMessage };
};

export default useWebSocket;
