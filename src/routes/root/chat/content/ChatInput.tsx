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
        {left && (
          <Box width={'auto'} pl={10} pr={10}>
            {left}
          </Box>
        )}
        <TextInput
          name={'chatInput'}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          style={{ borderWidth: 0 }}
        />
        {right && (
          <Box width={'auto'} pl={10} pr={10}>
            {right}
          </Box>
        )}
      </Flexbox>
    </Box>
  );
};

export { ChatInput, ChatInputProps };
