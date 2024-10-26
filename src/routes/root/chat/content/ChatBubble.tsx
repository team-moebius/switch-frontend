import React from 'react';
import { COLORS, FONT_SIZE } from 'src/assets/theme/base';
import { Box, Flexbox, Typography } from 'src/components/atom';

interface ChatBubbleProps {
  index: number;
  item: {
    id: number;
    user: string;
    message: string;
    timestamp: string;
  };
}

//TODO: 추후 if 조건문 수정 필요

const ChatBubble = ({ index, item }: ChatBubbleProps) => {
  if (item.user === 'Alice') {
    return (
      <Box>
        <Flexbox.Item
          backgroundColor={COLORS.primary[100]}
          padding={10}
          ml={'45%'}
          borderRadius={10}
          mt={5}
          mr={'5%'}
          maxWidth={'50%'}
          alignSelf='flex-end'
          key={index}
        >
          <Typography
            fontSize={FONT_SIZE.bigger}
            color={COLORS.text}
            key={index}
          >
            {item.message}
          </Typography>
          <Flexbox.Item
            position={'absolute'}
            backgroundColor={COLORS.primary[100]}
            width={20}
            height={25}
            bottom={0}
            borderBottomLeftRadius={25}
            right={-10}
          />
          <Flexbox.Item
            position={'absolute'}
            backgroundColor={COLORS.neutral.white}
            width={20}
            height={35}
            bottom={-6}
            borderBottomLeftRadius={18}
            right={-20}
          />
        </Flexbox.Item>
      </Box>
    );
  } else {
    return (
      <Box>
        <Flexbox.Item
          backgroundColor={COLORS.neutral.gray}
          padding={10}
          borderRadius={10}
          mt={5}
          ml={'5%'}
          maxWidth={'50%'}
          alignSelf={'flex-start'}
          key={index}
        >
          <Flexbox justifyContent='center'>
            <Typography
              fontSize={FONT_SIZE.bigger}
              color={COLORS.text}
              key={index}
            >
              {item.message}
            </Typography>
          </Flexbox>
          <Flexbox.Item
            position='absolute'
            backgroundColor={COLORS.neutral.gray}
            width={20}
            height={25}
            bottom={0}
            borderBottomRightRadius={25}
            left={-10}
          />
          <Flexbox.Item
            position='absolute'
            backgroundColor={COLORS.container_background}
            width={20}
            height={35}
            bottom={-6}
            borderBottomRightRadius={18}
            left={-20}
          />
        </Flexbox.Item>
      </Box>
    );
  }
};

export default ChatBubble;
