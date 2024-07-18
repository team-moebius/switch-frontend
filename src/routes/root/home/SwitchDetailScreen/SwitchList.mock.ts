import { ItemResponse } from '@team-moebius/api-typescript';
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

const STUFF_LIST_MOCK: Array<ItemResponse> = [
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item1',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'READY',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item2',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'READY',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item3',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'READY',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item4',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'READY',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item5',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'IN_PROGRESS',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item6',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'IN_PROGRESS',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item7',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'CANCELED',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item8',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'READY',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item9',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'CANCELED',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item10',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'DONE',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item11',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'READY',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item12',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'READY',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item13',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'READY',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item14',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'READY',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item15',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'READY',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item16',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'READY',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item17',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'READY',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item18',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'DONE',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item19',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'CANCELED',
  },
  {
    type: 'GOODS',
    userId: 123,
    name: 'Sample Item20',
    description: 'This is a sample item description.',
    images: [
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
      'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    ],
    hashtags: new Set(['tag1', 'tag2']),
    preferredCategories: new Set(['Electronics']),
    preferredLocations: new Set(['City XYZ']),
    waitingCount: 5,
    status: 'READY',
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
    'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    'https://i.pinimg.com/736x/31/51/2a/31512a374041bcc7ba0983f37b67016e.jpg',
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
  SwitchDetailData,
  StuffListItemData,
  SwitchHistoryListItemData,
  STUFF_LIST_MOCK,
  SWITCH_HISTORY_LIST_MOCK,
  SWITCH_DETAIL_MOCK,
};
