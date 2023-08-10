import { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen, SampleScreen, SplashScreen } from './screens';
import useAssets from './hooks/useAssets';
import FONT_MAP from './assets/fonts';
import { ThemeContextProvider } from './context/theme';
import { UserContextProvider } from './context/user';
import { wait } from './utils/wait';

const Stack = createStackNavigator();

type StackParams = {
  Main: undefined;
  Sample: undefined;
};

export { StackParams };

const NavigationRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen
          name={'Main'}
          navigationKey='Main'
          component={MainScreen}
          options={{ title: '' }}
        />
        {/* add screens */}
        <Stack.Screen name={'Sample'} component={SampleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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
