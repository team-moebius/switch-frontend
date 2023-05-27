import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Button, Flexbox, Modal } from 'src/components/atom';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalOpen = () => {
    setModalVisible((prev) => !prev);
  };

  return (
    <>
      <Flexbox justifyContent={'center'}>
        <Button title='Show' onPress={handleModalOpen}></Button>
      </Flexbox>
      <Modal {...args} visible={modalVisible}>
        <Button title='Hide' onPress={handleModalOpen}></Button>
      </Modal>
    </>
  );
};

export const BasicModal = Template.bind({});

BasicModal.storyName = 'default';
BasicModal.args = {
  mode: 'slideUp',
  width: '100%',
  height: '80%',
  position: 'bottom',
  onPressBack: () => {
    alert('back pressed!');
  },
};
