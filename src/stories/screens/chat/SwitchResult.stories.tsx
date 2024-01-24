import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SwitchResultScreen } from 'src/routes/root/chat/SwitchResultScreen';

export default {
  title: 'SwitchResult',
  component: SwitchResultScreen,
  parameter: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof SwitchResultScreen>;

const Template: ComponentStory<typeof SwitchResultScreen> = () => (
  <SwitchResultScreen />
);

export const story = Template.bind({});

story.storyName = ' default';
story.args = {};
