import { View, Text } from 'react-native';
import React from 'react';
import { ScreenWrapper } from 'src/components/template';
import { ListView } from 'src/components/template/ListView';
import { UserInfoResponse } from '@team-moebius/api-typescript';
import { Box, Button, Flexbox, Typography } from 'src/components/atom';
import { useFlatList } from 'src/hooks/useFlatList';

type BlockUserProp = UserInfoResponse & { block: boolean };
export const mockBlockUserList: Array<BlockUserProp> = [
  {
    nickname: '첫 번째',
    block: true,
    id: 1,
    phone: '01012341234',
    email: 'example1@gmail.com',
    introduction: 'hkhkhkhkhkhk',
    switchCount: 4,
    switchAbortCount: 0,
    score: 3,
  },
  {
    nickname: '두 번째',
    block: false,
    id: 2,
    phone: '01012343311',
    email: 'example2@gmail.com',
    introduction: 'hkhkuuuuhkhkhkhk',
    switchCount: 1,
    switchAbortCount: 3,
    score: 2.5,
  },
  {
    nickname: '세 번째',
    block: true,
    id: 3,
    phone: '01033331234',
    email: 'example3@gmail.com',
    introduction: 'hkhkhkhoijojkhkhk',
    switchCount: 8,
    switchAbortCount: 1,
    score: 1.5,
  },
  {
    nickname: '네 번째',
    block: true,
    id: 4,
    phone: '01000000000',
    email: 'example4@gmail.com',
    introduction: 'hkhkkhkhk',
    switchCount: 5,
    switchAbortCount: 3,
    score: 4,
  },
];

const BlockUsersList = () => {
  const renderBlockUser = ({ item }: { item: BlockUserProp }) => {
    const { nickname, block } = item;
    return (
      <Box width={'100%'}>
        <Flexbox justifyContent='space-between' alignItems='center'>
          <Typography children={nickname ? nickname : ''} fontSize={15} />
          <Flexbox.Item flex={0.3}>
            <Button
              type={block ? 'normal' : 'cancel'}
              size={'small'}
              onPress={function (): void {
                throw new Error('Function not implemented.');
              }}
              children={block ? '차단 중' : '차단하기'}
            />
          </Flexbox.Item>
        </Flexbox>
      </Box>
    );
  };
  const flatListProps = useFlatList<BlockUserProp>({
    type: 'list',
    onEndReached: () => {},
    renderItem: renderBlockUser,
  });

  return (
    <ScreenWrapper>
      <Flexbox height={'100%'}>
        <ListView<BlockUserProp> data={mockBlockUserList} {...flatListProps} />
      </Flexbox>
    </ScreenWrapper>
  );
};

export { BlockUsersList };
