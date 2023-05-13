import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from 'src/components/atom';

export default {
  title: 'Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  const [value, setValue] = useState<string>('');

  return (
    <Textarea
      {...args}
      placeholder='이름을 입력하세요'
      value={value}
      onChangeText={setValue}
    />
  );
};

export const WithTextInput = Template.bind({});

WithTextInput.storyName = 'default';
WithTextInput.args = {
  placeholder: 'placeholder test',
  style: { backgroundColor: 'red', borderRadius: 10 },
};
