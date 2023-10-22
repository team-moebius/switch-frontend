import React from 'react';
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
          backgroundColor='#0078fe'
          padding={10}
          ml={'45%'}
          borderRadius={5}
          mt={5}
          mr={'5%'}
          maxWidth={'50%'}
          alignSelf='flex-end'
          key={index}
        >
          <Typography fontSize={16} color={'#fff'} key={index}>
            {item.message}
          </Typography>
          <Flexbox.Item
            position={'absolute'}
            backgroundColor={'#0078fe'}
            width={20}
            height={25}
            bottom={0}
            borderBottomLeftRadius={25}
            right={-10}
          />
          <Flexbox.Item
            position={'absolute'}
            backgroundColor={'#ffffff'}
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
          backgroundColor='#dedede'
          padding={10}
          borderRadius={5}
          mt={5}
          ml={'5%'}
          maxWidth={'50%'}
          alignSelf={'flex-start'}
          key={index}
        >
          <Flexbox justifyContent='center'>
            <Typography fontSize={16} color={'#000'} key={index}>
              {item.message}
            </Typography>
          </Flexbox>
          <Flexbox.Item
            position='absolute'
            backgroundColor='#dedede'
            width={20}
            height={25}
            bottom={0}
            borderBottomRightRadius={25}
            left={-10}
          />
          <Flexbox.Item
            position='absolute'
            backgroundColor='#ffffff'
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
