import { Pressable } from 'react-native';
import { Box, Icon, Image } from 'src/components/atom';

interface ImageItemProps {
  src: string;
  onClose?: () => void;
}
const ImageItem = ({ src, onClose }: ImageItemProps) => {
  return (
    <Box position={'relative'} width={70} height={70}>
      <Image src={src} width={'100%'} height={'100%'} />
      <Box position={'absolute'} width={'auto'} top={0} left={50}>
        <Pressable onPress={onClose}>
          <Icon size={20} name={'close'} />
        </Pressable>
      </Box>
    </Box>
  );
};

export { ImageItem };
