import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Image } from 'src/components/atom';

export default {
  title: 'Image',
  component: Image,
} as Meta<typeof Image>;

const Template: StoryFn<typeof Image> = (args) => <Image {...args} />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  src: 'http://www.sputnik.kr/article_img/202301/article_1672729818.jpg',
  width: 200,
  height: 200,
  resizeMode: 'contain',
};
