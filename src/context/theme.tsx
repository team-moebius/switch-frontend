import { createContext, ReactNode, useMemo, useState } from 'react';
import React from 'react';
import PALETTE from 'src/assets/theme/palettes';

type Theme = typeof PALETTE;

type ThemeKey = 'white';

interface ThemeContextProps extends Theme {
  changeTheme: (key: ThemeKey) => void;
}

const THEME_CONTEXT_DEFAULT: ThemeContextProps = {
  ...PALETTE,
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
        return PALETTE;
    }
  }, [themeKey]);

  return (
    <ThemeContext.Provider value={{ ...theme, changeTheme: setThemeKey }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
