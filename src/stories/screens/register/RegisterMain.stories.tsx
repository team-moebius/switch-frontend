import { StoryFn, Meta } from '@storybook/react';
import { RegisterFormScreen } from 'src/routes/root/register/RegisterFormScreen';

export default {
  title: 'RegisterForm',
  component: RegisterFormScreen,
} as Meta<typeof RegisterFormScreen>;

const Template: StoryFn<typeof RegisterFormScreen> = () => (
  <RegisterFormScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
