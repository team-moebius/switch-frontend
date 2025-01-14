import { useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';

import { Flexbox, Icon } from '../atom';
import { IconProps } from '../atom/Icon';
import { itemJustifyStyle } from './TradingListItem';

interface ScoreQuestionProps {
  maxRating: number;
  rating: number;
  ratingHandler: (rating: number) => void;
  ratingSize: IconProps['size'];
  itemJustify?: keyof typeof itemJustifyStyle;
}

const containerStyle = StyleSheet.create({
  default: {
    width: 'auto',
  },
});

const ScoreQuestion = ({
  maxRating,
  rating,
  ratingHandler,
  ratingSize,
  itemJustify = 'left',
}: ScoreQuestionProps) => {
  const prevRating = useRef(0);
  const startPoint = useRef(0);
  const containerRef = useRef<View>(null);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (_, gestureState) => {
      startPoint.current = gestureState.x0;

      containerRef.current?.measure((_fx, _fy, width, _h, pageX) => {
        const gap = startPoint.current - pageX;
        const initRating = Math.ceil((gap / width) * maxRating);
        prevRating.current = initRating;
        ratingHandler(initRating);
      });
    },
    onPanResponderMove: (_, gestureState) => {
      const touchX = gestureState.moveX - startPoint.current;
      containerRef.current?.measure((_fx, _fy, width) => {
        const newRating =
          prevRating.current + Math.ceil((touchX / width) * maxRating);
        if (newRating > maxRating) ratingHandler(maxRating);
        else if (newRating < 0) ratingHandler(0);
        else ratingHandler(newRating);
      });
    },
  });

  const renderStars = Array.from({ length: maxRating }, (_, idx) => (
    <Flexbox.Item key={idx}>
      <Icon
        size={ratingSize}
        name={idx < rating ? 'star-sharp' : 'star-outline'}
      />
    </Flexbox.Item>
  ));

  return (
    <View
      ref={containerRef}
      {...panResponder.panHandlers}
      style={containerStyle.default}
    >
      <Flexbox flexDirection='row' {...itemJustifyStyle[itemJustify]}>
        {renderStars}
      </Flexbox>
    </View>
  );
};

export { ScoreQuestion };
