import React from 'react';
import { COLORS } from 'src/assets/theme/base';
import { Button, Flexbox } from 'src/components/atom';
import { Modal, ModalProps } from 'src/components/atom/Modal';

interface AccessDeviceModalProps extends ModalProps {
  onOpenCamera: () => void;
  onCheckCameraRollPermission: () => void;
}

const AccessDeviceModal = ({
  visible,
  onPressBack,
  onOpenCamera,
  onCheckCameraRollPermission,
}: AccessDeviceModalProps) => {
  return (
    <Modal
      visible={visible}
      onPressBack={onPressBack}
      backgroundColor={COLORS.container_background}
      width={'70%'}
      height={'25%'}
      position={'center'}
    >
      <Flexbox
        width={'100%'}
        height={'100%'}
        margin={'auto'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={20}
      >
        <Flexbox.Item alignSelf={'center'} width='70%'>
          <Button size='medium' type='normal' onPress={onOpenCamera}>
            사진 촬영
          </Button>
        </Flexbox.Item>
        <Flexbox.Item alignSelf={'center'} width='70%'>
          <Button
            size='medium'
            type='normal'
            onPress={onCheckCameraRollPermission}
          >
            앨범에서 선택
          </Button>
        </Flexbox.Item>
        <Flexbox.Item alignSelf={'center'} width='70%'>
          <Button size='medium' type='cancel' onPress={() => onPressBack?.()}>
            취소
          </Button>
        </Flexbox.Item>
      </Flexbox>
    </Modal>
  );
};

export { AccessDeviceModal };
