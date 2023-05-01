type Pixel = `${number}px`;
type Percent = `${number}%`;

//Padding Type
type LengthElement = Pixel | Percent | number | 'auto';
type PaddingTupple = `${LengthElement} ${LengthElement}`;
type PaddingQuater =
  `${LengthElement} ${LengthElement} ${LengthElement} ${LengthElement}`;
type Padding = 'inherit' | PaddingTupple | PaddingQuater | LengthElement;

//Margin Type
type MarginElement = LengthElement | 'auto';
type MarginTupple = `${MarginElement} ${MarginElement}`;
type MarginQuater =
  `${MarginElement} ${MarginElement} ${MarginElement} ${MarginElement}`;
type Margin = 'inherit' | MarginTupple | MarginQuater | MarginElement;

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
  | 'orange';
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
};
