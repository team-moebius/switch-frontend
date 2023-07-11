import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, Flexbox, Typography } from 'src/components/atom';
import { HashTagInput } from 'src/components/molecule';
import { TagProps } from 'src/components/atom/Tag';

export default {
  title: 'HashTagInput',
  component: HashTagInput,
} as ComponentMeta<typeof HashTagInput>;

const Template: ComponentStory<typeof HashTagInput> = (args) => {
  const [value, setValue] = useState<string>('');
  const [showMore, setShowMore] = useState<boolean>(false);
  const mappedTags = args.hashTags.slice(0, 3);

  const onChangeText = (inputValue: string) => {
    setValue(inputValue);
  };

  const showMoreHandler = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <HashTagInput
      {...args}
      value={value}
      onChangeText={onChangeText}
      hashTags={
        showMore ? (args.hashTags as TagProps[]) : (mappedTags as TagProps[])
      }
      children={
        <>
          <Flexbox
            flexDirection='column'
            justifyContent='space-between'
            height={'100%'}
            gap={5}
          >
            <Typography
              color={'black'}
              children={`${args.hashTags.length}/30`}
            />
            <Button title='더보기' onPress={showMoreHandler} />
          </Flexbox>
        </>
      }
    />
  );
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  placeholder: '물품에 대한 해시태그를 작성해주세요.(선택사항)',
  disabled: false,
  itemsWrap: 'wrap',
  name: 'tagInput',
  width: 350,
  hashTags: [
    {
      children: '#패션',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#잡화',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#직거래',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#여성의류',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#패션',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#잡화',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#직거래',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#내고가능',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#아이폰이면더좋음',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#여성의류',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#패션',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#잡화',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#직거래',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#여성의류',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#패션',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#잡화',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#직거래',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#내고가능',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#아이폰이면더좋음',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#여성의류',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#패션',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#잡화',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#직거래',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#여성의류',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#패션',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#잡화',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#직거래',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#내고가능',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#아이폰이면더좋음',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
  ],
};
