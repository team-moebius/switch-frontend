import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Pressable } from 'react-native';
import { Color } from 'src/@types/unit';
import { Box, FlexBox, Icon, Modal, Typography } from 'src/components/atom';

type OptionValue = string | number;
type OptionProps<T = OptionValue> = Omit<OptionObject<T>, 'render'> & {
  selected: boolean;
};
type OptionRenderer<T = OptionValue> = FunctionComponent<OptionProps<T>>;

type OptionObject<T> = {
  value: T;
  disabled?: boolean;
  render?: OptionRenderer<T>;
};

type Option<T = OptionValue> = T | OptionObject<T>;

const BasicOption = ({ value, selected, disabled }: OptionProps) => {
  const [fontColor, backgroundColor] = useMemo((): [Color, Color] => {
    if (selected) {
      return ['white', 'blue'];
    } else if (disabled) {
      return ['gray', 'white'];
    } else {
      return ['black', 'white'];
    }
  }, [selected, disabled]);
  return (
    <FlexBox
      backgroundColor={backgroundColor}
      justifyContent={'flex-start'}
      alignItems={'center'}
      height={60}
      padding={16}
    >
      <FlexBox.Item flex={1}>
        <Typography fontSize={14} color={fontColor}>
          {value}
        </Typography>
      </FlexBox.Item>
    </FlexBox>
  );
};

interface SelectProps<T = OptionValue> {
  options: T[] | Option<T>[];
  onPressItem: (value: T) => void;
  disabled?: boolean;
  value: T;
}

const useToggle = (defaultValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(defaultValue);
  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);
  return [value, toggle];
};
const Select = ({ value, disabled, onPressItem, options }: SelectProps) => {
  const [modalVisible, toggleModal] = useToggle(false);

  return (
    <>
      <Pressable onPress={!disabled ? toggleModal : null}>
        <FlexBox
          height={24}
          border={'1 solid black'}
          borderRadius={4}
          width={120}
          pt={4}
          pb={4}
          pl={8}
          pr={8}
          alignItems={'center'}
        >
          <FlexBox.Item flex={1}>
            <Typography fontSize={14} color={disabled ? 'black' : 'gray'}>
              {value}
            </Typography>
          </FlexBox.Item>
          <Box width={10}>
            <Icon
              name={
                modalVisible ? 'chevron-up-outline' : 'chevron-down-outline'
              }
            />
          </Box>
        </FlexBox>
      </Pressable>
      <Modal visible={modalVisible} onPressBack={toggleModal}>
        {options.map((option) => {
          const {
            value: optionValue,
            disabled: optionDisabled = false,
            InnerCommponent,
          } = typeof option === 'object'
            ? {
                ...option,
                InnerCommponent: option?.render || BasicOption,
              }
            : {
                InnerCommponent: BasicOption,
                value: option,
              };
          return (
            <Pressable
              key={optionValue}
              onPress={() => {
                if (!optionDisabled) {
                  onPressItem(optionValue);
                  toggleModal();
                }
              }}
            >
              <InnerCommponent
                value={optionValue}
                disabled={disabled}
                selected={optionValue === value}
              />
            </Pressable>
          );
        })}
      </Modal>
    </>
  );
};

export default Select;
