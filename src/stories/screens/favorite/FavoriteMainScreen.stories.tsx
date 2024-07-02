import { StoryFn, Meta } from '@storybook/react';
import { FavoriteMainScreen } from 'src/routes/root/favorite/FavoriteMainScreen';

export default {
  title: 'FavoriteMainScreen',
  component: FavoriteMainScreen,
} as Meta<typeof FavoriteMainScreen>;

  <FavoriteMainScreen />
const Template: StoryFn<typeof FavoriteMainScreen> = () => (
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
