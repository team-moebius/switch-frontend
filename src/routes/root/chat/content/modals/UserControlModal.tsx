import { useState } from 'react';
import { Button, Flexbox } from 'src/components/atom';
import { Modal, ModalProps } from 'src/components/atom/Modal';
import { DeclineSwitchModal } from './DeclineSwitchModal';

interface UserControlModalProps extends ModalProps {
  onDeclineSwitch: () => void;
  onReportBlock: () => void;
  navigation?: any;
}

const UserControlModal = ({
  visible,
  onPressBack,
  onReportBlock,
  onDeclineSwitch,
  navigation,
}: UserControlModalProps) => {
  const [showDeclineSwitchModal, setShowDeclineSwitchModal] = useState(false);

  const handleDeclineSwitch = () => {
    setShowDeclineSwitchModal(true);
  };

  const handleDeclineSwitchModalConfirm = () => {
    setShowDeclineSwitchModal(false);
    onDeclineSwitch();
    navigation.navigate('HomeMain');
  };

  const handleDeclineSwitchModalCancel = () => {
    setShowDeclineSwitchModal(false);
  };

  return (
    <Modal
      visible={visible}
      onPressBack={onPressBack}
      backgroundColor={'#fefefe'}
      width={'50%'}
      height={'15%'}
      position={'center'}
    >
      <Flexbox
        width={'100%'}
        height={'100%'}
        margin={'auto'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={10}
      >
        <Flexbox.Item margin={'auto'}>
          <Button type='normal' size='medium' onPress={handleDeclineSwitch}>
            스위치 거절
          </Button>
        </Flexbox.Item>
        <Flexbox.Item margin={'auto'}>
          <Button type='cancel' size='medium' onPress={onReportBlock}>
            신고 및 차단
          </Button>
        </Flexbox.Item>
      </Flexbox>

      {showDeclineSwitchModal && (
        <DeclineSwitchModal
          visible={true}
          onPressBack={handleDeclineSwitchModalCancel}
          onConfirm={handleDeclineSwitchModalConfirm}
        />
      )}
    </Modal>
  );
};

export { UserControlModal };
