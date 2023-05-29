import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen, SampleScreen } from './screens';

const Stack = createNativeStackNavigator();

type StackParams = {
  Main: undefined;
  Sample: undefined;
};

export { StackParams };

export default function App() {
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
}
