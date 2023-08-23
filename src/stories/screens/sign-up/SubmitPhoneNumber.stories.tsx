import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubmitPhoneNumber } from 'src/routes/sign/sign-up/SubmitPhoneNumber';

export default {
  title: 'SubmitPhoneNumber',
  component: SubmitPhoneNumber,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof SubmitPhoneNumber>;

const Template: ComponentStory<typeof SubmitPhoneNumber> = () => (
  <SubmitPhoneNumber navigation={{}} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
