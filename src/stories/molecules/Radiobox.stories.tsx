import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radiobox } from 'src/components/molecule';

export default {
  title: 'Radiobox',
  component: Radiobox,
} as ComponentMeta<typeof Radiobox>;

const Template: ComponentStory<typeof Radiobox> = (args) => (
  <Radiobox {...args} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  label: '라디오',
  labelPosition: 'right',
  labelAlign: 'left',
  width: 100,
  height: 30,
  checked: true,
  onPress: () => {
    alert('radio click');
  },
};
