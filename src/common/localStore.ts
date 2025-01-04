import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DARK_MODE = 'darkMode';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

const setStorage = <T>(key: string, data: T) => storage.save({ key, data });
const getStorage = <T>(key: string) => storage.load<T>({ key });
const removeStorage = (key: string) => storage.remove({ key });

const localStore = {
  setData: setStorage,
  getData: getStorage,
  removeData: removeStorage,
};

export { localStore, DARK_MODE };
