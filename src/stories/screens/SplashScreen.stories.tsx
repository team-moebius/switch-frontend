import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SplashScreen } from 'src/routes/sign/SplashScreen';

export default {
  title: 'SplashScreen',
  component: SplashScreen,
} as ComponentMeta<typeof SplashScreen>;

const Template: ComponentStory<typeof SplashScreen> = () => <SplashScreen />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
