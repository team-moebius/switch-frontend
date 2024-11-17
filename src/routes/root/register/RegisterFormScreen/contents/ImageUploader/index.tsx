import { Flexbox, Icon, Typography } from 'src/components/atom';
import { Pressable, ScrollView } from 'react-native';
import { ImageItem } from './ImageItem';
import { COLORS, FONT_SIZE, PADDING } from 'src/assets/theme/base';

// Image API 명세 확인 후 구체적인 작업 필요.
interface ImageUploaderProps {
  images: Array<string>;
  onClickAdd: () => void;
  onDeleteItem?: (value: string, index?: number) => void;
  screenWidth: number;
}

const ImageUploader = ({
  images,
  onClickAdd,
  onDeleteItem,
  screenWidth,
}: ImageUploaderProps) => {
  return (
    <Flexbox alignItems='center' gap={10}>
      <Pressable onPress={onClickAdd}>
        <Flexbox
          width={70}
          height={70}
          backgroundColor={COLORS.neutral.gray}
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
        >
          <Icon name={'camera'} size={24} />
          <Typography
            fontSize={FONT_SIZE.smaller}
          >{`${images.length}/5`}</Typography>
        </Flexbox>
      </Pressable>
      <Flexbox
        width={
          (screenWidth - PADDING.wrapper.horizontal * 2 - 70 - 10) as number
        }
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
