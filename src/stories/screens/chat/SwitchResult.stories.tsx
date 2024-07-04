import { Meta, StoryFn } from '@storybook/react';
import { SwitchResultScreen } from 'src/routes/root/chat/SwitchResultScreen';

export default {
  title: 'SwitchResult',
  component: SwitchResultScreen,
} as Meta<typeof SwitchResultScreen>;

const Template: StoryFn<typeof SwitchResultScreen> = () => (
  <SwitchResultScreen />
);

export const story = Template.bind({});

story.storyName = ' default';
story.args = {};
