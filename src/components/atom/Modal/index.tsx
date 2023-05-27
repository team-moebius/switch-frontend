import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import ReactNativeModal, {
  ModalProps as ReactNativeModalProps,
} from 'react-native-modal';
import { LengthElement } from 'src/@types/unit';
import Box from '../Box';

const animationModeMap: Record<string, Partial<ReactNativeModalProps>> = {
  slideUp: {
    animationIn: 'slideInUp',
    animationOut: 'slideOutDown',
  },
  slideDown: {
    animationIn: 'slideInDown',
    animationOut: 'slideOutUp',
  },
} as const;
type Mode = keyof typeof animationModeMap;

interface ModalProps {
  mode?: Mode;
  visible: boolean;
  width?: LengthElement;
  height?: LengthElement;
  position?: Position;
  onPressBack?: () => void;
  children?: ReactNode;
}

const Modal = ({
  visible,
  width = '100%',
  height = '80%',
  position = 'bottom',
  mode = 'slideUp',
  onPressBack,
  children,
}: ModalProps) => {
  return (
    <ReactNativeModal
      {...animationModeMap[mode]}
      isVisible={visible}
      onBackdropPress={onPressBack}
      style={[defaultStyle, positionStyle[position], { width, height }]}
    >
      <Box backgroundColor={'white'} height={'80%'} width={'100%'}>
        {children}
      </Box>
    </ReactNativeModal>
  );
};
const { default: defaultStyle } = StyleSheet.create({
  default: {
    padding: 0,
    margin: 0,
  },
});

const positionStyle = StyleSheet.create({
  center: { justifyContent: 'center', alignItems: 'center' },
  top: { justifyContent: 'flex-start' },
  bottom: {
    justifyContent: 'flex-end',
  },
});
type Position = keyof typeof positionStyle;

export default Modal;
