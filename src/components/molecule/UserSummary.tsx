import React from 'react';
import { Box, Flexbox, Tag, Typography } from '../atom';
import COLORS from 'src/assets/theme/base';

type UserSummaryData = {
  nickname: string;
  verified: boolean;
  switchCount: number;
  score: number;
  introduction?: string;
};
interface UserSummaryProps {
  data: UserSummaryData;
}

const VERIFIED_COLOR = '#449afc';
const UNVERIFIED_COLOR = '#ed692c';

const getRateString = (value: number, total: number): `${number}/${number}` => {
  return `${Number((value * total).toFixed(2))}/${total}`;
};

const UserSummary = ({ data }: UserSummaryProps) => {
  const { nickname, verified, switchCount, score, introduction } = data;
  const tagColor = verified ? VERIFIED_COLOR : UNVERIFIED_COLOR;

  return (
    <Box>
      <Flexbox>
        <Flexbox.Item flex={1}>
          <Flexbox flexDirection={'column'} justifyContent='center' gap={5}>
            <Typography fontSize={20}>{nickname}</Typography>
            <Tag color={COLORS.neutral.white} backgroundColor={tagColor}>
              {verified ? '인증완료' : '미인증 유저'}
            </Tag>
          </Flexbox>
        </Flexbox.Item>
        <Flexbox.Item alignSelf='center'>
          <Flexbox alignItems='center' justifyContent='center'>
            <Typography fontSize={13}>
              {`스위치 횟수: ${switchCount} 점`}
            </Typography>
          </Flexbox>
          <Flexbox alignItems='center' justifyContent='center' mt={10}>
            <Typography fontSize={13}>{`스위처 점수: ${getRateString(
              score,
              5
            )}`}</Typography>
          </Flexbox>
        </Flexbox.Item>
      </Flexbox>
      {introduction && (
        <Box mt={10}>
          <Typography fontSize={13}>{introduction}</Typography>
        </Box>
      )}
    </Box>
  );
};

export { UserSummary, UserSummaryProps, UserSummaryData };
