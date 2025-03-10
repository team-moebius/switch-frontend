import { Button, Flexbox, Modal } from 'src/components/atom';
import { ModalProps } from 'src/components/atom/Modal';
import { COLORS } from 'src/assets/theme/base';

interface MyItemOptionModalProps extends ModalProps {
  onPressEditButton: () => void;
  onPressDeleteModal: () => void;
}

const MyItemOptionModal = ({
  visible,
  onPressBack,
  onPressEditButton,
  onPressDeleteModal,
  onModalHide,
}: MyItemOptionModalProps) => {
  return (
    <Modal
      visible={visible}
      onPressBack={onPressBack}
      backgroundColor={COLORS.container_background}
      width={'70%'}
      height={'18%'}
      position={'center'}
      onModalHide={onModalHide}
    >
      <Flexbox
        width={'100%'}
        height={'100%'}
        margin={'auto'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        padding={20}
        gap={10}
      >
        <Flexbox.Item width={'100%'}>
          <Button type='normal' size='medium' onPress={onPressEditButton}>
            수정
          </Button>
        </Flexbox.Item>
        <Flexbox.Item width={'100%'}>
          <Button type='warning' size='medium' onPress={onPressDeleteModal}>
            삭제
          </Button>
        </Flexbox.Item>
      </Flexbox>
    </Modal>
  );
};

export { MyItemOptionModal };
