import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';
import { wrapLogging } from 'src/utils/wrapLogging';

const USER_ID = 'userId';
const TOKEN = 'token';
const APP_PASSWORD = 'appPassword';
const APP_BIO_PASSWORD = 'appBioPassword';

const setToken = (key: string, jwtToken: string) => setItemAsync(key, jwtToken);

const getToken = (key: string) => getItemAsync(key);

const deleteToken = (key: string) => deleteItemAsync(key);

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

export { expoSecureStore, TOKEN, USER_ID, APP_PASSWORD, APP_BIO_PASSWORD };
