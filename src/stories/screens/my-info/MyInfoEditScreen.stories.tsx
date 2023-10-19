import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MyInfoEditScreen } from 'src/routes/root/my-info/MyInfoEditScreen';

export default {
  title: 'MyInfoEditScreen',
  component: MyInfoEditScreen,
} as ComponentMeta<typeof MyInfoEditScreen>;

const Template: ComponentStory<typeof MyInfoEditScreen> = () => (
  <MyInfoEditScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
