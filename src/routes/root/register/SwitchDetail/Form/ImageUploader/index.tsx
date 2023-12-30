import { Box, Flexbox, Icon, Typography } from 'src/components/atom';
import { Pressable, ScrollView } from 'react-native';
import { ImageItem } from './ImageItem';

// Image API 명세 확인 후 구체적인 작업 필요.
interface ImageUploaderProps {
  images: Array<string>;
  onAdd: () => void;
  onDeleteItem?: (value: string, index?: number) => void;
  screenWidth: number;
}

const ImageUploader = ({
  images,
  onAdd,
  onDeleteItem,
  screenWidth,
}: ImageUploaderProps) => {
  return (
    <Flexbox width={'100%'} alignItems='center' gap={10}>
      <Flexbox width={'auto'}>
        <Pressable onPress={onAdd}>
          <Box
            position={'relative'}
            width={70}
            height={70}
            backgroundColor={'#cdcaca'}
          >
            <Box
              position={'absolute'}
              width={'auto'}
              top={'20%'}
              left={'33.5%'}
            >
              <Icon name={'camera'} size={24} />
            </Box>
            <Box
              position={'absolute'}
              width={'auto'}
              bottom={'20%'}
              left={'35%'}
            >
              <Typography fontSize={14}>{'5/5'}</Typography>
            </Box>
          </Box>
        </Pressable>
      </Flexbox>
      <Flexbox
        width={screenWidth - 100}
        justifyContent={'center'}
        alignItems='center'
        gap={10}
      >
        <ScrollView horizontal nestedScrollEnabled>
          {images.map((src, i) => (
            <ImageItem
              key={`${src}_${i}`}
              src={src}
              onClose={() => {
                onDeleteItem && onDeleteItem(src, i);
              }}
            />
          ))}
        </ScrollView>
      </Flexbox>
    </Flexbox>
  );
};

export { ImageUploader };
