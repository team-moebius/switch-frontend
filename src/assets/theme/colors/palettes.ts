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

const PALETTE: BaseColorRegistry = {
  blue: {
    '100': '#85c1e9', // 밝은 블루
    '200': '#3498da', // 중간 블루
    '300': '#21618c', // 어두운 블루
  },
  white: {
    '100': '#ffffff', // 밝은 화이트
    '200': '#f0f0f0', // 중간 화이트
    '300': '#e0e0e0', // 어두운 화이트
  },
  black: {
    '100': '#000000', // 기본 블랙
    '200': '#2b2b2b', // 중간 블랙
    '300': '#3d3d3d', // 연한 블랙
  },
  gray: {
    '100': '#d3d3d3', // 밝은 그레이
    '200': '#a9a9a9', // 중간 그레이
    '300': '#7f7f7f', // 어두운 그레이
  },
  yellow: {
    '100': '#f7dc6f', // 밝은 옐로우
    '200': '#f2b989', // 중간 옐로우
    '300': '#b9770e', // 어두운 옐로우
  },
  red: {
    '100': '#f1948a', // 밝은 레드
    '200': '#e74c3c', // 중간 레드
    '300': '#922b21', // 어두운 레드
  },
  purple: {
    '100': '#d7bde2', // 밝은 퍼플
    '200': '#8e44ad', // 중간 퍼플
    '300': '#4a235a', // 어두운 퍼플
  },
  green: {
    '100': '#a3e4d7', // 밝은 그린
    '200': '#2ecc71', // 중간 그린
    '300': '#196f3d', // 어두운 그린
  },
} as const;

export default PALETTE;
