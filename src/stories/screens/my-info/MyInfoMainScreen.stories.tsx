import { StoryFn, Meta } from '@storybook/react';
import { MyInfoMainScreen } from 'src/routes/root/my-info/MyInfoMainScreen';

export default {
  title: 'MyInfoMainScreen',
  component: MyInfoMainScreen,
} as Meta<typeof MyInfoMainScreen>;

  <MyInfoMainScreen />
);
const Template: StoryFn<typeof MyInfoMainScreen> = () => {

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
