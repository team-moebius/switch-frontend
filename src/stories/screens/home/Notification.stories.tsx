import { Meta, StoryFn } from '@storybook/react';
import { NotificationsScreen } from 'src/routes/root/home/NotificationsScreen';

export default {
  title: 'Notification',
  component: NotificationsScreen,
} as Meta<typeof NotificationsScreen>;

const Template: StoryFn<typeof NotificationsScreen> = () => (
  <NotificationsScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
