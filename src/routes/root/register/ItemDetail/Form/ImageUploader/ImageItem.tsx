import { Color } from 'src/@types/unit';
import { Box, Image } from 'src/components/atom';
import { PressableIcon } from 'src/components/molecule/PressableIcon';

interface ImageItemProps {
  src: string;
  onClose?: () => void;
  iconColor?: Color;
}
const ImageItem = ({ src, onClose, iconColor }: ImageItemProps) => {
  return (
    <Box position={'relative'} width={70} height={70}>
      <Image src={src} width={'100%'} height={'100%'} />
      {onClose && (
        <Box position={'absolute'} width={'auto'} top={0} left={50}>
          <PressableIcon
            size={20}
            name={'close'}
            onPress={onClose}
            color={iconColor}
          />
        </Box>
      )}
    </Box>
  );
};

export { ImageItem };
