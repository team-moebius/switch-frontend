import React from 'react';
import { ComponentStory } from '@storybook/react';
import { RegisterMain } from 'src/routes/root/register';
import { SubmitValidationCode } from 'src/routes/sign/sign-up/SubmitValidationCode';

export default {
  title: 'RegisterMain',
  component: RegisterMain,
};

const Template: ComponentStory<typeof SubmitValidationCode> = () => (
  <RegisterMain />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
