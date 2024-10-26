import React from 'react';
import { Box, Flexbox, Textarea, Typography } from '../atom';
import { TextareaProps } from '../atom/Textarea';
import { Border } from 'src/@types/unit';
import PALETTE from 'src/assets/theme/colors/palettes';
interface CountingTextareaProps extends TextareaProps {
  onChange: (text: string) => void;
  value: string;
  border?: Border;
}

const CountingTextarea = ({
  placeholder = '',
  maxLength,
  onChange,
  value,
  border = `1 solid ${PALETTE.gray['200']}`,
}: CountingTextareaProps) => {
  return (
    <Box border={border} borderRadius={8}>
      <Textarea
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChangeText={onChange}
        style={{ borderWidth: 0, color: PALETTE.gray['300'] }}
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
