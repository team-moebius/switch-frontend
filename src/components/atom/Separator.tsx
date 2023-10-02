import { LengthElement } from 'src/@types/unit';
import { Box } from './Box';

interface SeparatorProps {
  width?: LengthElement;
}
const Separator = ({ width }: SeparatorProps) => (
  <Box width={width} height={1} backgroundColor={'gray'} mt={10} mb={10} />
);

export { Separator };
