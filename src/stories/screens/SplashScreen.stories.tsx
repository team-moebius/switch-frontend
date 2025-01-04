import { StoryFn, Meta } from '@storybook/react';
import { SplashScreen } from 'src/routes/sign/SplashScreen';

export default {
  title: 'SplashScreen',
  component: SplashScreen,
} as Meta<typeof SplashScreen>;

const Template: StoryFn<typeof SplashScreen> = () => <SplashScreen />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
