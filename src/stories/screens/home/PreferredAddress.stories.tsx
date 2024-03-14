import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PreferredAddressScreen } from 'src/routes/root/register/PreferredAddressScreen';

export default {
  title: 'PreferredAddressScreen',
  component: PreferredAddressScreen,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof PreferredAddressScreen>;

const Template: ComponentStory<typeof PreferredAddressScreen> = () => (
  <PreferredAddressScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
