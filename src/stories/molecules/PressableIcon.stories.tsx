import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PressableIcon } from 'src/components/molecule';

export default {
  title: 'PressableIcon',
  component: PressableIcon,
} as Meta<typeof PressableIcon>;

const Template: StoryFn<typeof PressableIcon> = (args) => (
  <PressableIcon {...args} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  name: 'heart',
  size: 32,
  onPress: () => {
    alert('Icon click');
  },
};
