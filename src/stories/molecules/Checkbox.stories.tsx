import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from 'src/components/molecule';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

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
