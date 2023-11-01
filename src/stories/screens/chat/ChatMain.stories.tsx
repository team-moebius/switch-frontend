import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChatMainScreen } from 'src/routes/root/chat/ChatMainScreen';

export default {
  title: 'ChatMain',
  component: ChatMainScreen,
  parameter: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof ChatMainScreen>;

const Template: ComponentStory<typeof ChatMainScreen> = () => (
  <ChatMainScreen />
);

export const story = Template.bind({});

story.storyName = ' default';
story.args = {};
