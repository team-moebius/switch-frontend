import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChatDetailScreen } from 'src/routes/root/chat/ChatDetailScreen';

export default {
  title: 'ChatDetail',
  component: ChatDetailScreen,
  parameter: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof ChatDetailScreen>;

const Template: ComponentStory<typeof ChatDetailScreen> = () => (
  <ChatDetailScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
