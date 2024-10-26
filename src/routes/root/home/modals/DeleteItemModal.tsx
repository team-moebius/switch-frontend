import COLORS from 'src/assets/theme/base';
import { Button, Flexbox, Typography } from 'src/components/atom';
import { Modal, ModalProps } from 'src/components/atom/Modal';

interface DeleteItemModalProps extends ModalProps {
  onDeleteConfirm: () => void;
}

const DeleteItemModal = ({
  visible,
  onPressBack,
  onDeleteConfirm,
}: DeleteItemModalProps) => {
  return (
    <Modal
      visible={visible}
      onPressBack={onPressBack}
      backgroundColor={COLORS.container_background}
      width={'70%'}
      height={'27%'}
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
        <Flexbox flexDirection={'column'} alignItems={'center'} gap={30}>
          <Flexbox flexDirection={'column'} alignItems={'center'}>
            <Typography fontSize={14}>
              {`- ${'5'}명이 이 물품을 대기중이예요`}
            </Typography>
            <Typography fontSize={14}>
              {`- ${'페이커'}님과 스위치 협의 중이예요`}
            </Typography>
          </Flexbox>
          <Typography fontSize={14}>물품을 정말 삭제하시겠어요?</Typography>
        </Flexbox>
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
                console.debug('삭제하기');
                onDeleteConfirm();
              }}
            >
              삭제하기
            </Button>
          </Flexbox.Item>
          <Flexbox.Item width='100%'>
            <Button
              size='medium'
              type='warning'
              onPress={() => onPressBack?.()}
            >
              취소
            </Button>
          </Flexbox.Item>
        </Flexbox>
      </Flexbox>
    </Modal>
  );
};

export { DeleteItemModal };
