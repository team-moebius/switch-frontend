import React from 'react';
import { Pressable } from 'react-native';

import { Box, Flexbox, Icon, Typography } from '../atom';
import { TypographyProps } from '../atom/Typograph';
import { IconProps } from '../atom/Icon';

interface ScoreQuestionProps
  extends Pick<TypographyProps, 'children' | 'fontSize'> {
  maxScore: number;
  ratingSize: IconProps['size'];
  onPressHandler: (idx: number) => void;
  rating: number;
}

const ScoreQuestion = ({
  children,
  fontSize,
  ratingSize = 20,
  maxScore,
  onPressHandler,
  rating,
}: ScoreQuestionProps) => {
  const renderStars = Array.from({ length: maxScore }, (_, idx) => (
    <Pressable onPress={() => onPressHandler(idx)}>
      <Icon
        size={ratingSize}
        name={idx < rating ? 'star-sharp' : 'star-outline'}
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
