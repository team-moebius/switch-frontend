import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from 'src/components/atom/Radio';

export default {
  title: 'Radio/basic',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const BasicRadio = Template.bind({});

BasicRadio.storyName = 'Basic Radio';
BasicRadio.args = {
  selected: true,
  onPress: () => {},
};
