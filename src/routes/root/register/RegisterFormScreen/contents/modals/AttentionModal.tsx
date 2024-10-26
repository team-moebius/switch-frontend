import { Flexbox, Typography, Button } from 'src/components/atom';
import { Modal, ModalProps } from 'src/components/atom/Modal';
import { Check } from 'src/components/atom/Check';
import COLORS from 'src/assets/theme/base';

export const DETAILS = 'details';
export const SAFETY = 'safety';

interface AttentionModalProps extends ModalProps {
  checkboxState: {
    details: boolean;
    safety: boolean;
  };
  changeCheckboxDetails: (checkboxName: string) => void;
  handleCloseAttentionModal: () => void;
}

const AttentionModal = ({
  visible,
  onPressBack,
  checkboxState,
  changeCheckboxDetails,
  handleCloseAttentionModal,
}: AttentionModalProps) => {
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
        margin={'auto'}
        gap={40}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Flexbox.Item>
          <Typography fontSize={14}>물품 등록시 꼭 지켜주세요!</Typography>
        </Flexbox.Item>
        <Flexbox flexDirection={'column'} gap={20}>
          <Flexbox.Item width='90%'>
            <Flexbox>
              <Flexbox.Item width={'90%'}>
                <Typography fontSize={14}>1. 물품 설명은 정확하게</Typography>
                <Typography fontSize={14}>
                  사진, 물품에 대한 설명을 꼭 사실대로 올려주세요.
                </Typography>
              </Flexbox.Item>
              <Flexbox.Item width={'10%'}>
                <Check
                  size={15}
                  type={'info'}
                  checked={checkboxState.details}
                  onPress={() => changeCheckboxDetails(DETAILS)}
                />
              </Flexbox.Item>
            </Flexbox>
          </Flexbox.Item>

          <Flexbox.Item width='90%'>
            <Flexbox>
              <Flexbox.Item width={'90%'}>
                <Typography fontSize={14}>
                  2. 스위치 하기 안전한 물품만
                </Typography>
                <Typography fontSize={14}>
                  사용 기한 초과, 제품의 안정성 등으로 인하여 발생하는 문제에
                  대해, 스위치는 법적 책임을 지지 않습니다.
                </Typography>
              </Flexbox.Item>
              <Flexbox.Item width={'10%'}>
                <Check
                  type={'info'}
                  boxType={'square'}
                  checked={checkboxState.safety}
                  size={15}
                  onPress={() => changeCheckboxDetails(SAFETY)}
                />
              </Flexbox.Item>
            </Flexbox>
          </Flexbox.Item>
        </Flexbox>
        <Flexbox.Item width='90%'>
          <Button
            size='medium'
            type='normal'
            onPress={handleCloseAttentionModal}
          >
            확인
          </Button>
        </Flexbox.Item>
      </Flexbox>
    </Modal>
  );
};

export { AttentionModal };
