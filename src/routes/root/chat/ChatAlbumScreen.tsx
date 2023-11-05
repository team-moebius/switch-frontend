import React from 'react';
import { ScreenWrapper } from 'src/components/template';

const ALBUM_DATA_MOCK = [
  {
    id: 1,
    title: '여름 휴가 2022',
    photos: [
      {
        id: 101,
        url: 'https://yimgf-thinkzon.yesform.com/docimgs/public/1/65/64774/64773254.jpg',
        caption: '해변에서의 일몰',
      },
      {
        id: 102,
        url: 'https://www.kkday.com/ko/blog/wp-content/uploads/korea_seoul_gangneung_beach_picnic.jpg',
        caption: '친구와의 해변 캠핑',
      },
    ],
  },
];

const ChatAlbumScreen = () => {
  return <ScreenWrapper></ScreenWrapper>;
};

export default ChatAlbumScreen;
