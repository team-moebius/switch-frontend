type Pixel = `${number}px`;
type Percent = `${number}%`;

//Padding Type
type LengthElement = Pixel | Percent | number | 'auto';
type PaddingTuple = `${LengthElement} ${LengthElement}`;
type PaddingQuarter =
  `${LengthElement} ${LengthElement} ${LengthElement} ${LengthElement}`;
type Padding = 'inherit' | PaddingTuple | PaddingQuarter | LengthElement;

//Margin Type
type MarginElement = LengthElement | 'auto';
type MarginTuple = `${MarginElement} ${MarginElement}`;
type MarginQuarter =
  `${MarginElement} ${MarginElement} ${MarginElement} ${MarginElement}`;
type Margin = 'inherit' | MarginTuple | MarginQuarter | MarginElement;

//Color Type
type HexColor = `#${string}`;
type RgbColor = `rgb(${number}, ${number}, ${number})`;
type RgbaColor = `rgba(${number}, ${number}, ${number}, ${number})`;
type NamedColor =
  | 'red'
  | 'black'
  | 'blue'
  | 'white'
  | 'transparent'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'gray';
type Color = HexColor | RgbColor | RgbaColor | NamedColor;

//Border Type
type BorderStyle = 'solid' | 'dotted' | 'dashed';
type BorderColor = Color;
type BorderWidth = number;

type Border = `${BorderWidth} ${BorderStyle} ${BorderColor}`;

//Direction
type Direction = 'row' | 'column';
type ReverseDirection = `${Direction}-reverse`;
type FlexDirection = Direction | ReverseDirection;

//Alignment
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type FlexAlign = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';

//Wrap
type FlexWrap = 'wrap' | 'wrap-reverse' | 'nowrap';

export {
  Pixel,
  Percent,
  LengthElement,
  Padding,
  MarginElement,
  Margin,
  Color,
  BorderStyle,
  BorderColor,
  BorderWidth,
  Border,
  FlexDirection,
  JustifyContent,
  FlexAlign,
  FlexWrap,
};
