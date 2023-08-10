import React, { useState, useRef } from 'react';
import { View, PanResponder, StyleSheet, Text } from 'react-native';

const ScoreQuestion = ({ maxStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const prevRating = useRef(0);
  const startPoint = useRef(0);
  const ratingRef = useRef<View>(null);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (e, gestureState) => {
      startPoint.current = gestureState.x0;

      ratingRef.current?.measure((fx, fy, width) => {
        const gap = startPoint.current - fx;
        const initRating = Math.ceil((gap / width) * maxStars);
        prevRating.current = initRating;
        setRating(initRating);
      });
    },
    onPanResponderMove: (e, gestureState) => {
      const touchX = gestureState.moveX - startPoint.current;
      ratingRef.current?.measure((fx, fy, width) => {
        const newRating =
          prevRating.current + Math.ceil((touchX / width) * maxStars);
        if (newRating > 5) setRating(5);
        else if (newRating < 0) setRating(0);
        else setRating(newRating);
      });
    },
  });

  return (
    <View
      ref={ratingRef}
      {...panResponder.panHandlers}
      style={styles.container}
    >
      {Array.from({ length: maxStars }, (_, index) => (
        <Text key={index} style={styles.star}>
          {index < rating ? '★' : '☆'}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 30,
    color: 'gold',
  },
});

export { ScoreQuestion };
