import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Modal, Typography } from 'src/components/atom';

export default {
  title: 'Modal/basic',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  return (
    <Modal
      {...args}
      modalPadding={args.modalPadding}
      modalHeight={args.modalHeight}
    >
      <Typography>{args.children as string}</Typography>
    </Modal>
  );
};

export const BasicModal = Template.bind({});

BasicModal.storyName = 'Basic Modal';
BasicModal.args = {
  children:
    'The Modal component is a basic way to present content above an enclosing view.',
  animationType: 'none',
  modalPadding: 20,
  modalHeight: 500,
  visible: true,
};
