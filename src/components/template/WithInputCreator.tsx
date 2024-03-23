import React, { ReactNode } from 'react';

import { Flexbox, TextInput } from '../atom';
import { InputProps } from '../atom/TextInput';

import { FlexWrap, LengthElement } from 'src/@types/unit';
import { StyleSheet } from 'react-native';

interface WithInputCreatorProps extends Omit<InputProps, 'width'> {
  items: ReactNode;
  itemsWrap?: FlexWrap;
  functionalElement?: ReactNode;
  width: LengthElement;
  inputPosition?: keyof typeof inputPositionStyle;
  itemsPosition?: keyof typeof itemsPositionStyle;
}

const inputPositionStyle = StyleSheet.create({
  top: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  right: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
});

const itemsPositionStyle = StyleSheet.create({
  top: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  right: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
});

const WithInputCreator = ({
  items,
  name,
  onChangeText,
  placeholder,
  value,
  width,
  disabled,
  itemsWrap = 'wrap',
  functionalElement,
  inputPosition = 'top',
  itemsPosition = 'left',
  onSubmitEditing,
}: WithInputCreatorProps) => {
  return (
    <Flexbox width={width} {...inputPositionStyle[inputPosition]} gap={5}>
      <Flexbox.Item alignSelf='stretch' flex={1}>
        <TextInput
          name={name}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          width={'100%'}
          disabled={disabled}
          style={{ borderWidth: 0 }}
          onSubmitEditing={onSubmitEditing}
        />
      </Flexbox.Item>
      <Flexbox.Item alignSelf='stretch'>
        <Flexbox {...itemsPositionStyle[itemsPosition]} gap={5}>
          <Flexbox.Item flex={1}>
            <Flexbox gap={5} flexWrap={itemsWrap}>
              {items}
            </Flexbox>
          </Flexbox.Item>
          {functionalElement ? (
            <Flexbox.Item>{functionalElement}</Flexbox.Item>
          ) : null}
        </Flexbox>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { WithInputCreator, WithInputCreatorProps };
