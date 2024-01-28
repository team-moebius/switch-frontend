import { useState } from 'react';
import { Pressable } from 'react-native';
import {
  Flexbox,
  Icon,
  Modal as ReportModal,
  Modal as ConfirmModal,
  Typography,
  Button,
} from 'src/components/atom';
import { ButtonProps } from 'src/components/atom/Button';
import { ScreenWrapper } from 'src/components/template';

const ReportButton = ({
  children,
  onPress,
}: Pick<ButtonProps, 'onPress'> & { children: string }) => {
  return (
    <Pressable onPress={onPress}>
      <Flexbox
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography fontSize={16}>{children}</Typography>
        <Icon name='ios-chevron-forward' size={20} />
      </Flexbox>
    </Pressable>
  );
};

const ReportsScreen = ({ navigation }) => {
  const [reportModalVisible, setReportModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  return (
    <ScreenWrapper>
      <Flexbox
        flexDirection={'column'}
        height={'100%'}
        padding={20}
        gap={80}
        justifyContent={'flex-start'}
      >
        {/*게시글에서 신고하기 누른 경우*/}
        <Flexbox
          flexDirection={'column'}
          gap={20}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          width={'100%'}
        >
          <Flexbox.Item pb={20}>
            <Typography
              fontSize={18}
            >{`'${'커스텀 키보드'}' 게시물을 신고합니다.`}</Typography>
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <ReportButton onPress={() => setReportModalVisible(true)}>
              판매 금지 물품
            </ReportButton>
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <ReportButton onPress={() => setReportModalVisible(true)}>
              광고성 게시글
            </ReportButton>
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <ReportButton onPress={() => setReportModalVisible(true)}>
              기타 사유
            </ReportButton>
          </Flexbox.Item>
        </Flexbox>

        <Flexbox
          flexDirection={'column'}
          gap={20}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          width={'100%'}
        >
          <Flexbox.Item pb={20}>
            <Typography
              fontSize={18}
            >{`'${'청둥오리'}' 님을 신고합니다.`}</Typography>
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <ReportButton onPress={() => setReportModalVisible(true)}>
              비속어 사용
            </ReportButton>
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <ReportButton onPress={() => setReportModalVisible(true)}>
              업자 의심
            </ReportButton>
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <ReportButton onPress={() => setReportModalVisible(true)}>
              스위치 강요
            </ReportButton>
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <ReportButton onPress={() => setReportModalVisible(true)}>
              기타 사유
            </ReportButton>
          </Flexbox.Item>
        </Flexbox>
      </Flexbox>
      <ReportModal
        visible={reportModalVisible}
        onPressBack={() => setReportModalVisible(false)}
        backgroundColor={'#fefefe'}
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
            <Typography
              fontSize={14}
            >{`${'청둥오리'}님을 신고 할까요?`}</Typography>
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
                type='cancel'
                onPress={() => {
                  setReportModalVisible(false);
                }}
              >
                취소
              </Button>
            </Flexbox.Item>
            <Flexbox.Item flex={1}>
              <Button
                size='medium'
                type='normal'
                onPress={() => {
                  setConfirmModalVisible(true);
                }}
              >
                확인
              </Button>
            </Flexbox.Item>
          </Flexbox>
        </Flexbox>
        <ConfirmModal
          visible={confirmModalVisible}
          onPressBack={() => setConfirmModalVisible(false)}
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
              <Typography
                fontSize={14}
              >{`${'청둥오리'}님을 신고했습니다.`}</Typography>
            </Flexbox.Item>
            <Flexbox.Item flex={1}>
              <Button
                size='medium'
                type='normal'
                onPress={() => {
                  setReportModalVisible(false);
                  setConfirmModalVisible(false);
                  navigation.navigate('HomeMain');
                }}
              >
                확인
              </Button>
            </Flexbox.Item>
          </Flexbox>
        </ConfirmModal>
      </ReportModal>
    </ScreenWrapper>
  );
};

export { ReportsScreen };
