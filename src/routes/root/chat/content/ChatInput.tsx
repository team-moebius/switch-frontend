import React from 'react';
import { LengthElement } from 'src/@types/unit';
import { Box, Flexbox, TextInput } from 'src/components/atom';
import PressableIcon from 'src/components/molecule/PressableIcon';

interface ChatInputProps {
  onChangeText: (value: string) => void;
  value: string;
  placeholder?: string;
  width: LengthElement;
}

const ChatInput = ({
  onChangeText,
  value = '',
  width = '100%',
  placeholder = '',
}: ChatInputProps) => {
  return (
    <Box width={'100%'} border={'1 solid #cccccc'} borderRadius={4}>
      <Flexbox width={'100%'} flexDirection={'row'} alignItems={'center'}>
        <Box width={'auto'} ml={'1%'}>
          <PressableIcon
            name={'image-outline'}
            size={24}
            onPress={() => window.alert('upload picture')}
          />
        </Box>
        <TextInput
          name={'chatInput'}
          width={width}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          style={{ borderWidth: 0 }}
        />
        <Box width={'auto'} mr={'2%'}>
          <PressableIcon
            name={'paper-plane-outline'}
            size={24}
            onPress={() => window.alert('send message')}
          />
        </Box>
      </Flexbox>
    </Box>
  );
};

export { ChatInput, ChatInputProps };
