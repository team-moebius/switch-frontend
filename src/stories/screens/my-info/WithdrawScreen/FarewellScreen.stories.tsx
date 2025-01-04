import { StoryFn, Meta } from '@storybook/react';
import { FarewellScreen } from 'src/routes/root/my-info/WithdrawScreen/FarewellScreen';

export default {
  title: 'FarewellScreen',
  component: FarewellScreen,
} as Meta<typeof FarewellScreen>;

const Template: StoryFn<typeof FarewellScreen> = () => <FarewellScreen />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
