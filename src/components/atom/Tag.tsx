import { Pressable } from 'react-native';
import { Color } from 'src/@types/unit';
import Flexbox from './Flexbox';
import { Typography } from './Typograph';
import PALETTE from 'src/assets/theme/colors/palettes';
import { FONT_SIZE } from 'src/assets/theme/base';

interface TagProps {
  color: string;
  children: string;
  onPress?: () => void;
  backgroundColor: Color;
  disabled?: boolean;
}

const Tag = ({
  color,
  children,
  backgroundColor = PALETTE.purple['100'],
  onPress,
  disabled,
}: TagProps) => {
  return (
    <Flexbox
      height={20}
      pl={6}
      pr={6}
      borderRadius={15}
      backgroundColor={backgroundColor}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Pressable onPress={onPress} disabled={disabled}>
        <Typography fontSize={FONT_SIZE.smaller} color={color}>
          {children}
        </Typography>
      </Pressable>
    </Flexbox>
  );
};

export { Tag, TagProps };
