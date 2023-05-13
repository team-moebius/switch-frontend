import React, { useState } from 'react';
import { Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { TypographyProps } from '../../atom/Typography';
import { Box, Icon, Modal, Typography } from 'src/components/atom';
import { BoxProps } from 'src/components/atom/Box';

enum modalAnimation {
  SLIDE = 'slide',
  FADE = 'fade',
  NONE = 'none',
}

interface SelectProps
  extends Omit<TypographyProps, 'children'>,
    Omit<BoxProps, 'children'> {
  modalVisible: boolean;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  options: string[];
  padding: number;
  modalPadding: number;
  optionHeight: number;
  optionWidth: number;
}

const Select = ({
  options,
  padding,
  modalPadding,
  fontSize,
  fontColor,
  optionHeight,
  optionWidth,
  border,
}: SelectProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Box
          height={optionHeight}
          width={optionWidth}
          border={border}
          style={style.defaultOption}
        >
          <Typography fontSize={fontSize} fontColor={fontColor}>
            {selectedOption}
          </Typography>
          <Icon name='chevron-down-outline' />
        </Box>
      </TouchableOpacity>
      <Modal
        animationType={modalAnimation.SLIDE}
        visible={modalVisible}
        modalPadding={modalPadding}
      >
        {options.map((option) => (
          <Pressable
            key={option}
            onPress={() => {
              handleSelectOption(option);
            }}
          >
            <Box padding={padding}>
              <Typography fontSize={fontSize} fontColor={fontColor}>
                {option}
              </Typography>
            </Box>
          </Pressable>
        ))}
      </Modal>
    </>
  );
};

export default Select;

const style = StyleSheet.create({
  defaultOption: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
