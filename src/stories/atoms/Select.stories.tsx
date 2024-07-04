import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Select } from 'src/components/atom';

export default {
  title: 'Select',
  component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => {
  const [value, setValue] = useState(args.value);
  return <Select {...args} value={value} onPressItem={setValue} />;
};

export const BasicSelect = Template.bind({});

BasicSelect.storyName = 'default';
BasicSelect.args = {
  options: ['무작위', '최신순', '내 위치와 가까운 순'],
  value: '무작위',
  disabled: false,
};
