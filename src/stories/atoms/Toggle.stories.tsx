import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from 'src/components/atom';

export default {
  title: 'Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  value: true,
};
