import { ReactElement, useContext, useMemo } from 'react';
import { FlatList, Pressable } from 'react-native';
import { ThemeContext } from 'src/context/theme';
import { Box, Flexbox, Icon, Typography } from '../atom';

interface NumberPadProps {
  maxLength: number;
  value: string;
  onChange?: (value: string) => void;
  // onDeleteClick?: () => void;
  // onNumberClick?: (value: number) => void;
}

type PadValue = number | 'delete' | null;

const Pad = ({
  size = 40,
  value,
  onClick,
}: {
  size?: number;
  value: PadValue;
  onClick: () => void;
}) => {
  const label = useMemo(() => {
    switch (typeof value) {
      case 'number':
        return (
          <Typography fontSize={16} color={'#000000'}>{`${value}`}</Typography>
        );
      case typeof null:
        return null;
      case 'string':
        if (value === 'delete') {
          return <Icon name={'arrow-back'} />;
        }
    }
  }, [value]);

  return (
    <Pressable onPress={onClick}>
      <Flexbox
        backgroundColor={'white'}
        alignItems={'center'}
        justifyContent={'center'}
        width={size}
        height={size}
      >
        {label}
      </Flexbox>
    </Pressable>
  );
};

interface DotProps {
  size?: number;
  filled: boolean;
}

const Dot = ({ size = 16, filled }: DotProps) => {
  const { color } = useContext(ThemeContext);
  return (
    <Box
      backgroundColor={filled ? color.primary[100] : color.neutral[200]}
      borderRadius={'50%'}
      width={size}
      height={size}
    >
      {' '}
    </Box>
  );
};

const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, 'delete'] as const;

const NumberPad = ({ value, maxLength, onChange }: NumberPadProps) => {
  const dots = useMemo(() => {
    const children: Array<ReactElement> = [];
    for (let i = 0; i < maxLength; i++) {
      children.push(<Dot key={i} filled={i < value.length} size={10} />);
    }
    return children;
  }, [value, maxLength]);

  return (
    <Flexbox
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={40}
    >
      <Flexbox.Item>
        <Flexbox flexDirection={'row'} gap={10}>
          {dots}
        </Flexbox>
      </Flexbox.Item>
      <Flexbox.Item>
        <FlatList<PadValue>
          data={NUMS}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <Pad
                size={82}
                value={item}
                onClick={() => {
                  if (onChange) {
                    if (item === 'delete') {
                      onChange(value.slice(0, value.length - 1));
                    } else if (typeof item === 'number') {
                      onChange(`${value}${item}`);
                    }
                  }
                }}
              />
            );
          }}
        />
      </Flexbox.Item>
    </Flexbox>
  );
};

export { NumberPad };