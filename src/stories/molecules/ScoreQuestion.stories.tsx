import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ScoreQuestion } from 'src/components/molecule';

export default {
  title: 'ScoreQuestion',
  component: ScoreQuestion,
} as ComponentMeta<typeof ScoreQuestion>;

const Template: ComponentStory<typeof ScoreQuestion> = (args) => {
  const [rating, setRating] = useState(-1);
  const onPressHandler = (idx: number) => {
    setRating(idx);
  };

  return (
    <ScoreQuestion {...args} onPressHandler={onPressHandler} rating={rating} />
  );
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  children: '상대방의 매너는 어땠나요?',
  fontSize: 'inherit',
  ratingSize: 20,
  maxScore: 5,
};
