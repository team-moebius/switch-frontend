import React, { ReactElement } from 'react';
import { Flexbox } from '../atom';
import { FlexAlign, LengthElement, Margin } from 'src/@types/unit';

type AlignSelf = FlexAlign | 'auto';

interface WrapperStyle {
  align?: AlignSelf;
}

interface CardProps {
  width?: LengthElement;
  margin?: Margin;
  headerWrapperStyle?: WrapperStyle;
  contentWrapperStyle?: WrapperStyle;
  footerWrapperStyle?: WrapperStyle;
  contentPt?: number;
  footerPt?: number;
  gap?: number;
  header?: ReactElement;
  content?: ReactElement;
  footer?: ReactElement;
}

const Card = ({
  width,
  margin,
  headerWrapperStyle,
  contentWrapperStyle,
  footerWrapperStyle,
  contentPt,
  footerPt,
  gap,
  header,
  content,
  footer,
}: CardProps) => {
  return (
    <Flexbox width={width} margin={margin}>
      <Flexbox.Item flex={1}>
        <Flexbox flexDirection='column' gap={gap}>
          <Flexbox.Item alignSelf={headerWrapperStyle?.align}>
            {header}
          </Flexbox.Item>
          <Flexbox.Item alignSelf={contentWrapperStyle?.align} pt={contentPt}>
            {content}
          </Flexbox.Item>
          <Flexbox.Item alignSelf={footerWrapperStyle?.align} pt={footerPt}>
            {footer}
          </Flexbox.Item>
        </Flexbox>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { Card, CardProps };
