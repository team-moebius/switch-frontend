import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';
import { wrapLogging } from 'src/utils/wrapLogging';

const setToken = async (phone: string, jwtToken: string) =>
  await setItemAsync(phone, jwtToken);

const getToken = async (phone: string) => await getItemAsync(phone);

const deleteToken = async (phone: string) => await deleteItemAsync(phone);

const expoSecureStore = {
  setToken: wrapLogging(setToken, {
    title: 'Error',
    message: 'Failed to save token',
  }),
  getToken: wrapLogging(getToken, {
    title: 'Error',
    message: 'Login failed',
  }),
  deleteToken: wrapLogging(deleteToken, {
    title: 'Error',
    message: 'Logout failed',
  }),
};

export { expoSecureStore };
