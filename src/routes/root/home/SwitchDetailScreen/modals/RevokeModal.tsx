import { Alert } from 'react-native';
import { COLORS, FONT_SIZE, PADDING } from 'src/assets/theme/base';
import { Box, Button, Flexbox, Icon, Typography } from 'src/components/atom';
import { Modal, ModalProps } from 'src/components/atom/Modal';

interface RevokeModalProps extends ModalProps {
  onPressRevoke: () => void;
  myItem: string;
  oppItem: string;
}

const RevokeModal = ({
  visible,
  onPressBack,
  onPressRevoke,
  myItem,
  oppItem,
}: RevokeModalProps) => {
  return (
    <Modal
      visible={visible}
      onPressBack={onPressBack}
      backgroundColor={COLORS.container_background}
      width={'70%'}
      height={'45%'}
      position={'center'}
    >
      <Flexbox
        height={'100%'}
        flexDirection='column'
        justifyContent='space-between'
        alignItems='center'
        pl={PADDING.wrapper.horizontal}
        pr={PADDING.wrapper.horizontal}
        pt={20}
        pb={10}
      >
        <Flexbox flexDirection='column' alignItems='center' rowGap={10}>
          <Typography
            children={'나의 ' + `'` + myItem + `'`}
            fontSize={FONT_SIZE.bigger}
            ellipsizeMode='tail'
            numberOfLines={2}
          />
          <Icon name='swap-horizontal' size={24} />
          <Typography
            children={'상대방의 ' + `'` + myItem + `'`}
            fontSize={FONT_SIZE.bigger}
            ellipsizeMode='tail'
            numberOfLines={2}
          />
          <Typography
            children={'스위치 제안을 취소하시겠어요?'}
            fontSize={FONT_SIZE.bigger}
          />
        </Flexbox>
        <Flexbox flexDirection='column' rowGap={3}>
          <Typography
            children={
              '제안을 취소하면 해당 스위치에 대한' +
              `\n` +
              '채팅방을 더 이상 이용할 수 없습니다.'
            }
            fontSize={FONT_SIZE.normal}
          />
        </Flexbox>
        <Flexbox flexDirection='column' width={'100%'} rowGap={10}>
          <Box>
            <Button
              type={'normal'}
              size={'medium'}
              onPress={onPressRevoke}
              children={'제안 취소'}
            />
          </Box>
          <Box>
            <Button
              type={'normal'}
              size={'medium'}
              onPress={onPressBack ? onPressBack : () => {}}
              children={'돌아가기'}
            />
          </Box>
        </Flexbox>
      </Flexbox>
    </Modal>
  );
};

export { RevokeModal };
