import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from 'src/components/molecule/Select';
import { Box } from 'src/components/atom';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  return (
    <Box>
      <Select {...args} />
    </Box>
  );
};

export const BasicSelect = Template.bind({});

BasicSelect.storyName = 'default';
BasicSelect.args = {
  options: ['무작위', '최신순', '내 위치와 가까운 순'],
  padding: 10,
  modalPadding: 20,
  fontSize: 15,
  fontColor: '#000000',
  optionHeight: 35,
  optionWidth: 200,
  border: '1 solid #393939',
};
