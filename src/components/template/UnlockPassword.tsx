import { ReactNode } from 'react';

import { Flexbox } from 'src/components/atom';

import { NumberPad, NumberPadProps } from 'src/components/molecule/NumberPad';

interface UnlockPasswordProps extends NumberPadProps {
  notice: ReactNode;
}

const UnlockPassword = ({ notice, ...props }: UnlockPasswordProps) => {
  return (
    <Flexbox height={'100%'} flexDirection={'column'} alignItems={'center'}>
      <Flexbox.Item flex={1} mt={20} mb={24}>
        <Flexbox flexDirection={'row'} height={'100%'} alignItems={'center'}>
          {notice}
        </Flexbox>
      </Flexbox.Item>
      <Flexbox.Item flex={4}>
        <Flexbox
          height={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <NumberPad {...props} />
        </Flexbox>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { UnlockPassword };
