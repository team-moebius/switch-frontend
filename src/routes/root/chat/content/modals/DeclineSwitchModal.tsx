import { COLORS } from 'src/assets/theme/base';
import { Button, Flexbox, Typography } from 'src/components/atom';
import { Modal, ModalProps } from 'src/components/atom/Modal';

interface DeclineSwitchModalProps extends ModalProps {
  onConfirm: () => void;
}

const DeclineSwitchModal = ({
  visible,
  onPressBack,
  onConfirm,
  onModalHide,
}: DeclineSwitchModalProps) => {
  return (
    <Modal
      visible={visible}
      onPressBack={onPressBack}
      backgroundColor={COLORS.container_background}
      onModalHide={onModalHide}
      width={'70%'}
      height={'18%'}
      position={'center'}
    >
      <Flexbox
        width={'100%'}
        height={'100%'}
        margin={'auto'}
        padding={10}
        gap={50}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Flexbox.Item>
          <Typography
            fontSize={14}
          >{`스위치 제안을 거절 하시겠어요?`}</Typography>
        </Flexbox.Item>
        <Flexbox
          alignItems={'center'}
          justifyContent={'center'}
          width={'100%'}
          gap={10}
        >
          <Flexbox.Item flex={1}>
            <Button
              size='medium'
              type='warning'
              onPress={() => onPressBack?.()}
            >
              취소
            </Button>
          </Flexbox.Item>
          <Flexbox.Item flex={1}>
            <Button size='medium' type='normal' onPress={onConfirm}>
              확인
            </Button>
          </Flexbox.Item>
        </Flexbox>
      </Flexbox>
    </Modal>
  );
};

export { DeclineSwitchModal };
