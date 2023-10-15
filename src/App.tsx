import { useEffect, useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import useAssets from './hooks/useAssets';
import FONT_MAP from './assets/fonts';
import { ThemeContextProvider } from './context/theme';
import { UserContextProvider } from './context/user';
import { wait } from './utils/wait';

import NavigationRouter from './routes';
import { SplashScreen } from './routes/sign/SplashScreen';
import { SafeAreaView } from 'react-native';

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <ThemeContextProvider>
          <SafeAreaView style={{ width: '100%', height: '100%' }}>
            {!initialized ? <SplashScreen /> : <NavigationRouter />}
          </SafeAreaView>
        </ThemeContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
}
