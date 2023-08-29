import React, { ReactElement } from 'react';
import { Flexbox } from '../atom';
import { JustifyContent } from 'src/@types/unit';

interface WrapperStyle {
  justify?: JustifyContent;
  pt?: number;
}

interface CardProps {
  headerWrapperStyle?: WrapperStyle;
  contentWrapperStyle?: WrapperStyle;
  footerWrapperStyle?: WrapperStyle;
  header?: ReactElement;
  content?: ReactElement;
  footer?: ReactElement;
}

const Card = ({
  headerWrapperStyle,
  contentWrapperStyle,
  footerWrapperStyle,
  header,
  content,
  footer,
}: CardProps) => {
  return (
    <Flexbox>
      <Flexbox.Item width={'100%'}>
        <Flexbox
          justifyContent={headerWrapperStyle?.justify}
          pt={headerWrapperStyle?.pt}
        >
          {header}
        </Flexbox>
        <Flexbox
          justifyContent={contentWrapperStyle?.justify}
          pt={contentWrapperStyle?.pt}
        >
          {content}
        </Flexbox>
        <Flexbox
          justifyContent={footerWrapperStyle?.justify}
          pt={footerWrapperStyle?.pt}
        >
          {footer}
        </Flexbox>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { Card, CardProps };
