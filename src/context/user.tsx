import { createContext, ReactNode, useState } from 'react';
import React from 'react';
import { wait } from 'src/utils/wait';

// TODO: DTO 설계 참고하여 추후 설계 필요
interface User {
  name: string;
}

interface UserContextProps {
  user: User | null;
  loading: boolean;
  login: () => void;
}
const USER_CONTEXT_DEFAULT: UserContextProps = {
  user: null,
  loading: false,
  login: () => undefined,
  //logout: ()=>void;
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
    await wait(2000);
    setLoading(false);
    setUser({ name: 'Test' });
  };

  return (
    <UserContext.Provider value={{ user, loading, login }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
