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

export {
  StuffListItemData,
  SwitchHistoryListItemData,
  STUFF_LIST_MOCK,
  SWITCH_HISTORY_LIST_MOCK,
};
