import React, { useRef } from 'react';
import { View, PanResponder } from 'react-native';

import { Flexbox, Icon, Typography } from '../atom';
import { IconProps } from '../atom/Icon';
import { TypographyProps } from '../atom/Typograph';

interface ScoreQuestionProps
  extends Pick<TypographyProps, 'children' | 'fontSize'> {
  maxRating: number;
  rating: number;
  ratingHandler: (rating: number) => void;
  ratingSize: IconProps['size'];
}

const ScoreQuestion = ({
  children,
  maxRating,
  rating,
  ratingHandler,
  fontSize,
  ratingSize,
}: ScoreQuestionProps) => {
  const prevRating = useRef(0);
  const startPoint = useRef(0);
  const ratingRef = useRef<View>(null);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (_, gestureState) => {
      startPoint.current = gestureState.x0;

      ratingRef.current?.measure((fx, _fy, width) => {
        const gap = startPoint.current - fx;
        const initRating = Math.ceil((gap / width) * maxRating);
        prevRating.current = initRating;
        ratingHandler(initRating);
      });
    },
    onPanResponderMove: (_, gestureState) => {
      const touchX = gestureState.moveX - startPoint.current;
      ratingRef.current?.measure((_fx, _fy, width) => {
        const newRating =
          prevRating.current + Math.ceil((touchX / width) * maxRating);
        if (newRating > maxRating) ratingHandler(maxRating);
        else if (newRating < 0) ratingHandler(0);
        else ratingHandler(newRating);
      });
    },
  });

  const renderStars = Array.from({ length: maxRating }, (_, idx) => (
    <Icon
      key={idx}
      size={ratingSize}
      name={idx < rating ? 'star-sharp' : 'star-outline'}
    />
  ));

  return (
    <View ref={ratingRef} {...panResponder.panHandlers}>
      <Typography fontSize={fontSize}>{children}</Typography>
      <Flexbox flexDirection='row'>{renderStars}</Flexbox>
    </View>
  );
};

export { ScoreQuestion };
