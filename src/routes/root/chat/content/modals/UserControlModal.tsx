import { useState } from 'react';
import { Box, Button, Flexbox } from 'src/components/atom';
import { Modal, ModalProps } from 'src/components/atom/Modal';
import { DeclineSwitchModal } from './DeclineSwitchModal';
import { COLORS } from 'src/assets/theme/base';

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
      backgroundColor={COLORS.container_background}
      width={'50%'}
      height={'20%'}
      position={'center'}
    >
      <Flexbox
        height={'100%'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        rowGap={25}
      >
        <Box width={'80%'}>
          <Button type='warning' size='medium' onPress={onPressDecline}>
            스위치 거절
          </Button>
        </Box>
        <Box width={'80%'}>
          <Button type='warning' size='medium' onPress={onReportBlock}>
            신고 및 차단
          </Button>
        </Box>
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
