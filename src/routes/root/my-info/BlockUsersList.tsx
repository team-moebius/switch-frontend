import { Alert, Pressable, ScrollView } from 'react-native';
import { ScreenWrapper } from 'src/components/template';
import { UserInfoResponse } from '@team-moebius/api-typescript';
import { Box, Button, Flexbox, Typography } from 'src/components/atom';
import { StackScreenProps } from '@react-navigation/stack';
import { MyInfoParamList } from '.';

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
  {
    nickname: '첫 번째',
    block: true,
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    phone: '01000000000',
    email: 'example4@gmail.com',
    introduction: 'hkhkkhkhk',
    switchCount: 5,
    switchAbortCount: 3,
    score: 4,
  },
  {
    nickname: '첫 번째',
    block: true,
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
    phone: '01000000000',
    email: 'example4@gmail.com',
    introduction: 'hkhkkhkhk',
    switchCount: 5,
    switchAbortCount: 3,
    score: 4,
  },
  {
    nickname: '네 번째',
    block: true,
    id: 13,
    phone: '01000000000',
    email: 'example4@gmail.com',
    introduction: 'hkhkkhkhk',
    switchCount: 5,
    switchAbortCount: 3,
    score: 4,
  },
  {
    nickname: '네 번째',
    block: true,
    id: 14,
    phone: '01000000000',
    email: 'example4@gmail.com',
    introduction: 'hkhkkhkhk',
    switchCount: 5,
    switchAbortCount: 3,
    score: 4,
  },
  {
    nickname: '네 번째',
    block: true,
    id: 15,
    phone: '01000000000',
    email: 'example4@gmail.com',
    introduction: 'hkhkkhkhk',
    switchCount: 5,
    switchAbortCount: 3,
    score: 4,
  },
];

const BlockUsersList = ({
  navigation,
}: StackScreenProps<MyInfoParamList, 'BlockUsers'>) => {
  const BlockUser = ({ item }: { item: BlockUserProp }) => {
    const { nickname, block } = item;
    return (
      <Box width={'100%'}>
        <Pressable onPress={() => navigation.navigate('MyInfoMain')}>
          <Flexbox justifyContent='space-between' alignItems='center'>
            <Typography children={nickname ? nickname : ''} fontSize={18} />
            <Flexbox.Item flex={0.3}>
              <Button
                type={block ? 'normal' : 'cancel'}
                size={'medium'}
                onPress={() => Alert.alert(`${block}`)}
                children={block ? '차단 중' : '차단하기'}
              />
            </Flexbox.Item>
          </Flexbox>
        </Pressable>
      </Box>
    );
  };

  return (
    <ScreenWrapper>
      <Flexbox height={'100%'} padding={10}>
        <ScrollView>
          <Flexbox gap={15} flexDirection='column'>
            {mockBlockUserList.map((user) => (
              <BlockUser item={user} key={user.id} />
            ))}
          </Flexbox>
        </ScrollView>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { BlockUsersList };
