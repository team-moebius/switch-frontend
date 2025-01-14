import { useState } from 'react';
import { Button, Flexbox, Modal } from 'src/components/atom';
import { ModalProps } from 'src/components/atom/Modal';
import { DeleteItemModal } from './DeleteItemModal';
import { COLORS } from 'src/assets/theme/base';

interface MyItemOptionModalProps extends ModalProps {
  onEdit: () => void;
  onDeleteModalControl: () => void;
  navigation?: any;
}

const MyItemOptionModal = ({
  visible,
  onPressBack,
  onEdit,
  onDeleteModalControl,
  navigation,
}: MyItemOptionModalProps) => {
  // QUESTION : onEdit은 외부에서 주입을 해야할 필요성이 있을지 잘 모르겠다.

  const [showDeleteSwitchModal, setShowDeleteSwitchModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteSwitchModal(true);
  };

  const handleDeleteConfirmModal = () => {
    // TODO : 게시물 삭제 api
    setShowDeleteSwitchModal(false);
    onDeleteModalControl();
    navigation.navigate('HomeMain');
  };

  const handleDeleteModalCancel = () => {
    setShowDeleteSwitchModal(false);
  };

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
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        padding={20}
        gap={10}
      >
        <Flexbox.Item width={'100%'}>
          <Button type='normal' size='medium' onPress={onEdit}>
            수정
          </Button>
        </Flexbox.Item>
        <Flexbox.Item width={'100%'}>
          <Button type='warning' size='medium' onPress={handleDelete}>
            삭제
          </Button>
        </Flexbox.Item>
      </Flexbox>
      {showDeleteSwitchModal && (
        <DeleteItemModal
          visible={true}
          onPressBack={handleDeleteModalCancel}
          onDeleteConfirm={handleDeleteConfirmModal}
        />
      )}
    </Modal>
  );
};

export { MyItemOptionModal };
