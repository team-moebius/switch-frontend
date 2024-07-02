import { StoryFn, Meta } from '@storybook/react';
import { VersionScreen } from 'src/routes/root/my-info/VersionScreen';

export default {
  title: 'VersionScreen',
  component: VersionScreen,
} as Meta<typeof VersionScreen>;

const Template: StoryFn<typeof VersionScreen> = () => <VersionScreen />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
