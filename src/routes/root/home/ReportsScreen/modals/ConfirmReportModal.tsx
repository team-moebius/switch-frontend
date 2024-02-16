import { Flexbox, Typography, Button } from 'src/components/atom';
import { Modal, ModalProps } from 'src/components/atom/Modal';

interface ConfirmModalProps extends ModalProps {
  isReportPost: boolean;
  onConfirmation: () => void;
}

const ConfirmReportModal = ({
  visible,
  onPressBack,
  isReportPost,
  onConfirmation,
}: ConfirmModalProps) => {
  return (
    <Modal
      visible={visible}
      onPressBack={onPressBack}
      backgroundColor={'#fefefe'}
      width={'70%'}
      height={130}
      position={'center'}
    >
      <Flexbox
        width={'100%'}
        height={'100%'}
        margin={'auto'}
        padding={20}
        flexDirection={'column'}
        justifyContent={'space-between'}
        alignItems={'center'}
        gap={40}
      >
        <Flexbox.Item>
          <Typography fontSize={14}>
            {isReportPost
              ? '게시글을 신고했습니다.'
              : `${'청둥오리'}님을 신고했습니다.`}
          </Typography>
        </Flexbox.Item>
        <Flexbox.Item flex={1}>
          <Button size='medium' type='normal' onPress={onConfirmation}>
            확인
          </Button>
        </Flexbox.Item>
      </Flexbox>
    </Modal>
  );
};

export { ConfirmReportModal };
