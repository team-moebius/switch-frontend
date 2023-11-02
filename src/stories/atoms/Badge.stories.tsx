import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge, Flexbox, Icon, Typography } from 'src/components/atom';

export default {
  title: 'Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

//TODO: pr merge 후 Icon -> PressableIcon으로 바꿔야 함
const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>
    <Flexbox
      width={'100%'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Typography fontSize={18} fontWeight={'200'} color={'#fff'}>
        경기도 부천시 상동
      </Typography>
      <Icon name='close' size={24} color={'#fff'} />
    </Flexbox>
  </Badge>
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  backgroundColor: '#0cd092',
  height: 48,
  padding: 10,
};
