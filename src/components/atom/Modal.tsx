import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import ReactNativeModal, {
  ModalProps as ReactNativeModalProps,
} from 'react-native-modal';
import { Color, LengthElement } from 'src/@types/unit';
import { Box } from './Box';

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
type Position = keyof typeof positionStyle;

interface ModalProps {
  mode?: Mode;
  visible: boolean;
  backgroundColor?: Color | string;
  width?: LengthElement;
  height?: LengthElement;
  position?: Position;
  onPressBack?: () => void;
  children?: ReactNode;
}

const Modal = ({
  visible,
  backgroundColor = 'white',
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
      style={[defaultStyle, positionStyle[position]]}
      backdropTransitionOutTiming={0}
    >
      <Box backgroundColor={backgroundColor} height={height} width={width}>
        {children}
      </Box>
    </ReactNativeModal>
  );
};

export { Modal };
