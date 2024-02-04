import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReportsScreen } from 'src/routes/root/home/ReportsScreen';

export default {
  title: 'Report',
  component: ReportsScreen,
  parameter: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof ReportsScreen>;

const Template: ComponentStory<typeof ReportsScreen> = () => <ReportsScreen />;

export const story = Template.bind({});

story.storyName = ' default';
story.args = {};
