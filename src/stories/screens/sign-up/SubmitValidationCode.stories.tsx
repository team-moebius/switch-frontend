import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubmitValidationCode } from 'src/routes/sign/sign-up/SubmitValidationCode';

export default {
  title: 'SubmitValidationCode',
  component: SubmitValidationCode,
} as ComponentMeta<typeof SubmitValidationCode>;

const Template: ComponentStory<typeof SubmitValidationCode> = () => (
  <SubmitValidationCode />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
