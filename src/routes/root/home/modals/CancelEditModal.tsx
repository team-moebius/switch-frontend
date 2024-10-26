import { COLORS } from 'src/assets/theme/base';
import { Button, Flexbox, Typography } from 'src/components/atom';
import { Modal, ModalProps } from 'src/components/atom/Modal';

interface CancelEditModalProps extends ModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const CancelEditModal = ({
  visible,
  onPressBack,
  onConfirm,
  onCancel,
}: CancelEditModalProps) => {
  return (
    <Modal
      visible={visible}
      onPressBack={onPressBack}
      backgroundColor={COLORS.container_background}
      width={'70%'}
      height={'18%'}
      position={'center'}
    >
      <Flexbox
        width={'100%'}
        height={'100%'}
        margin={'auto'}
        padding={20}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography fontSize={14}>
          물품을 수정하지 않고 나가시겠어요?
        </Typography>
        <Flexbox
          width={'100%'}
          alignItems={'center'}
          flexDirection={'column'}
          pt={20}
          gap={10}
        >
          <Flexbox.Item width='100%'>
            <Button
              size='medium'
              wide
              type='normal'
              onPress={() => {
                onConfirm();
              }}
            >
              확인
            </Button>
          </Flexbox.Item>
          <Flexbox.Item width='100%'>
            <Button size='medium' type='warning' onPress={() => onCancel()}>
              취소
            </Button>
          </Flexbox.Item>
        </Flexbox>
      </Flexbox>
    </Modal>
  );
};

export { CancelEditModal };
