import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MyInfoMainScreen } from 'src/routes/root/my-info/MyInfoMainScreen';

export default {
  title: 'MyInfoMainScreen',
  component: MyInfoMainScreen,
} as ComponentMeta<typeof MyInfoMainScreen>;

const Template: ComponentStory<typeof MyInfoMainScreen> = () => (
  <MyInfoMainScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
