import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Button, Flexbox, Typography } from 'src/components/atom';
import { HashtagInput } from 'src/components/molecule';
import { TagProps } from 'src/components/atom/Tag';

export default {
  title: 'HashtagInput',
  component: HashtagInput,
} as Meta<typeof HashtagInput>;

const Template: StoryFn<typeof HashtagInput> = (args) => {
  const [value, setValue] = useState<string>('');
  const [showMore, setShowMore] = useState<boolean>(false);
  const slicedHashtags = args.hashtags.slice(0, 3);

  const onChangeText = (inputValue: string) => {
    setValue(inputValue);
  };

  const showMoreHandler = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <HashtagInput
      {...args}
      value={value}
      onChangeText={onChangeText}
      hashtags={
        showMore
          ? (args.hashtags as TagProps[])
          : (slicedHashtags as TagProps[])
      }
      functionalElement={
        <Flexbox
          flexDirection='column'
          justifyContent='space-between'
          height={'100%'}
          gap={5}
        >
          <Typography color={'black'} fontSize={14}>
            {args.hashtags.length + '/30'}
          </Typography>
          <Button title='더보기' onPress={showMoreHandler} />
        </Flexbox>
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
  hashtags: [
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
