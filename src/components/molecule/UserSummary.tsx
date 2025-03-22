import { Box, Flexbox, Tag, Typography } from '../atom';
import { COLORS, FONT_SIZE } from 'src/assets/theme/base';

interface UserSummaryData {
  nickname: string;
  verified: boolean;
  switchCount: number;
  score: number;
  introduction?: string;
}
interface UserSummaryProps {
  data: UserSummaryData;
  onPressUsername?: () => void;
}

const UserSummary = ({ data }: UserSummaryProps) => {
  const { nickname, verified, switchCount, score, introduction } = data;
  const tagColor = verified ? COLORS.info : COLORS.error;

  return (
    <Box>
      <Flexbox justifyContent='space-between'>
        <Flexbox.Item flex={1} height={'100%'}>
          <Flexbox flexDirection='column' alignItems='center' rowGap={5}>
            <Typography
              fontSize={FONT_SIZE.header}
              ellipsizeMode='tail'
              numberOfLines={1}
            >
              {nickname}
            </Typography>
            <Tag color={COLORS.neutral.white} backgroundColor={tagColor}>
              {verified ? '인증완료' : '미인증 유저'}
            </Tag>
          </Flexbox>
        </Flexbox.Item>
        <Flexbox flexDirection='column' rowGap={8} height={'100%'}>
          <Typography fontSize={FONT_SIZE.normal}>
            {`스위치 횟수: ${switchCount} 건`}
          </Typography>
          <Typography
            fontSize={FONT_SIZE.normal}
          >{`스위처 점수: ${score} / 5`}</Typography>
        </Flexbox>
      </Flexbox>
      {introduction && (
        <Box mt={10}>
          <Typography
            fontSize={FONT_SIZE.smaller}
            ellipsizeMode='tail'
            numberOfLines={2}
          >
            {introduction}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export { UserSummary, UserSummaryProps, UserSummaryData };
