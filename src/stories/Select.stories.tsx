import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from 'src/components/atom/Select';
import { Button } from 'src/components/atom';

export default {
  title: 'Select/basic',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const selectOption = () => {
    setModalVisible(false);
  };
  return (
    <>
      <Button title='정렬기준' onPress={() => setModalVisible(true)} />
      <Select
        {...args}
        modalVisible={modalVisible}
        setSelectedOption={setSelectedOption}
        onPress={selectOption}
      />
    </>
  );
};

export const BasicSelect = Template.bind({});

BasicSelect.storyName = 'Basic Select';
BasicSelect.args = {
  onPress: () => {},
  options: ['무작위', '최신순', '내 위치와 가까운 순'],
};
