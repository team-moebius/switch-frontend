import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle, { ToggleProps } from 'src/components/atom/Toggle';

export default {
  title: 'Toggle/basic',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args: ToggleProps) => {
  const [toggleValue, setToggleValue] = useState(args.toggleValue);
  const handleOnPress = () => {
    setToggleValue((prev) => {
      return prev === 'copy-outline' ? 'timer-outline' : 'copy-outline';
    });
  };

  return (
    <Toggle {...args} toggleValue={toggleValue} handleOnPress={handleOnPress} />
  );
};

export const BasicToggle = Template.bind({});

BasicToggle.storyName = 'Basic Toggle';
BasicToggle.args = {
  toggleValue: 'copy-outline',
};
