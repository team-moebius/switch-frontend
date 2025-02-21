import { useState } from 'react';
import { Flexbox, Typography, Button } from 'src/components/atom';
import { Modal, ModalProps } from 'src/components/atom/Modal';
import { ConfirmReportModal } from './ConfirmReportModal';
import { COLORS, FONT_SIZE } from 'src/assets/theme/base';

interface ReportModalProps extends ModalProps {
  isReportPost: boolean;
  onConfirmModalControl: () => void;
  navigation?: any;
  opponentName: string;
  itemTitle?: string;
}

const ReportModal = ({
  navigation,
  visible,
  onPressBack,
  isReportPost,
  onConfirmModalControl,
  opponentName,
  itemTitle,
}: ReportModalProps) => {
  const [showConfirmReportModal, setShowConfirmReportModal] = useState(false);

  const handelReport = () => {
    setShowConfirmReportModal(true);
  };

  const handelReportConfirmModal = () => {
    setShowConfirmReportModal(false);
    onConfirmModalControl();
    navigation.navigate('HomeMain');
  };

  const handleReportCancel = () => {
    setShowConfirmReportModal(false);
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
        padding={10}
        gap={50}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Flexbox.Item>
          {/* TODO : 변수로 사용자 이름 넣기 */}
          <Typography fontSize={FONT_SIZE.normal}>
            {isReportPost
              ? `${itemTitle}' 게시글을 신고할까요?`
              : `'${opponentName}'님을 신고할까요?`}
          </Typography>
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
              onPress={() => onPressBack && onPressBack()}
            >
              취소
            </Button>
          </Flexbox.Item>
          <Flexbox.Item flex={1}>
            <Button size='medium' type='normal' onPress={handelReport}>
              확인
            </Button>
          </Flexbox.Item>
        </Flexbox>
      </Flexbox>
      {showConfirmReportModal && (
        <ConfirmReportModal
          visible={true}
          onPressBack={handleReportCancel}
          isReportPost={isReportPost}
          onConfirmation={handelReportConfirmModal}
        />
      )}
    </Modal>
  );
};

export { ReportModal };
