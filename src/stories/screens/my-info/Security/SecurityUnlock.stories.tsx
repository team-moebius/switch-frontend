import { StoryFn, Meta } from '@storybook/react';
import { SecurityUnlock } from 'src/routes/root/my-info/Security/screens/SecurityUnlock';

export default {
  title: 'SecurityUnlock',
  component: SecurityUnlock,
} as Meta<typeof SecurityUnlock>;

const Template: StoryFn<typeof SecurityUnlock> = () => <SecurityUnlock />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
