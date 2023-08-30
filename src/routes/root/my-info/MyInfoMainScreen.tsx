import { useEffect, useMemo, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { Box, Button, Flexbox, Tag } from 'src/components/atom';
import { ImageCard, UserSummary } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';

const mockData = [
  {
    createdAt: '2023-08-26T08:42:49.821Z',
    updatedAt: '2023-08-26T08:42:49.821Z',
    id: 0,
    type: 'GOODS',
    userId: 0,
    name: '원피스 필요하신 분',
    description: '청바지랑 바꾸고 싶어요',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: ['옷', '신발', '잡화'],
    preferredCategory: '청바지',
    preferredLocation: '서울 천왕동',
    waitingCount: 0,
  },
  {
    createdAt: '2023-08-20T08:42:49.821Z',
    updatedAt: '2023-08-21T08:42:49.821Z',
    id: 1,
    type: 'GOODS',
    userId: 0,
    name: '젤다 필요하신 분',
    description: '마리오 카트랑 바꾸고 싶어요',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9G-UFAbO7tFzELzAxyOETOskVhZv88S7wg&usqp=CAU',
    ],
    hashtags: ['마리오', '게임', '닌텐도'],
    preferredCategory: '마리오',
    preferredLocation: '서울 화양동',
    waitingCount: 33,
  },
  {
    createdAt: '2023-08-22T08:42:49.821Z',
    updatedAt: '2023-08-22T08:42:49.821Z',
    id: 2,
    type: 'GOODS',
    userId: 0,
    name: '토토로 인형',
    description: '포켓몬 인형이랑 바꾸고 싶네요',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9G-UFAbO7tFzELzAxyOETOskVhZv88S7wg&usqp=CAU',
    ],
    hashtags: ['캐릭터', '인형', '잡화'],
    preferredCategory: '토토로',
    preferredLocation: '경기 수원시',
    waitingCount: 1,
  },
  {
    createdAt: '2023-08-23T08:42:49.821Z',
    updatedAt: '2023-08-23T08:42:49.821Z',
    id: 3,
    type: 'GOODS',
    userId: 0,
    name: '캠핑장 이용권',
    description: '사용하실 분은 적절한 아이템 먼저 제시해주세요',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2C26H5J5MLk5XylBHGd6b5FZAdFZYdMH-EQ&usqp=CAU',
    ],
    hashtags: ['캠핑'],
    preferredCategory: '여행권',
    preferredLocation: '제주 서귀포',
    waitingCount: 0,
  },
  {
    createdAt: '2023-08-23T08:42:49.821Z',
    updatedAt: '2023-08-23T08:42:49.821Z',
    id: 4,
    type: 'GOODS',
    userId: 0,
    name: '오리 인형',
    description: '포켓몬 인형이랑 바꾸고 싶네요',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNPDa0o78XoLPHoUNumPRulv992FpmGnyeg&usqp=CAU',
    ],
    hashtags: ['캐릭터', '인형', '잡화'],
    preferredCategory: '토토로',
    preferredLocation: '서울 용두동',
    waitingCount: 1,
  },
  {
    createdAt: '2023-08-25T08:42:49.821Z',
    updatedAt: '2023-08-25T08:42:49.821Z',
    id: 5,
    type: 'GOODS',
    userId: 0,
    name: '미국 캘리포니아',
    description:
      '유럽 가고 싶은데 미국 캘리포니아 티켓이랑 바꾸실 분 있으신가요 ㅠㅠ',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Z6BY9glnfOZPpAMXayWtGlxmd7H8IleilQ&usqp=CAU',
    ],
    hashtags: ['항공권', '미국'],
    preferredCategory: '항공권',
    preferredLocation: '서울 용산구',
    waitingCount: 1,
  },
  {
    createdAt: '2023-08-19T08:42:49.821Z',
    updatedAt: '2023-08-23T08:42:49.821Z',
    id: 6,
    type: 'GOODS',
    userId: 0,
    name: '마라톤 참가권',
    description: '몸이 안좋아서 다른 분께 양도드립니다.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkW_YuaI04cfcbf7M7ips1x89Fl4_UoSCuw&usqp=CAU',
    ],
    hashtags: ['항공권', '미국'],
    preferredCategory: '항공권',
    preferredLocation: '경기 의정부시',
    waitingCount: 4,
  },
  {
    createdAt: '2023-08-19T08:42:49.821Z',
    updatedAt: '2023-08-23T08:42:49.821Z',
    id: 7,
    type: 'GOODS',
    userId: 0,
    name: '피라미드 투어',
    description: '이집트 여행 중인데 일정이 바껴서 투어권 양도 드립니다.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkW_YuaI04cfcbf7M7ips1x89Fl4_UoSCuw&usqp=CAU',
    ],
    hashtags: ['항공권', '이집트'],
    preferredCategory: '투어권',
    preferredLocation: '이집트',
    waitingCount: 0,
  },
  {
    createdAt: '2023-08-23T08:42:49.821Z',
    updatedAt: '2023-08-26T08:42:49.821Z',
    id: 8,
    type: 'GOODS',
    userId: 0,
    name: '소금산',
    description:
      '소금이 먹고 싶어서 산을 샀는데 너무 많네요. 나눠드립니다. 바꿀 물건 제시해주세요.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzZBlTeNUJi4YoDPEPvHCfXheCqElenpgkQ&usqp=CAU',
    ],
    hashtags: ['소금', '식재료'],
    preferredCategory: '식재료',
    preferredLocation: '강원도 원주시',
    waitingCount: 6,
  },
  {
    createdAt: '2023-08-23T08:42:49.821Z',
    updatedAt: '2023-08-26T08:42:49.821Z',
    id: 9,
    type: 'GOODS',
    userId: 0,
    name: '부동산 강의',
    description:
      '부동산을 사고 팔고 싶은데 팔 집이 없네요. 나눠주실 분 있나요.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXw7ayv47ipN9JnYwMvosBOGeMfiHmWj06A&usqp=CAU',
    ],
    hashtags: ['집', '부동산'],
    preferredCategory: '부동산',
    preferredLocation: '미국 뉴욕',
    waitingCount: 0,
  },
  {
    createdAt: '2023-08-23T08:42:49.821Z',
    updatedAt: '2023-08-26T08:42:49.821Z',
    id: 10,
    type: 'GOODS',
    userId: 0,
    name: '부동산 강의',
    description:
      '부동산을 사고 팔고 싶은데 팔 집이 없네요. 나눠주실 분 있나요.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXw7ayv47ipN9JnYwMvosBOGeMfiHmWj06A&usqp=CAU',
    ],
    hashtags: ['집', '부동산'],
    preferredCategory: '부동산',
    preferredLocation: '미국 뉴욕',
    waitingCount: 0,
  },
  {
    createdAt: '2023-08-23T08:42:49.821Z',
    updatedAt: '2023-08-26T08:42:49.821Z',
    id: 11,
    type: 'GOODS',
    userId: 0,
    name: '피그마 무료강의 나눔',
    description:
      '신발을 얻고 싶네요. 피부 관리권을 양도해드릴태니 신발을 주세요.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIB4dLjefK3p7eBqYaxoCDEX0JikKd51Ovw&usqp=CAU',
    ],
    hashtags: ['미용', '피부'],
    preferredCategory: '신발',
    preferredLocation: '서울 금천구',
    waitingCount: 3,
  },
];
const mockDataApi = () => Promise.resolve(mockData);

const MyInfoMainScreen = () => {
  const [mock, setMock] = useState<typeof mockData>([]);

  const onFetchDataHandler = async () => {
    const fetch = await mockDataApi();
    setMock((prev) => {
      const copy = prev.slice();
      copy.push(...fetch);
      return copy;
    });
  };

  const ItemListCard = ({
    item,
  }: {
    item: { waitingCount: number; name: string; images: string[] };
  }) => {
    const renderResult = useMemo(() => {
      return (
        <Flexbox.Item flex={1} position='relative' padding={10}>
          <Flexbox
            position='absolute'
            zIndex={1}
            right={15}
            top={13}
            justifyContent='center'
            alignItems='center'
          >
            <Tag
              disabled={false}
              color={'#FFFFFF'}
              backgroundColor={'#21BD9E'}
              children={`+${item.waitingCount}`}
            />
          </Flexbox>
          <ImageCard
            title={item.name}
            src={item.images[0]}
            width={'100%'}
            height={150}
            resizeMode={'cover'}
          />
        </Flexbox.Item>
      );
    }, [item]);
    return renderResult;
  };

  useEffect(() => {
    onFetchDataHandler();
  }, []);

  return (
    <ScreenWrapper>
      <Box>
        <UserSummary
          data={{
            user: '집오리',
            verified: true,
            countSwitch: '4',
            userRate: '4/5',
            bio: '제 꿈은 클립으로 집까지 바꾸는거에요:)',
          }}
        />
        <Flexbox justifyContent='center' alignItems='center' mt={10} mb={10}>
          <Box width={200}>
            <Button
              type={'normal'}
              size={'middle'}
              onPress={function (): void {
                alert('편집하기');
              }}
            >
              내 정보 편집하기
            </Button>
          </Box>
        </Flexbox>
      </Box>
      <Box height={1} width={'100%'} backgroundColor='#000000' />
      <Flexbox height={'100%'}>
        <FlatList
          data={mock}
          renderItem={({ item }) => <ItemListCard item={item} />}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          onEndReached={onFetchDataHandler}
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={false}
        />
      </Flexbox>
    </ScreenWrapper>
  );
};

export { MyInfoMainScreen };
