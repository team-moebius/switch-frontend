import { COLORS, FONT_SIZE, PADDING } from 'src/assets/theme/base';
import { Box, Flexbox, Typography } from 'src/components/atom';

//TODO: 추후 if 조건문 수정 필요

export interface ChatBubbleProps {
  isMine: boolean;
  content: string;
}

const ChatBubble = ({ content, isMine }: ChatBubbleProps) => {
  if (isMine) {
    return (
      <Box>
        <Flexbox.Item
          backgroundColor={COLORS.primary[100]}
          padding={10}
          ml={'45%'}
          borderRadius={10}
          mb={10}
          mr={PADDING.wrapper.horizontal}
          maxWidth={'50%'}
          alignSelf='flex-end'
        >
          <Typography fontSize={FONT_SIZE.bigger} color={COLORS.text}>
            {content}
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
          mb={10}
          ml={PADDING.wrapper.horizontal}
          maxWidth={'50%'}
          alignSelf={'flex-start'}
        >
          <Flexbox justifyContent='center'>
            <Typography fontSize={FONT_SIZE.bigger} color={COLORS.text}>
              {content}
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
