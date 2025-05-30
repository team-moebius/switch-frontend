import { useEffect, useMemo, useState } from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';

import useAssets from './hooks/useAssets';
import FONT_MAP from './assets/fonts';
import { ThemeContextProvider } from './context/theme';
import { UserContextProvider } from './context/user';
import { wait } from './utils/wait';
import NavigationRouter from './routes';
import { SplashScreen } from './routes/sign/SplashScreen';
import { AppPasswordProvider } from './context/password';

import { QueryClient, QueryClientProvider } from 'react-query';

import { TextEncoder, TextDecoder } from 'text-encoding';
import { SocketProvider } from './context/socket';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30, // 30분
      cacheTime: 1000 * 60 * 5, // 5분
      retry: 5,
    },
  },
});

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
        <SocketProvider>
          <AppPasswordProvider>
            <ThemeContextProvider>
              <SafeAreaView
                style={{
                  width: '100%',
                  height: '100%',
                  paddingTop:
                    Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                }}
              >
                {!initialized ? <SplashScreen /> : <NavigationRouter />}
              </SafeAreaView>
            </ThemeContextProvider>
          </AppPasswordProvider>
        </SocketProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
}
