import { StoryFn, Meta } from '@storybook/react';
import { BlockUsersList } from 'src/routes/root/my-info/BlockUsersList';

export default {
  title: 'BlockUserList',
  component: BlockUsersList,
} as Meta<typeof BlockUsersList>;

const Template: StoryFn<typeof BlockUsersList> = () => <BlockUsersList />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
