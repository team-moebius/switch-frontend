import { ReactNode } from 'react';
import { Box, Flexbox, Textarea } from 'src/components/atom';

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
        <Textarea
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          maxLength={300}
          style={{
            borderWidth: 0,
            height: 'auto',
            backgroundColor: 'transparent',
          }}
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
