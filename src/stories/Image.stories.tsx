import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageBox from 'src/components/atom/Image';

export default {
  title: 'ImageBox/basic',
  component: ImageBox,
} as ComponentMeta<typeof ImageBox>;

const Template: ComponentStory<typeof ImageBox> = (args) => (
  <ImageBox {...args} />
);

export const WithImageBox = Template.bind({});

WithImageBox.storyName = 'With ImageBox';
WithImageBox.args = {
  imageUrl: 'http://www.sputnik.kr/article_img/202301/article_1672729818.jpg',
};
