import { useEffect, useMemo, useState } from 'react';

import { SplashScreen } from './screens';
import useAssets from './hooks/useAssets';
import FONT_MAP from './assets/fonts';
import { ThemeContextProvider } from './context/theme';
import { UserContextProvider } from './context/user';
import { wait } from './utils/wait';

import NavigationRouter from './routes';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [assetLoaded] = useAssets({ fonts: FONT_MAP });

  useEffect(() => {
    const init = async () => {
      await wait(2000);
      setLoading(false);
    };
    init();
  }, []);
  const initialized = useMemo(() => {
    return !loading && assetLoaded;
  }, [loading, assetLoaded]);

  return (
    <UserContextProvider>
      <ThemeContextProvider>
        {!initialized ? <SplashScreen /> : <NavigationRouter />}
      </ThemeContextProvider>
    </UserContextProvider>
  );
}
