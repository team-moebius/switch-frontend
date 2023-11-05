import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ChatAlbumScreen from 'src/routes/root/chat/ChatAlbumScreen';

export default {
  title: 'ChatAlbum',
  component: ChatAlbumScreen,
} as ComponentMeta<typeof ChatAlbumScreen>;

const Template: ComponentStory<typeof ChatAlbumScreen> = () => (
  <ChatAlbumScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
