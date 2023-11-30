import { createContext, ReactNode, useState } from 'react';
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

    if (!token || !username) {
      return setLoading(false);
    } else {
      setUser({ name: 'Test' });
      return setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);

    await expoSecureStore.deleteToken('token');
    await expoSecureStore.deleteToken('username');

    setUser(null);

    setLoading(false);
  };

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
