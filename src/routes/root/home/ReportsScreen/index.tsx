import { useState } from 'react';
import { Pressable } from 'react-native';
import { Flexbox, Icon, Typography } from 'src/components/atom';
import { ButtonProps } from 'src/components/atom/Button';
import { ScreenWrapper } from 'src/components/template';
import { ReportModal } from './modals/ReportModal';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeRouteParamList } from '..';
import { FONT_SIZE } from 'src/assets/theme/base';

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
        <Typography fontSize={FONT_SIZE.normal}>{children}</Typography>
        <Icon name='chevron-forward' size={20} />
      </Flexbox>
    </Pressable>
  );
};

const SWITCH_DETAIL = 'SwitchDetail';

const ReportsScreen = ({
  navigation,
  route,
}: StackScreenProps<HomeRouteParamList, 'Report'>) => {
  const { previousScreen } = route.params;
  const [isReportPost, setIsReportPost] = useState(false);
  const [reportModalVisible, setReportModalVisible] = useState(false);

  const handleReport = (isPost: boolean) => {
    setReportModalVisible(true);
    setIsReportPost(isPost);
  };

  return (
    <ScreenWrapper>
      <Flexbox
        flexDirection={'column'}
        height={'100%'}
        padding={20}
        gap={80}
        justifyContent={'flex-start'}
      >
        {previousScreen === SWITCH_DETAIL && (
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
              <ReportButton onPress={() => handleReport(true)}>
                음란/폭력 게시글
              </ReportButton>
            </Flexbox.Item>
            <Flexbox.Item width={'100%'}>
              <ReportButton onPress={() => handleReport(true)}>
                광고성 게시글
              </ReportButton>
            </Flexbox.Item>
            <Flexbox.Item width={'100%'}>
              <ReportButton onPress={() => handleReport(true)}>
                스위치 금지 물품
              </ReportButton>
            </Flexbox.Item>
            <Flexbox.Item width={'100%'}>
              <ReportButton onPress={() => handleReport(true)}>
                기타 사유
              </ReportButton>
            </Flexbox.Item>
          </Flexbox>
        )}

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
            <ReportButton onPress={() => handleReport(false)}>
              비속어 사용
            </ReportButton>
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <ReportButton onPress={() => handleReport(false)}>
              현금 요구
            </ReportButton>
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <ReportButton onPress={() => handleReport(false)}>
              스위치 강요
            </ReportButton>
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <ReportButton onPress={() => handleReport(false)}>
              기타 사유
            </ReportButton>
          </Flexbox.Item>
        </Flexbox>
      </Flexbox>
      <ReportModal
        navigation={navigation}
        visible={reportModalVisible}
        onPressBack={() => setReportModalVisible(false)}
        isReportPost={isReportPost}
        onConfirmModalControl={() => setReportModalVisible(false)}
      />
    </ScreenWrapper>
  );
};

export { ReportsScreen };
