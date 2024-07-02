import { Meta, StoryFn } from '@storybook/react';
import { PreferredAddressScreen } from 'src/routes/root/register/PreferredAddressScreen';

export default {
  title: 'PreferredAddressScreen',
  component: PreferredAddressScreen,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
} as Meta<typeof PreferredAddressScreen>;

const Template: StoryFn<typeof PreferredAddressScreen> = () => (
  <PreferredAddressScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
