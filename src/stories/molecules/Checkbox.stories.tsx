import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Checkbox } from 'src/components/molecule';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  label: '체크박스',
  labelPosition: 'right',
  labelAlign: 'left',
  width: 100,
  height: 30,
  checked: true,
  onPress: () => {
    alert('radio click');
  },
};
