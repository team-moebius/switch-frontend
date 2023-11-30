import { Alert } from 'react-native';

interface errorMessage {
  title: string;
  message: string;
}

export const wrapLogging = <T extends (...args: any[]) => Promise<any>>(
  fn: T,
  errorMessage: errorMessage
) => {
  return async (
    ...args: Parameters<T>
  ): Promise<Awaited<ReturnType<T>> | undefined> => {
    try {
      return await fn(...args);
    } catch (error) {
      console.error(error);
      Alert.alert(errorMessage.title, errorMessage.message);
    }
  };
};
