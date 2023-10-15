import { Color } from 'src/@types/unit';

type ColorRecordOf<V extends string> = Record<V, Color>;

type ColorRegistry<Keys extends string, Variation extends string> = Record<
  Keys,
  ColorRecordOf<Variation>
>;

type ColorBaseType =
  | 'blue'
  | 'yellow'
  | 'red'
  | 'black'
  | 'gray'
  | 'green'
  | 'white'
  | 'purple';
type ColorTokenVariation = '100' | '200' | '300';
type BaseColorRegistry = ColorRegistry<ColorBaseType, ColorTokenVariation>;

const BASE_COLORS: BaseColorRegistry = {
  blue: {
    '100': '#3498da',
    '200': '#3498da',
    '300': '#3498da',
  },
  white: {
    '100': '#ffffff',
    '200': '#ffffff',
    '300': '#ffffff',
  },
  black: {
    '100': '#000000',
    '200': '#000000',
    '300': '#000000',
  },
  gray: {
    '100': '#535353',
    '200': '#e6e6e6',
    '300': '#7f7f7f',
  },
  yellow: {
    '100': '#f2b989',
    '200': '#f2b989',
    '300': '#f2b989',
  },
  red: {
    '100': '#d88178',
    '200': '#d88178',
    '300': '#d88178',
  },
  purple: {
    '100': '#8e44ad',
    '200': '#8e44ad',
    '300': '#8e44ad',
  },
  green: {
    '100': '#19bc9c',
    '200': '#2ecc71',
    '300': '#2ecc71',
  },
} as const;

export default BASE_COLORS;
