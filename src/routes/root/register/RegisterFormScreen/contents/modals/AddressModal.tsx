import { COLORS } from 'src/assets/theme/base';
import { Flexbox, Typography, Button } from 'src/components/atom';
import { Modal, ModalProps } from 'src/components/atom/Modal';

interface AddressModalProps extends ModalProps {
  handleGetLocation: () => void;
  onPressSelectAddress: () => void;
}

const AddressModal = ({
  visible,
  onPressBack,
  handleGetLocation,
  onPressSelectAddress,
}: AddressModalProps) => {
  return (
    <Modal
      visible={visible}
      onPressBack={onPressBack}
      backgroundColor={COLORS.container_background}
      width={'70%'}
      height={'40%'}
      position={'center'}
    >
      <Flexbox
        width={'100%'}
        height={'100%'}
        alignItems={'center'}
        flexDirection={'column'}
        justifyContent={'center'}
        gap={20}
      >
        <Flexbox.Item pb={30}>
          <Typography fontSize={15}>
            선호주소를 어떻게 설정하시겠어요?
          </Typography>
        </Flexbox.Item>
        {/* <Flexbox.Item width='70%'>
          <Button size='medium' type='normal' onPress={handleGetLocation}>
            현재 위치로 설정
          </Button>
        </Flexbox.Item> */}
        <Flexbox.Item width='70%'>
          <Button size='medium' type='normal' onPress={onPressSelectAddress}>
            직접 선택
          </Button>
        </Flexbox.Item>
        <Flexbox.Item width='70%'>
          <Button size='medium' type='warning' onPress={() => onPressBack?.()}>
            취소
          </Button>
        </Flexbox.Item>
      </Flexbox>
    </Modal>
  );
};

export { AddressModal };
