import React, { ReactNode } from 'react';
import { LengthElement } from 'src/@types/unit';
import { Box, Flexbox, TextInput } from 'src/components/atom';

interface ChatInputProps {
  left?: ReactNode;
  right?: ReactNode;
  onChangeText: (value: string) => void;
  value: string;
  placeholder?: string;
}

const ChatInput = ({
  left,
  right,
  onChangeText,
  value = '',
  placeholder = '',
}: ChatInputProps) => {
  return (
    <Box width={'100%'} border={'1 solid #cccccc'} borderRadius={4}>
      <Flexbox width={'100%'} flexDirection={'row'} alignItems={'center'}>
        <Box width={'auto'} ml={5}>
          {left}
        </Box>
        <TextInput
          name={'chatInput'}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          style={{ borderWidth: 0 }}
        />
        <Box width={'auto'} mr={5}>
          {right}
        </Box>
      </Flexbox>
    </Box>
  );
};

export { ChatInput, ChatInputProps };
