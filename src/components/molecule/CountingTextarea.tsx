import React from 'react';
import { Box, Flexbox, Textarea, Typography } from '../atom';
import { TextareaProps } from '../atom/Textarea';

interface CountingTextareaProps extends TextareaProps {
  onChange: (text: string) => void;
  value: string;
}

const CountingTextarea = ({
  placeholder = '',
  maxLength,
  onChange,
  value,
}: CountingTextareaProps) => {
  return (
    <Box border={'1 solid #979797'} padding={10} borderRadius={8}>
      <Textarea
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChangeText={onChange}
        style={{ borderWidth: 0 }}
      />
      <Flexbox justifyContent='flex-end' pt={10}>
        <Flexbox.Item>
          <Typography fontSize={12}>
            {value.length + '/' + maxLength}
          </Typography>
        </Flexbox.Item>
      </Flexbox>
    </Box>
  );
};

export { CountingTextarea, CountingTextareaProps };
