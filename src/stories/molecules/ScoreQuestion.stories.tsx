import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ScoreQuestion } from 'src/components/molecule';

export default {
  title: 'ScoreQuestion',
  component: ScoreQuestion,
} as ComponentMeta<typeof ScoreQuestion>;

const Template: ComponentStory<typeof ScoreQuestion> = (args) => {
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
