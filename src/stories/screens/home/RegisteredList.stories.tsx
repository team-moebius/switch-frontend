import { Meta, StoryFn } from '@storybook/react';
import { RegisteredListScreen } from 'src/routes/root/home/RegisteredListScreen';

export default {
  title: 'RegisteredList',
  component: RegisteredListScreen,
} as Meta<typeof RegisteredListScreen>;

const Template: StoryFn<typeof RegisteredListScreen> = () => (
  <RegisteredListScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
