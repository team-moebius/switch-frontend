import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const StoryBookStack = createStackNavigator();

export const NavigationDecorator = ({
  story,
}: {
  story: (param: any) => JSX.Element;
}) => {
  return (
    <NavigationContainer independent={true}>
      <StoryBookStack.Navigator>
        <StoryBookStack.Screen
          name='MyStorybookScreen'
          component={story}
          options={{ header: () => null }}
        />
      </StoryBookStack.Navigator>
    </NavigationContainer>
  );
};
