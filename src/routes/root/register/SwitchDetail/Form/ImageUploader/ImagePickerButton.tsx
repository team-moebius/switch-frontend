import React, { ReactNode } from 'react';
import { Pressable } from 'react-native';
import { Color, LengthElement } from 'src/@types/unit';
import { Box, Flexbox, Icon } from 'src/components/atom';

interface ImagePickerButtonProps {
  onAdd: () => void;
  children?: ReactNode;
  backgroundColor?: Color;
  width?: LengthElement;
  height?: LengthElement;
}

const ImagePickerButton = ({
  onAdd,
  width = 70,
  height = 70,
  backgroundColor = '#cdcaca',
  children,
}: ImagePickerButtonProps) => {
  return (
    <Flexbox width={'auto'}>
      <Pressable onPress={onAdd}>
        <Box width={width} height={height} backgroundColor={backgroundColor}>
          <Box width={'auto'} margin={'auto'}>
            <Icon name={'camera'} size={24} />
          </Box>
          {children && (
            <Box width={'auto'} margin={'auto'}>
              {children}
            </Box>
          )}
        </Box>
      </Pressable>
    </Flexbox>
  );
};

export { ImagePickerButton };
