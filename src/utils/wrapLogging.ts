import { Alert } from 'react-native';

interface errorMessage {
  title: string;
  message: string;
}

export const wrapLogging = <T extends (...args: any[]) => any>(
  fn: T,
  errorMessage: errorMessage
) => {
  return (...args: Parameters<T>) => {
    try {
      fn(...args);
    } catch (error) {
      console.error(error);
      Alert.alert(errorMessage.title, errorMessage.message);
    }
  };
};
