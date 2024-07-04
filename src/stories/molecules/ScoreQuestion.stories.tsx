import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ScoreQuestion } from 'src/components/molecule';

export default {
  title: 'ScoreQuestion',
  component: ScoreQuestion,
} as Meta<typeof ScoreQuestion>;

const Template: StoryFn<typeof ScoreQuestion> = (args) => {
  const [rating, setRating] = useState(0);
  const ratingHandler = (rating: number) => {
    setRating(rating);
  };
  return (
    <ScoreQuestion {...args} rating={rating} ratingHandler={ratingHandler} />
  );
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  children: '상대방의 매너는 어땠나요?',
  maxRating: 5,
  fontSize: 16,
  ratingSize: 32,
};
