import { Box, Image } from 'src/components/atom';
import { PressableIcon } from 'src/components/molecule/PressableIcon';

interface ImageItemProps {
  src: string;
  onClose?: () => void;
}
const ImageItem = ({ src, onClose }: ImageItemProps) => {
  return (
    <Box position={'relative'} width={70} height={70}>
      <Image src={src} width={'100%'} height={'100%'} />
      <Box position={'absolute'} width={'auto'} top={0} left={50}>
        {onClose && (
          <PressableIcon size={20} name={'close'} onPress={onClose} />
        )}
      </Box>
    </Box>
  );
};

export { ImageItem };
