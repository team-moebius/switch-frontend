import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const StoryBookStack = createStackNavigator();

export const NavigationDecorator = ({
  Story,
  context,
}: {
  Story: (param: any) => JSX.Element;
  context: any;
}) => {
  const Renderer = () => <Story {...context} />;
  return (
    <NavigationContainer independent={true}>
      <StoryBookStack.Navigator>
        <StoryBookStack.Screen
          component={Renderer}
          name='MyStorybookScreen'
          options={{ header: () => null }}
        />
      </StoryBookStack.Navigator>
    </NavigationContainer>
  );
};
