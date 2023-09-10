import { TagProps } from 'src/components/atom/Tag';

type DateString = string; // ex- '2023-08-26T08:42:49.821Z'

type StuffListItemData = {
  location?: string;
  thumbnail?: string;
  name: string;
  createdAt?: DateString;
  updatedAt?: DateString;
  waitingCount?: number;
};

type SwitchHistoryListItemData = {
  items: [StuffListItemData, StuffListItemData];
  switchAt: DateString;
};

type SwitchDetailData = {
  title?: string;
  date?: string;
  desc?: string;
  images?: string[];
  wantedItem?: string;
  location?: string;
  hashTags?: TagProps[];
  liked?: boolean;
};

const STUFF_LIST_MOCK: Array<StuffListItemData> = [
  {
    location: '서울',
    thumbnail:
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    name: '커스텀 키보드',
    waitingCount: 5,
  },
  {
    location: '서울',
    thumbnail:
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    name: '커스텀 키보드',
    waitingCount: 5,
  },
  {
    location: '서울',
    thumbnail:
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    name: '커스텀 키보드',
    waitingCount: 5,
  },
  {
    location: '서울',
    thumbnail:
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    name: '커스텀 키보드',
  },
  {
    location: '서울',
    thumbnail:
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    name: '커스텀 키보드',
  },
  {
    location: '서울',
    thumbnail:
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    name: '커스텀 키보드',
    waitingCount: 5,
  },
  {
    location: '서울',
    thumbnail:
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    name: '커스텀 키보드',
  },
];

const SWITCH_HISTORY_LIST_MOCK: Array<SwitchHistoryListItemData> = [
  {
    items: [
      {
        location: '서울',
        thumbnail:
          'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
        name: '커스텀 키보드',
      },
      {
        location: '서울',
        thumbnail:
          'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
        name: '커스텀 키보드',
      },
    ],
    switchAt: '2023-08-26T08:42:49.821Z',
  },
  {
    items: [
      {
        location: '서울',
        thumbnail:
          'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
        name: '커스텀 키보드',
      },
      {
        location: '서울',
        thumbnail:
          'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
        name: '커스텀 키보드',
      },
    ],
    switchAt: '2023-08-26T08:42:49.821Z',
  },
  {
    items: [
      {
        location: '서울',
        thumbnail:
          'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
        name: '커스텀 키보드',
      },
      {
        location: '서울',
        thumbnail:
          'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
        name: '커스텀 키보드',
      },
    ],
    switchAt: '2023-08-26T08:42:49.821Z',
  },
  {
    items: [
      {
        location: '서울',
        thumbnail:
          'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
        name: '커스텀 키보드',
      },
      {
        location: '서울',
        thumbnail:
          'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
        name: '커스텀 키보드',
      },
    ],
    switchAt: '2023-08-26T08:42:49.821Z',
  },
  {
    items: [
      {
        location: '서울',
        thumbnail:
          'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
        name: '커스텀 키보드',
      },
      {
        location: '서울',
        thumbnail:
          'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
        name: '커스텀 키보드',
      },
    ],
    switchAt: '2023-08-26T08:42:49.821Z',
  },
  {
    items: [
      {
        location: '서울',
        thumbnail:
          'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
        name: '커스텀 키보드',
      },
      {
        location: '서울',
        thumbnail:
          'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
        name: '커스텀 키보드',
      },
    ],
    switchAt: '2023-08-26T08:42:49.821Z',
  },
];

const SWITCH_DETAIL_MOCK: SwitchDetailData = {
  title: '커스텀 키보드',
  date: '2023/03/08',
  desc: '신입 개발자 시절 일에 대한 열정을 불태워줄 수 있도록 도와줬던 키보드입니다. 이걸로 업무봤을 때 좀 더 잘 되는 것 같았어요.',
  images: [
    'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
  ],
  wantedItem: '여성 신발이나 잡화',
  location: '서울 천왕동',
  hashTags: [
    {
      children: '#키보드',
      backgroundColor: 'transparent',
      color: 'black',
    },
    {
      children: '#조약돌소리',
      backgroundColor: 'transparent',
      color: 'black',
    },
  ],
};

export {
  StuffListItemData,
  SwitchHistoryListItemData,
  STUFF_LIST_MOCK,
  SWITCH_HISTORY_LIST_MOCK,
  SWITCH_DETAIL_MOCK,
};
