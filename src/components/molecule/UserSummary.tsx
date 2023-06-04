import React from 'react';
import { Box, Flexbox, Tag, Typography } from '../atom';
import { Color } from 'src/@types/unit';
import { UserSummaryData } from 'src/stories/molecules/UserSummary.stories';

interface UserSummaryProps {
  tagColor: Color;
  data: UserSummaryData;
}

const UserSummary = ({ tagColor, data }: UserSummaryProps) => {
  const { userName, verified, switchCount, switchRate, bio } = data;
  return (
    <Flexbox flexDirection={'column'} padding={20} gap={20}>
      <Flexbox>
        <Box width={'50%'}>
          <Flexbox flexDirection={'column'} gap={10}>
            <Typography fontSize={20}>{userName}</Typography>
            {verified && (
              <Tag color={'#fff'} backgroundColor={tagColor}>
                인증완료
              </Tag>
            )}
          </Flexbox>
        </Box>
        <Flexbox alignItems={'center'}>
          <Box width={'50%'}>
            <Flexbox flexDirection={'column'} gap={10}>
              <Typography fontSize={13}>스위치 횟수: {switchCount}</Typography>
              <Typography fontSize={13}>스위처 점수: {switchRate}</Typography>
            </Flexbox>
          </Box>
        </Flexbox>
      </Flexbox>
      <Box>
        <Typography>{bio}</Typography>
      </Box>
    </Flexbox>
  );
};

export { UserSummary };

/**
 * 다른 용도로 쓸 수 있도록 하려면 모든 속성들을 props로 받아와야 하는걸까?
 * 다른 데이터도 받을 수 있도록 하려면 타입 지정을 구체화하기 보다는 data의 타입을 동적인 키 이름을 가진 객체로 정의해야 할까?
 * type Data = {
    [key: string]: any;
   }[];  이렇게?
 */
