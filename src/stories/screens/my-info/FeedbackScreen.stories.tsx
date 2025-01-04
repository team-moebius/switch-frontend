import { StoryFn, Meta } from '@storybook/react';
import { FeedbackScreen } from 'src/routes/root/my-info/FeedbackScreen';

export default {
  title: 'FeedbackScreen',
  component: FeedbackScreen,
} as Meta<typeof FeedbackScreen>;

const Template: StoryFn<typeof FeedbackScreen> = () => <FeedbackScreen />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
