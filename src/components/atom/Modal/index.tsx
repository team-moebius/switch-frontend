import React, { ReactNode } from 'react';
import { Modal as ModalBox, StyleSheet } from 'react-native';
import Box from '../Box';

interface ModalProps {
  visible: boolean;
  children: ReactNode;
  animationType?: 'slide' | 'none' | 'fade' | undefined;
  modalPadding?: number;
  modalHeight?: number;
}

const Modal = ({
  visible,
  animationType,
  children,
  modalPadding,
  modalHeight,
}: ModalProps) => {
  return (
    <ModalBox visible={visible} animationType={animationType}>
      <Box
        style={style.defaultModal}
        padding={modalPadding}
        height={modalHeight}
      >
        {children}
      </Box>
    </ModalBox>
  );
};

export default Modal;

const style = StyleSheet.create({
  defaultModal: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
