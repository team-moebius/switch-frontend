import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ScoreQuestion } from 'src/components/molecule';

export default {
  title: 'ScoreQuestion',
  component: ScoreQuestion,
} as ComponentMeta<typeof ScoreQuestion>;

const Template: ComponentStory<typeof ScoreQuestion> = (args) => {
  const [idxNumber, setIdxNumber] = useState(-1);
  const onPressHandler = (idx: number) => {
    setIdxNumber(idx);
  };

  return (
    <ScoreQuestion
      {...args}
      onPressHandler={onPressHandler}
      idxNumber={idxNumber}
    />
  );
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  children: '상대방의 매너는 어땠나요?',
  fontSize: 'inherit',
  scoreSize: 20,
  maxScore: 5,
};
