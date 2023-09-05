import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VersionScreen } from 'src/routes/root/my-info/VersionScreen';

export default {
  title: 'VersionScreen',
  component: VersionScreen,
} as ComponentMeta<typeof VersionScreen>;

const Template: ComponentStory<typeof VersionScreen> = () => <VersionScreen />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
