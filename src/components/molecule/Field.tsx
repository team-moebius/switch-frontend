import React from 'react';

import {
  Select,
  TextInput,
  Textarea,
  Toggle,
  Check,
  Radio,
} from 'src/components/atom';

import { WithLabel } from 'src/components/template';
import { CheckProps } from '../atom/Check';
import { RadioProps } from '../atom/Radio';
import { SelectProps } from '../atom/Select';
import { TextareaProps } from '../atom/Textarea';
import { InputProps } from '../atom/TextInput';
import { ToggleProps } from '../atom/Toggle';
import { WithLabelProps } from '../template/WithLabel';
import { CountingTextarea, CountingTextareaProps } from './CountingTextarea';

type FieldPropsType =
  | InputProps
  | RadioProps
  | CheckProps
  | SelectProps
  | TextareaProps
  | ToggleProps;

type FieldStruct<
  InputProps extends FieldPropsType,
  ValueKey extends keyof InputProps,
  OmitProps extends Array<keyof InputProps> = []
> = {
  value: InputProps[ValueKey];
  onChange: (next: { [name: string]: InputProps[ValueKey] }) => void;
} & Omit<InputProps, ValueKey | OmitProps[number]>;

type TextInputField = {
  fieldType: 'textInput';
} & FieldStruct<InputProps, 'value', ['onChangeText']>;
type CheckField = {
  fieldType: 'check';
} & FieldStruct<CheckProps, 'checked', ['onPress']>;

type SelectField = {
  fieldType: 'select';
} & FieldStruct<SelectProps, 'value', ['onPressItem']>;

type RadioField = {
  fieldType: 'radio';
} & FieldStruct<RadioProps, 'checked', ['onPress']>;

type TextareaField = {
  fieldType: 'textarea';
} & FieldStruct<TextareaProps, 'value', ['onChangeText']>;

type ToggleField = {
  fieldType: 'toggle';
} & FieldStruct<ToggleProps, 'value', ['handleOnPress']>;

type CountingTextareaField = {
  fieldType: 'countingTextarea';
} & FieldStruct<CountingTextareaProps, 'value', ['onChange']>;

type Field =
  | TextInputField
  | CheckField
  | SelectField
  | RadioField
  | TextareaField
  | ToggleField
  | CountingTextareaField;

type FieldProps = Field & { name: string } & Omit<
    WithLabelProps,
    'onPress' | 'chilren'
  >;

//TODO: Field 의 기본 설정값을 조금 더 구체화할 필요가 있을 것 같습니다.
const Field = ({
  fieldType,
  width,
  name,
  height,
  label = '',
  labelAlign = 'left',
  labelPosition = 'left',
  value,
  onChange,
  ...props
}: FieldProps) => {
  const fieldInputRenderer = () => {
    switch (fieldType) {
      case 'check':
        return (
          <Check
            {...props}
            checked={value}
            onPress={() => {
              onChange({ [name]: !value });
            }}
          />
        );
      case 'radio':
        return (
          //TODO: Radio 를 추후 RadioGroup 으로 변경해야할 것 같습니다.
          <Radio
            {...props}
            checked={value}
            onPress={() => {
              onChange({ [name]: !value });
            }}
          />
        );
      case 'select':
        return (
          // @ts-expect-error : generic 타입 정의에 의해, Select 의 options 프로퍼티의 타입 또한 추론되지만, 아래 라인에서는 제대로 인지하지 못하는 듯합니다.
          <Select
            {...props}
            value={value}
            onPressItem={(v) => {
              onChange({ [name]: v });
            }}
          />
        );
      case 'textInput':
        return (
          <TextInput
            {...props}
            width={width}
            name={name}
            value={value}
            onChangeText={(text) => {
              onChange({ [name]: text });
            }}
          />
        );
      case 'textarea':
        return (
          <Textarea
            {...props}
            value={value}
            onChangeText={(text) => {
              onChange({ [name]: text });
            }}
          />
        );
      case 'toggle':
        return (
          <Toggle
            {...props}
            value={value}
            handleOnPress={() => {
              onChange({ [name]: !value });
            }}
          />
        );
      case 'countingTextarea':
        return (
          <CountingTextarea
            {...props}
            value={value}
            onChange={(value) => {
              onChange({ [name]: value });
            }}
          />
        );
    }
  };
  return (
    <WithLabel
      label={label}
      labelAlign={labelAlign}
      labelPosition={labelPosition}
      width={width}
      height={height}
    >
      {fieldInputRenderer()}
    </WithLabel>
  );
};

export { Field, FieldProps };
