import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ImageCard } from 'src/components/molecule';
import { FlatList } from 'react-native';
import { Flexbox } from 'src/components/atom';

export default {
  title: 'ImageCard',
  component: ImageCard,
} as ComponentMeta<typeof ImageCard>;

const Template: ComponentStory<typeof ImageCard> = (args) => {
  const DATA = [
    {
      desc: '서울 천왕동',
      title: '커스텀 키보드',
      src: 'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    },
    {
      desc: '서울 천왕동',
      title: '커스텀 키보드',
      src: 'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    },
    {
      desc: '서울 천왕동',
      title: '커스텀 키보드',
      src: 'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    },
    {
      desc: '서울 천왕동',
      title: '커스텀 키보드',
      src: 'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    },
    {
      desc: '서울 천왕동',
      title: '커스텀 키보드',
      src: 'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    },
    {
      desc: '서울 천왕동',
      title: '커스텀 키보드',
      src: 'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    },
  ];

  return (
    <Flexbox>
      <Flexbox.Item flex={1} alignItems='center' justifyContent='center'>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <ImageCard {...item} {...args} />}
          keyExtractor={(item) => item.desc}
          numColumns={2}
        />
      </Flexbox.Item>
    </Flexbox>
  );
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  width: 250,
  height: 200,
  resizeMode: 'contain',
  margin: 10,
  onClickHandler: () => {
    window.alert('clicked');
  },
};
