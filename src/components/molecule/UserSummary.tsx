import React from 'react';
import { Box, Flexbox, Tag, Typography } from '../atom';
import { Color } from 'src/@types/unit';
import { UserSummaryData } from 'src/stories/molecules/UserSummary.stories';

interface UserSummaryProps {
  data: UserSummaryData;
}

const UserSummary = ({ data }: UserSummaryProps) => {
  const { user, verified, countSwitch, userRate, bio } = data;
  const VERIFIED_COLOR = '#449afc';
  const UNVERIFIED_COLOR = '#ed692c';
  const tagColor = verified ? VERIFIED_COLOR : UNVERIFIED_COLOR;

  return (
    <Flexbox flexDirection={'column'} padding={20} gap={20}>
      <Flexbox>
        <Box width={'50%'}>
          <Flexbox flexDirection={'column'} gap={10}>
            <Typography fontSize={20}>{user}</Typography>

            <Tag color={'#fff'} backgroundColor={tagColor}>
              {verified ? '인증완료' : '미인증 유저'}
            </Tag>
          </Flexbox>
        </Box>
        <Flexbox alignItems={'center'}>
          <Box width={'50%'}>
            <Flexbox flexDirection={'column'} gap={10}>
              <Typography fontSize={13}>
                {'스위치 횟수: ' + countSwitch}
              </Typography>
              <Typography fontSize={13}>
                {'스위처 점수: ' + userRate}
              </Typography>
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
