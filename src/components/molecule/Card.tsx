import React, { ReactElement } from 'react';
import { Flexbox } from '../atom';
import { FlexAlign, LengthElement, Margin } from 'src/@types/unit';

type AlignSelf = FlexAlign | 'auto';

interface CardProps {
  width?: LengthElement;
  margin?: Margin;
  headerAlign?: AlignSelf;
  contentAlign?: AlignSelf;
  footerAlign?: AlignSelf;
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
  headerAlign,
  contentAlign,
  footerAlign,
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
          <Flexbox.Item alignSelf={headerAlign}>{header}</Flexbox.Item>
          <Flexbox.Item alignSelf={contentAlign} pt={contentPt}>
            {content}
          </Flexbox.Item>
          <Flexbox.Item alignSelf={footerAlign} pt={footerPt}>
            {footer}
          </Flexbox.Item>
        </Flexbox>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { Card, CardProps };
