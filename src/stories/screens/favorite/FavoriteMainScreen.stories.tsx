import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FavoriteMainScreen } from 'src/routes/root/favorite/FavoriteMainScreen';

export default {
  title: 'FavoriteMainScreen',
  component: FavoriteMainScreen,
} as ComponentMeta<typeof FavoriteMainScreen>;

const Template: ComponentStory<typeof FavoriteMainScreen> = () => (
  <FavoriteMainScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
