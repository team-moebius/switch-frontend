import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PreferredAddress } from 'src/routes/root/register/PreferredAddress';

export default {
  title: 'PreferredAddress',
  component: PreferredAddress,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof PreferredAddress>;

const Template: ComponentStory<typeof PreferredAddress> = () => (
  <PreferredAddress />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
