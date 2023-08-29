import React, { ReactElement } from 'react';
import { Flexbox } from '../atom';
import { FlexAlign, LengthElement, Margin } from 'src/@types/unit';

interface WrapperStyle {
  align?: FlexAlign;
  pt?: number;
}

interface CardProps {
  width?: LengthElement;
  margin?: Margin;
  headerWrapperStyle?: WrapperStyle;
  contentWrapperStyle?: WrapperStyle;
  footerWrapperStyle?: WrapperStyle;
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
  gap,
  header,
  content,
  footer,
}: CardProps) => {
  return (
    <Flexbox width={width} margin={margin}>
      <Flexbox.Item>
        <Flexbox
          alignItems={headerWrapperStyle?.align}
          pt={headerWrapperStyle?.pt}
        >
          {header}
        </Flexbox>
        <Flexbox
          alignItems={contentWrapperStyle?.align}
          pt={contentWrapperStyle?.pt}
        >
          {content}
        </Flexbox>
        <Flexbox
          alignItems={footerWrapperStyle?.align}
          pt={footerWrapperStyle?.pt}
        >
          {footer}
        </Flexbox>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { Card, CardProps };
