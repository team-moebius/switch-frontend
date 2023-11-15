import { Flexbox, Typography } from 'src/components/atom';
import { ScrollView } from 'react-native';
import { ImageItem } from './ImageItem';
import { ImagePickerButton } from './ImagePickerButton';

// Image API 명세 확인 후 구체적인 작업 필요.
interface ImageUploaderProps {
  images: Array<string>;
  onAdd: () => void;
  onDeleteItem?: (value: string, index?: number) => void;
}

const ImageUploader = ({ images, onAdd, onDeleteItem }: ImageUploaderProps) => {
  return (
    <Flexbox width={'100%'} height={'15%'} alignItems='center' gap={10}>
      <ImagePickerButton onAdd={onAdd}>
        <Typography fontSize={14}>{'5/5'}</Typography>
      </ImagePickerButton>
      <Flexbox
        height={'100%'}
        width={'auto'}
        justifyContent={'center'}
        alignItems='center'
        gap={10}
      >
        <ScrollView horizontal>
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
