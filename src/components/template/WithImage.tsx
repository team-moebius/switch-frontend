import { ReactNode } from 'react';
import { Flexbox, Image, Typography } from '../atom';
import { ImageProps } from '../atom/Image';
import { StyleSheet } from 'react-native';
import { FlexAlign, LengthElement } from 'src/@types/unit';
import { FONT_SIZE } from 'src/assets/theme/base';

type modifiedImageProps = {
  imageWidth?: ImageProps['width'];
  imageHeight?: ImageProps['height'];
  imageResizeMode?: ImageProps['resizeMode'];
};

interface ContainerLayout {
  maxWidth?: LengthElement;
  width?: LengthElement;
  flex?: number;
}

interface WithImageProps extends modifiedImageProps {
  src: string;
  text?: string;
  renderItem?: ReactNode;
  fontSize?: keyof typeof fontSizeStyle;
  childDirection?: keyof typeof flexDirectionStyle;
  cardDirection?: keyof typeof flexDirectionStyle;
  layoutStyle?: {
    mostOutlineLayout?: ContainerLayout;
    titleContainerLayout?: ContainerLayout & { alignSelf?: FlexAlign };
    textBoxLayout?: ContainerLayout;
  };
}

export const fontSizeStyle = StyleSheet.create({
  cardList: {
    fontSize: FONT_SIZE.normal,
  },
  switchList: {
    fontSize: FONT_SIZE.bigger,
  },
});

export const flexDirectionStyle = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  columnCentral: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const WithImage = ({
  src = '',
  text = '',
  renderItem,
  imageWidth = 100,
  imageHeight = 70,
  imageResizeMode = 'center',
  fontSize = 'cardList',
  childDirection = 'row',
  cardDirection = 'row',
  layoutStyle = {
    mostOutlineLayout: {
      width: '100%',
    },
    titleContainerLayout: {
      flex: 1,
    },
    textBoxLayout: {
      flex: 1,
    },
  },
}: WithImageProps) => {
  return (
    <Flexbox
      {...flexDirectionStyle[cardDirection]}
      gap={10}
      {...layoutStyle.mostOutlineLayout}
    >
      <Image
        width={imageWidth}
        height={imageHeight}
        src={src}
        resizeMode={imageResizeMode}
      />
      <Flexbox.Item {...layoutStyle.titleContainerLayout}>
        <Flexbox {...flexDirectionStyle[childDirection]} gap={10}>
          <Flexbox.Item {...layoutStyle.textBoxLayout}>
            <Typography
              {...fontSizeStyle[fontSize]}
              numberOfLines={6}
              ellipsizeMode={'tail'}
            >
              {text}
            </Typography>
          </Flexbox.Item>
          {renderItem}
        </Flexbox>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { WithImage, WithImageProps };
