import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioGroup } from 'src/components/molecule';

export default {
  title: 'RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  options: [
    { value: 1, label: 'item1' },
    { value: 2, label: 'item2' },
    { value: 3, label: 'item3' },
  ],
  onPress: (value) => {
    alert(`clicked value: ${value}`);
  },
  labelLayout: { labelAlign: 'left', labelPosition: 'right' },
  direction: 'row',
  value: 1,
};
