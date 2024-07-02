import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ImageCard } from 'src/components/molecule';
import { FlatList, TouchableOpacity } from 'react-native';
import { Flexbox } from 'src/components/atom';

export default {
  title: 'ImageCard',
  component: ImageCard,
} as Meta<typeof ImageCard>;

const Template: StoryFn<typeof ImageCard> = (args) => {
  const DATA = [
    {
      desc: '서울 천왕동',
      title: '커스텀 키보드',
      src: 'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg',
    },
    {
      desc: '서울 화양동',
      title: '맑은 공기 리조트',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9G-UFAbO7tFzELzAxyOETOskVhZv88S7wg&usqp=CAU',
    },
    {
      desc: '경기 수원시',
      title: '토토로 인형',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzfgVAiFqLmcrULkb5qDJ16hlDgsMsB83EQ&usqp=CAU',
    },
    {
      desc: '제주 서귀포',
      title: '캠핑장 이용권',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2C26H5J5MLk5XylBHGd6b5FZAdFZYdMH-EQ&usqp=CAU',
    },
    {
      desc: '서울 용두동',
      title: '오리 인형',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNPDa0o78XoLPHoUNumPRulv992FpmGnyeg&usqp=CAU',
    },
    {
      desc: '미국 캘리포니아',
      title: '구글 공룡 인형',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Z6BY9glnfOZPpAMXayWtGlxmd7H8IleilQ&usqp=CAU',
    },
    {
      desc: '경기 의정부시',
      title: '마라톤 참가권',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkW_YuaI04cfcbf7M7ips1x89Fl4_UoSCuw&usqp=CAU',
    },
    {
      desc: '이집트',
      title: '피라미드 투어',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFJOCpjzGtZtpWfQg0CN5rT0bfjEhOQ0j5w&usqp=CAU',
    },
    {
      desc: '강원도 원주시',
      title: '소금산',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzZBlTeNUJi4YoDPEPvHCfXheCqElenpgkQ&usqp=CAU',
    },
    {
      desc: '미국 뉴욕',
      title: '부동산 강의',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXw7ayv47ipN9JnYwMvosBOGeMfiHmWj06A&usqp=CAU',
    },
    {
      desc: '충북 청주시',
      title: '피부 관리권',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAn-Pc5Oo-weNXMFY1cWQ-VR8TGe5fgTsg&usqp=CAU',
    },
    {
      desc: '서울 금천구',
      title: '피그마 무료강의 나눔',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIB4dLjefK3p7eBqYaxoCDEX0JikKd51Ovw&usqp=CAU',
    },
    {
      desc: '서울 용두동',
      title: '오리 인형',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNPDa0o78XoLPHoUNumPRulv992FpmGnyeg&usqp=CAU',
    },
    {
      desc: '충남 예산',
      title: '고양이 임보',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XiinDtbqzfRqo6MlJyEO2fRkXO9S3fG21w&usqp=CAU',
    },
    {
      desc: '경기 고양시',
      title: '자유의 여신상 피규어',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoyn2wqKhkVVs96IL1e87oVegpN9hnKk-mBw&usqp=CAU',
    },
    {
      desc: '수도권역',
      title: '특수교육 교육과정 핵심교원 역량 강화',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxvi81aDDuHbgk89fLIAgQ-YzbvJcPqZl1A&usqp=CAU',
    },
    {
      desc: '서울대학교',
      title: '샤',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEvYMTf2iNqjww4c1Og6OjF6YmwB544nhMAjIE1Qjfps5qqiWQB6gyzW_DGUETPyk7nM&usqp=CAU',
    },
    {
      desc: '미국 캘리포니아',
      title: '파이리 띠부띠부씰',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJyhq_8z6s1HEzb6ot_USvHvjbeYHgk1Bl7znSGdIe6u8wrWD9Qu8SZSf1FehBVIZ2dQ&usqp=CAU',
    },
  ];

  // 현재 페이지를 상태로 관리
  const [currentPage, setCurrentPage] = useState(1);

  // 각 페이지의 데이터를 정의
  const itemsPerPage = 6;
  const totalPages = Math.ceil(DATA.length / itemsPerPage);

  // 데이터 필터링
  const currentData = DATA.slice(0, currentPage * itemsPerPage);

  // 다음 페이지로 이동하는 함수
  const loadMoreData = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Flexbox>
      <Flexbox.Item height={600} width={'100%'}>
        <FlatList
          data={currentData}
          renderItem={({ item }) => (
            <Flexbox.Item flex={1}>
              <ImageCard {...item} {...args} />
            </Flexbox.Item>
          )}
          keyExtractor={(item) => item.src}
          numColumns={2}
          onEndReached={loadMoreData} // 끝에 도달하면 데이터 더 불러오기
          onEndReachedThreshold={0.1} // 끝에 도달하기 전에 호출할 위치 (0.1은 10% 지점)
          columnWrapperStyle={{
            gap: 10,
          }}
        />
      </Flexbox.Item>
    </Flexbox>
  );
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  width: '100%',
  height: 150,
  resizeMode: 'cover',
  onClickHandler: () => {
    window.alert('clicked');
  },
};
