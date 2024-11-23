import { ItemResponse } from '@team-moebius/api-typescript';
import { Alert, Pressable } from 'react-native';
import { FONT_SIZE, PADDING } from 'src/assets/theme/base';
import PALETTE from 'src/assets/theme/colors/palettes';
import {
  Box,
  Flexbox,
  Separator,
  Typography,
  Button,
  Icon,
} from 'src/components/atom';
import { TradingListItem, UserSummary } from 'src/components/molecule';
import { UserSummaryData } from 'src/components/molecule/UserSummary';
import { WithImage } from 'src/components/template';

interface SwitchDetailFooterProp {
  onPressReport: () => void;
  onPressPropose: () => void;
  onPressRevoke: () => void;
  userSummaryData: UserSummaryData;
  offeredList: ItemResponse[];
  isMine: boolean;
}

const SwitchDetailFooter = ({
  onPressReport,
  onPressPropose,
  onPressRevoke,
  userSummaryData,
  offeredList,
  isMine,
}: SwitchDetailFooterProp) => {
  const onPressOfferList = (item: any) => {
    // TODO : 🚨 해당 아이템으로 navigation 걸어야 됨
    Alert.alert(item, '을 클릭했습니다.');
  };
  // TODO : 🚨 여기 pairedItemName 처럼 Switches 호출하면 있는 프로퍼티들이 존재한다면,
  // 여기에 걸릴 수 있도록 하기. 일단 Mock data 활용해서 UI 만들기
  if (true) {
    return (
      <Flexbox
        alignItems='center'
        flexDirection='column'
        rowGap={20}
        mt={10}
        pb={20}
        pl={PADDING.wrapper.horizontal}
        pr={PADDING.wrapper.horizontal}
      >
        <Icon name='swap-horizontal' size={24} />
        {/* TODO : 🚨 pairedItemName이랑 그런 변수 여기에 넣기 */}
        <WithImage
          src={
            'https://img.danawa.com/images/descFiles/6/68/5067243_CxXEIN2WXm_1654690609267.jpeg'
          }
          text='빛과 소금 6집 사인반빛과 소금 6집 사인반빛과 소금 6집 사인반빛과 소금 6집 사인반빛과 소금 6집 사인반'
          layoutStyle={{
            mostOutlineLayout: { maxWidth: '80%' },
            textBoxLayout: { maxWidth: '80%' },
          }}
        />
        <Flexbox flexDirection='column' alignItems='center'>
          <Typography
            children={'스위치가 완료되었습니다.'}
            fontSize={FONT_SIZE.header}
          />
          <Typography children={'2024.10.09'} fontSize={FONT_SIZE.header} />
        </Flexbox>
        <Box>
          {/* TODO : 🚨 평가를 남겼는지 여부에 따라 조건부 렌더링 */}
          {false ? (
            <Button
              type={'normal'}
              size={'medium'}
              onPress={() => {}}
              children={'스위치 평가 남기기'}
            />
          ) : (
            <Button
              type={'cancel'}
              size={'medium'}
              onPress={() => {}}
              children={'스위치 평가를 남기셨어요'}
            />
          )}
        </Box>
      </Flexbox>
    );
  }
  // TODO : 🚨 이 아이템 등록자 달아야 됨
  // if (userId !== '글쓴이') {
  if (!isMine) {
    // 스위치 제안을 하지 않았다면
    return (
      <>
        <Flexbox.Item width={'100%'}>
          <Pressable onPress={onPressReport} style={{ width: '100%' }}>
            <Flexbox alignItems='center' justifyContent='center'>
              <Typography fontSize={FONT_SIZE.header} color={PALETTE.red[200]}>
                신고하기
              </Typography>
            </Flexbox>
          </Pressable>
        </Flexbox.Item>
        <Separator width={'100%'} />
        <Flexbox
          pl={PADDING.wrapper.horizontal}
          pr={PADDING.wrapper.horizontal}
        >
          {/* TODO : 🚨 onPressUsername에 상대 유저 정보로 갈 수 있도록 핸들러 연결해줘야 됨 */}
          <UserSummary data={userSummaryData} />
        </Flexbox>
        <Separator width={'100%'} />
        <Flexbox
          alignItems={'center'}
          flexDirection={'column'}
          gap={10}
          pb={20}
          pl={PADDING.wrapper.horizontal}
          pr={PADDING.wrapper.horizontal}
        >
          {/* TODO : 🚨 제안 여부에 따라 분기처리 */}
          {false ? (
            <>
              <Box>
                <Button
                  type={'normal'}
                  size={'medium'}
                  onPress={onPressPropose}
                >
                  스위치 요청하기
                </Button>
              </Box>
              <Flexbox justifyContent='center'>
                <Typography fontSize={16}>3명이 줄서고 있어요</Typography>
              </Flexbox>
            </>
          ) : (
            <Box>
              <Button type={'warning'} size={'medium'} onPress={onPressRevoke}>
                요청 취소하기
              </Button>
            </Box>
          )}
        </Flexbox>
      </>
    );
  }
  // else if (userId === '글쓴이') {
  else {
    if (true) {
      return (
        <Box
          pl={PADDING.wrapper.horizontal}
          pr={PADDING.wrapper.horizontal}
          pb={25}
        >
          <Flexbox justifyContent='center' mb={20}>
            <Typography
              children={'이 물품으로 제안한 스위치'}
              fontSize={FONT_SIZE.header}
            />
          </Flexbox>
          {offeredList.map((offer, index) => {
            return (
              <TradingListItem
                key={index}
                onPress={() => onPressOfferList(offer.name)}
                childDirection='column'
                data={{
                  src: offer.images ? offer.images[0] : '',
                  name: offer.name ? offer.name : '',
                  preferredLocation: offer.preferredLocations
                    ? Array.from(offer.preferredLocations)[0]
                    : '',
                }}
              />
            );
          })}
        </Box>
      );
    }
  }
};

export { SwitchDetailFooter };
