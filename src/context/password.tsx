import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Alert } from 'react-native';

import {
  APP_BIO_PASSWORD,
  APP_PASSWORD,
  expoSecureStore,
} from 'src/common/secureStore';

import {
  authenticateAsync,
  hasHardwareAsync,
  isEnrolledAsync,
} from 'expo-local-authentication';

interface AppPasswordList {
  isSetPassword: boolean;
  isSetBioPassword: boolean;
}

interface AppPasswordProps {
  appPasswordList: AppPasswordList;
  setPassword: (password: string) => void;
  setBioPassword: () => void;
  deletePassword: () => void;
  deleteBioPassword: () => void;
  unlockPassword: (password: string) => Promise<boolean>;
  unlockBioPassword: () => Promise<boolean>;
  isBiometricAuth: boolean;
}

interface AppPasswordProviderProps {
  children: ReactNode;
}

const PASSWORD_CONTEXT_DEFAULT: AppPasswordProps = {
  appPasswordList: { isSetPassword: false, isSetBioPassword: false },
  setPassword: () => {},
  setBioPassword: () => {},
  deletePassword: () => {},
  deleteBioPassword: () => {},
  unlockPassword: () => new Promise((res) => res(false)),
  unlockBioPassword: () => new Promise((res) => res(false)),
  isBiometricAuth: false,
};

const AppPasswordContext = createContext<AppPasswordProps>(
  PASSWORD_CONTEXT_DEFAULT
);

const AppPasswordProvider = ({ children }: AppPasswordProviderProps) => {
  const [value, setValue] = useState<AppPasswordList>({
    isSetPassword: false,
    isSetBioPassword: false,
  });
  const [isBiometricAuth, setIsBiometricAuth] = useState(false);

  const checkoutPasswordList = async () => {
    const passwordResult = await expoSecureStore.getToken(APP_PASSWORD);
    const bioPasswordResult = await expoSecureStore.getToken(APP_BIO_PASSWORD);
    setValue({
      isSetPassword: !!passwordResult,
      isSetBioPassword: !!bioPasswordResult,
    });
  };

  const hasBiometricAuth = async () => {
    const result = await hasHardwareAsync();
    setIsBiometricAuth(result);
  };

  const setPassword = useCallback(async (password: string) => {
    await expoSecureStore.setToken(APP_PASSWORD, password);
    await checkoutPasswordList();
  }, []);

  const setBioPassword = async () => {
    const isEnrolledResult = await isEnrolledAsync();
    if (!isEnrolledResult && isBiometricAuth)
      return Alert.alert(
        '기기에 등록된 생체인식이 없습니다!\n 먼저 기기에 생체인식을 등록해주세요.'
      );

    const authResult = await authenticateAsync();

    if (authResult.success) {
      await expoSecureStore.setToken(APP_BIO_PASSWORD, 'true');
      await checkoutPasswordList();
    }
  };

  const deletePassword = useCallback(async () => {
    await expoSecureStore.deleteToken(APP_PASSWORD);
    await expoSecureStore.deleteToken(APP_BIO_PASSWORD);
    await checkoutPasswordList();
  }, []);

  const deleteBioPassword = useCallback(async () => {
    await expoSecureStore.deleteToken(APP_BIO_PASSWORD);
    await checkoutPasswordList();
  }, []);

  const unlockPassword = useCallback(async (password: string) => {
    const getPassword = await expoSecureStore.getToken(APP_PASSWORD);
    return getPassword === password;
  }, []);

  const unlockBioPassword = useCallback(async () => {
    const authResult = await authenticateAsync();
    return authResult.success;
  }, []);

  // 초기화
  useEffect(() => {
    checkoutPasswordList();
    hasBiometricAuth();
  }, []);

  return (
    <AppPasswordContext.Provider
      value={{
        appPasswordList: value,
        setPassword,
        setBioPassword,
        deletePassword,
        deleteBioPassword,
        unlockPassword,
        unlockBioPassword,
        isBiometricAuth,
      }}
    >
      {children}
    </AppPasswordContext.Provider>
  );
};

export { AppPasswordContext, AppPasswordProvider, AppPasswordList };
