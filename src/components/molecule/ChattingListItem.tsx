import { useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { Box, Flexbox, Icon, Typography, Image } from '../atom';
import { WithMirror, mirrorDirectionStyle } from '../template/WithMirror';
import { fontSizeStyle } from '../template/WithImage';
import { FONT_SIZE } from 'src/assets/theme/base';

interface ChattingListItemProps {
  data: {
    username: string;
    selectedItem: string;
    message: string;
    ago: string;
    isUnread: boolean;
  };
  onPressChatDetail?: () => void;
  onPressSwitchDetail?: () => void;
  fontSize?: keyof typeof fontSizeStyle;
  mirrorDirection?: keyof typeof mirrorDirectionStyle;
}

const renderChildren = (
  children: string,
  fontSize: keyof typeof fontSizeStyle
) => {
  return (
    <Typography {...fontSizeStyle[fontSize]} numberOfLines={1}>
      {children}
    </Typography>
  );
};

const ChattingListItem = ({
  data,
  onPressChatDetail,
  onPressSwitchDetail,
  fontSize = 'cardList',
  mirrorDirection,
}: ChattingListItemProps) => {
  const {
    username = '',
    selectedItem = '',
    message = '',
    ago = '',
    isUnread = false,
  } = data;

  const childrenA = useMemo(() => {
    return renderChildren(
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus blanditiis quaerat error dolore,',
      fontSize
    );
  }, [username, fontSize]);

  const childrenB = useMemo(() => {
    return renderChildren(
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus blanditiis quaerat error dolore,',
      fontSize
    );
  }, [selectedItem, fontSize]);

  return (
    <Flexbox height={70} width={'100%'}>
      <Pressable onPress={onPressSwitchDetail} style={{ marginRight: 30 }}>
        <Flexbox.Item position='relative'>
          <Box>
            <Image
              width={50}
              height={50}
              radius={50}
              src='https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg'
            />
          </Box>
          <Box position='absolute' left={30} top={20}>
            <Image
              width={50}
              height={50}
              radius={50}
              src='data:image/jpeg;base64,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'
            />
          </Box>
        </Flexbox.Item>
      </Pressable>
      <Pressable
        onPress={onPressChatDetail}
        style={{
          flexShrink: 1,
          marginLeft: 10,
        }}
      >
        <Flexbox>
          <Flexbox flexDirection='column' width={'100%'} flexShrink={1}>
            <WithMirror
              renderItem={[childrenA, childrenB]}
              mirrorDirection={mirrorDirection}
              centerAxis={<Icon name={'swap-horizontal'} size={20} />}
            />
            <Flexbox mt={10} width={'100%'}>
              <Flexbox.Item flex={1}>
                <Typography
                  fontSize={FONT_SIZE.normal}
                  numberOfLines={2}
                  ellipsizeMode={'tail'}
                >
                  {message}
                </Typography>
              </Flexbox.Item>
              {isUnread && (
                <Flexbox.Item
                  width={6}
                  height={6}
                  borderRadius={50}
                  mr={10}
                  alignSelf='center'
                  backgroundColor='red'
                />
              )}
            </Flexbox>
          </Flexbox>
          <Flexbox
            alignItems='center'
            justifyContent='center'
            width={'100%'}
            height={'100%'}
            flexShrink={4}
          >
            <Typography fontSize={13}>{ago}</Typography>
          </Flexbox>
        </Flexbox>
      </Pressable>
    </Flexbox>
  );
};

export { ChattingListItem, ChattingListItemProps };
