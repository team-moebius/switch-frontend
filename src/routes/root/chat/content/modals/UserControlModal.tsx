import { Box, Button, Flexbox } from 'src/components/atom';
import { Modal, ModalProps } from 'src/components/atom/Modal';
import { COLORS } from 'src/assets/theme/base';

interface UserControlModalProps extends ModalProps {
  handleOpenDecline: () => void;
  onReportBlock: () => void;
}

const UserControlModal = ({
  visible,
  onPressBack,
  onReportBlock,
  handleOpenDecline,
  ...props
}: UserControlModalProps) => {
  return (
    <Modal
      visible={visible}
      onPressBack={onPressBack}
      backgroundColor={COLORS.container_background}
      width={'50%'}
      height={'20%'}
      position={'center'}
      {...props}
    >
      <Flexbox
        height={'100%'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        rowGap={25}
      >
        <Box width={'80%'}>
          <Button type='warning' size='medium' onPress={handleOpenDecline}>
            스위치 거절
          </Button>
        </Box>
        <Box width={'80%'}>
          <Button type='warning' size='medium' onPress={onReportBlock}>
            신고 및 차단
          </Button>
        </Box>
      </Flexbox>
    </Modal>
  );
};

export { UserControlModal };
