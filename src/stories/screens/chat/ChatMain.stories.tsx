import { Meta, StoryFn } from '@storybook/react';
import { ChatMainScreen } from 'src/routes/root/chat/ChatMainScreen';

export default {
  title: 'ChatMain',
  component: ChatMainScreen,
} as Meta<typeof ChatMainScreen>;

  <ChatMainScreen />
const Template: StoryFn<typeof ChatMainScreen> = () => (
);

export const story = Template.bind({});

story.storyName = ' default';
story.args = {};
