import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen, SampleScreen, SplashScreen } from './screens';
import useAssets from './hooks/useAssets';
import FONT_MAP from './assets/fonts';
import { ThemeContextProvider } from './context/theme';

const Stack = createNativeStackNavigator();

type StackParams = {
  Main: undefined;
  Sample: undefined;
};

export { StackParams };

export default function App() {
  const [assetLoaded] = useAssets({ fonts: FONT_MAP });
  return (
    <ThemeContextProvider>
      {assetLoaded ? (
        <SplashScreen />
      ) : (
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
      )}
    </ThemeContextProvider>
  );
}
