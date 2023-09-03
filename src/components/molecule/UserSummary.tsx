import React from 'react';
import { Box, Flexbox, Tag, Typography } from '../atom';

type UserSummaryData = {
  user: string;
  verified: boolean;
  countSwitch: number;
  userRate: number;
  bio: string;
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
  const { user, verified, countSwitch, userRate, bio } = data;
  const tagColor = verified ? VERIFIED_COLOR : UNVERIFIED_COLOR;

  return (
    <Box padding={10}>
      <Flexbox mb={10}>
        <Flexbox.Item flex={1}>
          <Flexbox
            flexDirection={'column'}
            justifyContent='center'
            alignItems='center'
            gap={5}
          >
            <Typography fontSize={20}>{user}</Typography>
            <Tag color={'#fff'} backgroundColor={tagColor}>
              {verified ? '인증완료' : '미인증 유저'}
            </Tag>
          </Flexbox>
        </Flexbox.Item>
        <Flexbox.Item flex={1}>
          <Flexbox alignItems='center' justifyContent='center'>
            <Typography fontSize={13}>
              {`스위치 횟수: ${countSwitch} 점`}
            </Typography>
          </Flexbox>
          <Flexbox alignItems='center' justifyContent='center'>
            <Typography fontSize={13}>{`스위처 점수: ${getRateString(
              userRate,
              5
            )}`}</Typography>
          </Flexbox>
        </Flexbox.Item>
      </Flexbox>
      <Box>
        <Typography fontSize={13}>{bio}</Typography>
      </Box>
    </Box>
  );
};

export { UserSummary, UserSummaryProps };
