import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle, { ToggleProps } from 'src/components/atom/Toggle';

export default {
  title: 'Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args: ToggleProps) => (
  <Toggle {...args} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  value: true,
};
