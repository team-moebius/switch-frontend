import { createContext, ReactNode, useEffect, useState } from 'react';
import { DARK_MODE, localStore } from 'src/common/localStore';
import { expoSecureStore, TOKEN, USER_ID } from 'src/common/secureStore';

// TODO: DTO 설계 참고하여 추후 설계 필요
interface UserContextProps {
  userId: string | null;
  loading: boolean;
  login: () => void;
  logout: () => void;
  darkMode: boolean;
  onChangeDarkMode: (value: boolean) => void;
}
const USER_CONTEXT_DEFAULT: UserContextProps = {
  userId: null,
  loading: false,
  login: () => undefined,
  logout: () => undefined,
  darkMode: false,
  onChangeDarkMode: (value: boolean) => undefined,
};

const UserContext = createContext<UserContextProps>(USER_CONTEXT_DEFAULT);

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const login = async () => {
    setLoading(true);

    const token = await expoSecureStore.getToken(TOKEN);
    const userId = await expoSecureStore.getToken(USER_ID);

    if (token && userId) setUserId(userId);

    return setLoading(false);
  };

  const logout = async () => {
    setLoading(true);

    await expoSecureStore.deleteToken(TOKEN);
    await expoSecureStore.deleteToken(USER_ID);

    setUserId(null);

    return setLoading(false);
  };

  const onChangeDarkMode = async (value: boolean) => {
    await localStore.setData(DARK_MODE, value);
    setDarkMode(value);
  };

  // context 컴포넌트가 최초 렌더링 될 때 로그인 여부를 초기화
  useEffect(() => {
    login();
  }, []);

  useEffect(() => {
    localStore
      .getData<boolean>(DARK_MODE)
      .then((data) => {
        setDarkMode(data);
      })
      .catch((error) => {
        onChangeDarkMode(false);
      });
  }, []);

  return (
    <UserContext.Provider
      value={{
        userId,
        loading,
        login,
        logout,
        darkMode,
        onChangeDarkMode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
