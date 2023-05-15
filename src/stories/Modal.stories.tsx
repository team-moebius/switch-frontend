import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Box, Button, Modal, Typography } from 'src/components/atom';

export default {
  title: 'Modal/basic',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalOpen = () => {
    setModalVisible((prev) => !prev);
  };

  return (
    <>
      <Button title='Show' onPress={handleModalOpen}></Button>
      <Modal
        {...args}
        visible={modalVisible}
        modalPadding={args.modalPadding}
        modalHeight={args.modalHeight}
      >
        <Typography>{args.children as string}</Typography>
        <Box margin={20} width={60}>
          <Button title='Hide' onPress={handleModalOpen}></Button>
        </Box>
      </Modal>
    </>
  );
};

export const BasicModal = Template.bind({});

BasicModal.storyName = 'Basic Modal';
BasicModal.args = {
  children:
    'The Modal component is a basic way to present content above an enclosing view.',
  animationType: 'none',
  modalPadding: 20,
  modalHeight: 100,
  visible: false,
};
