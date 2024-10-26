import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Pressable, ScrollView } from 'react-native';
import { Color } from 'src/@types/unit';
import { Box } from './Box';
import Flexbox from './Flexbox';
import { Icon } from './Icon';
import { Modal } from './Modal';
import { Typography } from './Typograph';
import { COLORS, FONT_SIZE } from 'src/assets/theme/base';

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
      return [COLORS.neutral.white, COLORS.success];
    } else if (disabled) {
      return [COLORS.neutral.gray, COLORS.neutral.white];
    } else {
      return [COLORS.neutral.black, COLORS.neutral.white];
    }
  }, [selected, disabled]);
  return (
    <Flexbox
      backgroundColor={backgroundColor}
      justifyContent={'flex-start'}
      alignItems={'center'}
      height={60}
      padding={16}
    >
      <Flexbox.Item flex={1}>
        <Typography fontSize={FONT_SIZE.normal} color={fontColor}>
          {value}
        </Typography>
      </Flexbox.Item>
    </Flexbox>
  );
};

interface SelectProps<T = OptionValue> {
  options: Array<Option<T>>;
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
        <Flexbox
          height={24}
          border={'1 solid black'}
          borderRadius={4}
          width={'auto'}
          pl={8}
          pr={8}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Flexbox.Item>
            <Typography
              fontSize={FONT_SIZE.normal}
              color={disabled ? 'black' : 'gray'}
            >
              {value}
            </Typography>
          </Flexbox.Item>
          <Box width={10} ml={5}>
            <Icon
              name={
                modalVisible ? 'chevron-up-outline' : 'chevron-down-outline'
              }
            />
          </Box>
        </Flexbox>
      </Pressable>
      <Modal visible={modalVisible} onPressBack={toggleModal}>
        <ScrollView>
          {options.map((option) => {
            const {
              value: optionValue,
              disabled: optionDisabled = false,
              InnerComponent,
            } = typeof option === 'object'
              ? {
                  ...option,
                  InnerComponent: option?.render || BasicOption,
                }
              : {
                  InnerComponent: BasicOption,
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
                <InnerComponent
                  value={optionValue}
                  disabled={disabled}
                  selected={optionValue === value}
                />
              </Pressable>
            );
          })}
        </ScrollView>
      </Modal>
    </>
  );
};

export { Select, SelectProps };
