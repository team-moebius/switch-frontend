import React, { useCallback, useEffect, useState } from 'react';
import { Modal, Flexbox, Typography, Button } from 'src/components/atom';
import { Checkbox } from 'src/components/molecule';
import { Text } from 'react-native';

// prop interfaces
// modalVisible
interface SwitchNoticeModalProps {
  modalVisible: boolean;
  setModalVisible(value: boolean): void;
  confirmNotice(): void;
}

const RegisterNoticeModal = ({
  modalVisible,
  setModalVisible,
  confirmNotice,
}: SwitchNoticeModalProps) => {
  const [isConfirmed, setIsConfirmed] = useState<boolean>(true);
  return (
    <Modal
      visible={modalVisible}
      onPressBack={() => setModalVisible(false)}
      backgroundColor={'#fefefe'}
      width={'70%'}
      height={'40%'}
      position={'center'}
    >
      <Flexbox
        width={'100%'}
        height={'100%'}
        padding={'10%'}
        alignItems={'center'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        gap={20}
      >
        <Flexbox.Item pb={30}>
          <Typography fontSize={15}>물품 등록시 꼭 지켜주세요!</Typography>
        </Flexbox.Item>
        <Flexbox.Item width='100%' height='55%'>
          <Flexbox.Item width='100%' pb={15}>
            <Typography fontSize={12}>1. 물품 설명은 정확하게</Typography>
            {/* <Checkbox
              width='100%'
              height='10px'
              labelAlign='left'
              labelPosition='left'
              onPress={() => {
                console.log('pressed checkbox!');
              }}
              checked={true}
              label='사진, 물품에 대한 설명을 꼭 사실대로 올려주세요.'
            ></Checkbox> */}
            {/* [_]  checkbox 에러 해결 */}
            <Typography fontSize={12}>
              사진, 물품에 대한 설명을 꼭 사실대로 올려주세요.
            </Typography>
          </Flexbox.Item>
          <Flexbox.Item width='100%'>
            <Typography fontSize={12}>2. 스위치 하기 안전한 물품만</Typography>
            <Typography fontSize={12}>
              사용 기한 초과, 제품의 안정성 등으로 인하여 발생하는 문제에 대해,
              스위치는 법적 책임을 지지 않습니다.
            </Typography>
          </Flexbox.Item>
        </Flexbox.Item>
        <Flexbox.Item width='100%'>
          <Button size='medium' type='normal' onPress={confirmNotice}>
            동의합니다
          </Button>
        </Flexbox.Item>
      </Flexbox>
    </Modal>
  );
};

export default RegisterNoticeModal;
