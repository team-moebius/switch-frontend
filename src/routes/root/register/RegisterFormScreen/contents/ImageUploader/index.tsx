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
      <Pressable onPress={onAdd}>
        <Flexbox
          width={70}
          height={70}
          backgroundColor={'#cdcaca'}
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
        >
          <Icon name={'camera'} size={24} />
          <Typography fontSize={14}>{`${images.length}/5`}</Typography>
        </Flexbox>
      </Pressable>

      <Flexbox
        width={(screenWidth - 100) as number}
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
