import { createContext, ReactNode, useMemo, useState } from 'react';
import { COLORS } from 'src/assets/theme/base';

type Theme = { color: typeof COLORS };

type ThemeKey = 'white';

interface ThemeContextProps extends Theme {
  changeTheme: (key: ThemeKey) => void;
}

const THEME_CONTEXT_DEFAULT: ThemeContextProps = {
  color: { ...COLORS },
  changeTheme: () => undefined,
};

const ThemeContext = createContext<ThemeContextProps>(THEME_CONTEXT_DEFAULT);

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [themeKey, setThemeKey] = useState<ThemeKey>('white');
  const theme = useMemo(() => {
    switch (themeKey) {
      case 'white':
      default:
        return COLORS;
    }
  }, [themeKey]);

  return (
    <ThemeContext.Provider
      value={{ color: { ...theme }, changeTheme: setThemeKey }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
