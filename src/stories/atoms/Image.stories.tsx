import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageBox from 'src/components/atom/Image';

export default {
  title: 'Image',
  component: ImageBox,
} as ComponentMeta<typeof ImageBox>;

const Template: ComponentStory<typeof ImageBox> = (args) => (
  <ImageBox {...args} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  imageUrl: 'http://www.sputnik.kr/article_img/202301/article_1672729818.jpg',
  width: 200,
  height: 200,
  resizeMode: 'contain',
};
