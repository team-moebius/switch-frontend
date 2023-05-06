import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle from 'src/components/atom/Toggle';

export default {
  title: 'Toggle/basic',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle />;

export const BasicToggle = Template.bind({});

BasicToggle.storyName = 'Basic Toggle';
BasicToggle.args = {};
