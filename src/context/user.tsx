import { createContext, ReactNode, useEffect, useState } from 'react';
import { expoSecureStore } from 'src/common/secureStore';

// TODO: DTO 설계 참고하여 추후 설계 필요
interface User {
  name: string;
}

interface UserContextProps {
  user: User | null;
  loading: boolean;
  login: () => void;
  logout: () => void;
}
const USER_CONTEXT_DEFAULT: UserContextProps = {
  user: null,
  loading: false,
  login: () => undefined,
  logout: () => undefined,
};

const UserContext = createContext<UserContextProps>(USER_CONTEXT_DEFAULT);

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    const token = await expoSecureStore.getToken('token');
    const username = await expoSecureStore.getToken('username');

    if (token && username) setUser({ name: username });

    return setLoading(false);
  };

  const logout = async () => {
    setLoading(true);

    await expoSecureStore.deleteToken('token');
    await expoSecureStore.deleteToken('username');

    setUser(null);

    return setLoading(false);
  };

  // context 컴포넌트가 최초 렌더링 될 때 로그인 여부를 초기화
  useEffect(() => {
    login();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
