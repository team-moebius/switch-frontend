import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { Button, Flexbox, Modal } from 'src/components/atom';

export default {
  title: 'Modal',
  component: Modal,
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalOpen = () => {
    setModalVisible((prev) => !prev);
  };

  return (
    <>
      <Flexbox justifyContent={'center'}>
        <Button type='normal' size='medium' onPress={handleModalOpen}>
          Show
        </Button>
      </Flexbox>
      <Modal {...args} visible={modalVisible}>
        <Button type='normal' size='medium' onPress={handleModalOpen}>
          Hide
        </Button>
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
