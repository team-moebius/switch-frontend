import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ScoreQuestion } from 'src/components/molecule';

export default {
  title: 'ScoreQuestion',
  component: ScoreQuestion,
} as ComponentMeta<typeof ScoreQuestion>;

const Template: ComponentStory<typeof ScoreQuestion> = () => {
  return <ScoreQuestion />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  maxStars: 5,
};
