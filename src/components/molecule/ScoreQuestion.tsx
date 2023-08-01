import React from 'react';
import { Pressable } from 'react-native';

import { Box, Flexbox, Icon, Typography } from '../atom';
import { TypographyProps } from '../atom/Typograph';
import { IconProps } from '../atom/Icon';

interface ScoreQuestionProps
  extends Pick<TypographyProps, 'children' | 'fontSize'> {
  maxScore: number;
  scoreSize: IconProps['size'];
  onPressHandler: (idx: number) => void;
  idxNumber: number;
}

const ScoreQuestion = ({
  children,
  fontSize,
  scoreSize = 20,
  maxScore,
  onPressHandler,
  idxNumber,
}: ScoreQuestionProps) => {
  const renderStars = Array.from({ length: maxScore }, (_, idx) => (
    <Pressable onPress={() => onPressHandler(idx)}>
      <Icon
        size={scoreSize}
        name={idx <= idxNumber ? 'star-sharp' : 'star-outline'}
      />
    </Pressable>
  ));

  return (
    <Box>
      <Typography fontSize={fontSize}>{children}</Typography>
      <Flexbox gap={5}>{renderStars}</Flexbox>
    </Box>
  );
};

export { ScoreQuestion };
