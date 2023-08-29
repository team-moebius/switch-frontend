import { ReactElement, useMemo, useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import { Box, Flexbox, Icon, Select, Toggle } from 'src/components/atom';
import {
  HistoryListItem,
  ImageCard,
  TradingListItem,
} from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';

type IconType = 'grid' | 'list';

const mockData = [
  {
    createdAt: '2023-08-26T08:42:49.821Z',
    updatedAt: '2023-08-26T08:42:49.821Z',
    id: 0,
    type: 'GOODS',
    userId: 0,
    name: '커스텀 키보드',
    description: '커스텀 키보드랑 교환 원하시는 분',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: ['키보드', 'IT', '가전'],
    preferredCategory: '가전',
    preferredLocation: '서울 천왕동',
    waitingCount: 0,
  },
  {
    createdAt: '2023-08-20T08:42:49.821Z',
    updatedAt: '2023-08-21T08:42:49.821Z',
    id: 1,
    type: 'GOODS',
    userId: 1,
    name: '맑은 공기 리조트',
    description: '마리오 카트랑 바꾸고 싶어요',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9G-UFAbO7tFzELzAxyOETOskVhZv88S7wg&usqp=CAU',
    ],
    hashtags: ['마리오', '게임', '닌텐도'],
    preferredCategory: '마리오',
    preferredLocation: '서울 화양동',
    waitingCount: 3,
  },
  {
    createdAt: '2023-08-22T08:42:49.821Z',
    updatedAt: '2023-08-22T08:42:49.821Z',
    id: 2,
    type: 'GOODS',
    userId: 2,
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
    userId: 3,
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
    userId: 4,
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
    userId: 5,
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
    userId: 6,
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
    userId: 7,
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
    userId: 8,
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
    userId: 7,
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
    userId: 10,
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
    userId: 11,
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
  {
    createdAt: '2023-08-23T08:42:49.821Z',
    updatedAt: '2023-08-26T08:42:49.821Z',
    id: 12,
    type: 'GOODS',
    userId: 12,
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
  {
    createdAt: '2023-08-23T08:42:49.821Z',
    updatedAt: '2023-08-26T08:42:49.821Z',
    id: 13,
    type: 'GOODS',
    userId: 13,
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
  {
    createdAt: '2023-08-23T08:42:49.821Z',
    updatedAt: '2023-08-26T08:42:49.821Z',
    id: 14,
    type: 'GOODS',
    userId: 14,
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
  {
    createdAt: '2023-08-23T08:42:49.821Z',
    updatedAt: '2023-08-26T08:42:49.821Z',
    id: 15,
    type: 'GOODS',
    userId: 15,
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

const timeLineData = [
  {
    myItem: '엘',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘피',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘트',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘판 노트',
    selectedItem: '국',
    ago: '20분전',
  },
  {
    myItem: '엘',
    selectedItem: '국',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘트',
    selectedItem: '력',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트 엘피판 노트',
    selectedItem:
      '국민은행 달력 국민은행 달력국민은행 달력 국민은행 달력국민은행 달력 국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘트',
    selectedItem: '력',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트 엘피판 노트',
    selectedItem:
      '국민은행 달력 국민은행 달력국민은행 달력 국민은행 달력국민은행 달력 국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘트',
    selectedItem: '력',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
  {
    myItem: '엘피판 노트 엘피판 노트',
    selectedItem:
      '국민은행 달력 국민은행 달력국민은행 달력 국민은행 달력국민은행 달력 국민은행 달력',
    ago: '20분전',
  },
];

enum TabMenu {
  List = 'list-view',
  TimeLine = 'timeline-view',
}

const ListView = () => {
  const selectOptions = useMemo(
    () => ['무작위', '최신순', '내 위치와 가까운 순'],
    []
  );

  const [isGridView, setIsGridView] = useState(true);
  const [value, setValue] = useState<string | number>(selectOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(mockData.length / itemsPerPage);

  const handleViewMode: Record<IconType, () => void> = {
    grid: () => setIsGridView(true),
    list: () => setIsGridView(false),
  };

  const loadMoreData = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const currentData = mockData.slice(0, currentPage * itemsPerPage);
  return (
    <>
      <Flexbox
        height={'10%'}
        width={'100%'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Flexbox.Item flex={1}>
          <Flexbox gap={5}>
            <Pressable onPress={handleViewMode['grid']}>
              <Icon name={isGridView ? 'grid' : 'grid-outline'} size={20} />
            </Pressable>
            <Pressable onPress={handleViewMode['list']}>
              <Icon name={isGridView ? 'list-outline' : 'list'} size={20} />
            </Pressable>
          </Flexbox>
        </Flexbox.Item>
        <Flexbox.Item width={'auto'} alignSelf={'center'}>
          <Select
            value={value}
            options={selectOptions}
            onPressItem={setValue}
            disabled={false}
          />
        </Flexbox.Item>
      </Flexbox>
      <Flexbox.Item width={'100%'} height={'80%'} flex={1}>
        {isGridView ? (
          <FlatList
            data={currentData}
            key={'gridView'}
            renderItem={({ item }) => (
              <Flexbox.Item flex={1} width={'100%'}>
                <ImageCard
                  title={item.name}
                  src={item.images[0]}
                  desc={item.preferredLocation}
                  width={'100%'}
                  height={150}
                  resizeMode={'cover'}
                  onClickHandler={() => {
                    window.alert('clicked');
                  }}
                />
              </Flexbox.Item>
            )}
            keyExtractor={(item) => 'gridView' + item.userId}
            numColumns={2}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.1}
            columnWrapperStyle={{
              gap: 10,
            }}
          />
        ) : (
          <FlatList
            data={currentData}
            key={'listView'}
            renderItem={({ item, index }) => (
              <>
                <TradingListItem
                  data={{
                    title: item.name,
                    src: item.images[0],
                    location: item.preferredLocation,
                  }}
                  onPress={() => {
                    alert('list click');
                  }}
                  childDirection={'column'}
                  cardDirection={'row'}
                  itemJustify={'left'}
                  fontSize={'cardList'}
                  imageResizeMode={'cover'}
                />
                {index < currentData.length - 1 && (
                  <Box height={1} backgroundColor={'gray'} mt={10} mb={10} />
                )}
              </>
            )}
            keyExtractor={(item) => 'listView' + item.userId}
            numColumns={1}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.1}
          />
        )}
      </Flexbox.Item>
    </>
  );
};

const TimeLineView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(timeLineData.length / itemsPerPage);

  const loadMoreData = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <Flexbox.Item width={'100%'} height={'90%'} flex={1}>
      <FlatList
        data={timeLineData}
        key={'timeLineView'}
        renderItem={({ item, index }) => (
          <Flexbox.Item flex={1} width={'100%'}>
            <HistoryListItem
              data={{
                myItem: item.myItem,
                selectedItem: item.selectedItem,
                ago: item.ago,
              }}
              mirrorDirection={'row'}
              onPress={() => {
                alert('list clicked');
              }}
            />
            {index < timeLineData.length - 1 && (
              <Box height={1} backgroundColor={'gray'} mt={10} mb={10} />
            )}
          </Flexbox.Item>
        )}
        keyExtractor={(item) => 'timeLineView' + item.ago}
        numColumns={1}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.1}
      />
    </Flexbox.Item>
  );
};

const HomeMainScreen = () => {
  const [activeTab, setActiveTab] = useState<string>('list-view');

  const content: { [key: string]: ReactElement } = useMemo(
    () => ({
      [TabMenu.List]: <ListView />,
      [TabMenu.TimeLine]: <TimeLineView />,
    }),
    []
  );

  const handleActiveTab = () => {
    if (activeTab === TabMenu.List) {
      setActiveTab(TabMenu.TimeLine);
    } else setActiveTab(TabMenu.List);
  };

  return (
    <ScreenWrapper>
      <Flexbox
        height={'100%'}
        justifyContent={'center'}
        flexDirection={'column'}
        pt={50}
      >
        {content[activeTab]}
        <Flexbox
          height={'10%'}
          width={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Toggle
            value={activeTab === TabMenu.List}
            handleOnPress={handleActiveTab}
          />
        </Flexbox>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { HomeMainScreen };
