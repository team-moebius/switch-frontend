import { COLORS } from 'src/assets/theme/base';
import { Button, Flexbox, Typography } from 'src/components/atom';
import { Modal, ModalProps } from 'src/components/atom/Modal';

interface FeedbackModalProps extends ModalProps {
  onPressAppStore: () => void;
  onPressDirect: () => void;
  onPressCancel: () => void;
}

const FeedbackModal = ({
  visible,
  onPressBack,
  onPressAppStore,
  onPressDirect,
  onPressCancel,
}: FeedbackModalProps) => {
  return (
    <Modal
      visible={visible}
      onPressBack={onPressBack}
      backgroundColor={COLORS.container_background}
      width={'70%'}
      height={'35%'}
      position={'center'}
    >
      <Flexbox
        width={'100%'}
        height={'100%'}
        margin={'auto'}
        gap={80}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Flexbox.Item>
          <Typography fontSize={14}>피드백을 어디에 남기시겠어요?</Typography>
        </Flexbox.Item>
        <Flexbox
          alignItems={'center'}
          width={'100%'}
          flexDirection={'column'}
          pt={20}
          gap={10}
        >
          <Flexbox.Item width='90%'>
            <Button size='medium' type='normal' onPress={onPressAppStore}>
              앱스토어
            </Button>
          </Flexbox.Item>
          <Flexbox.Item width='90%'>
            <Button size='medium' type='normal' onPress={onPressDirect}>
              직접 보내기
            </Button>
          </Flexbox.Item>
          <Flexbox.Item width='90%'>
            <Button size='medium' type='warning' onPress={onPressCancel}>
              취소
            </Button>
          </Flexbox.Item>
        </Flexbox>
      </Flexbox>
    </Modal>
  );
};

export { FeedbackModal };
