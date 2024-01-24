import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RegisteredListScreen } from 'src/routes/root/home/RegisteredListScreen';

export default {
  title: 'RegisteredList',
  component: RegisteredListScreen,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof RegisteredListScreen>;

const Template: ComponentStory<typeof RegisteredListScreen> = () => (
  <RegisteredListScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
