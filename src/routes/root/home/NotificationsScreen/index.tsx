import { FlatList } from 'react-native-gesture-handler';
import { Flexbox } from 'src/components/atom';
import { NotiListItem } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';

type NotificationData = {
  id: number;
  message: string;
  ago: string;
  type: string;
};
const ALARM_MOCK_DATA = [
  {
    id: 1,
    message: `'집오리'님이 회원님의 '커스텀 키보드'에 스위치를 제안했어요.`,
    ago: '방금',
    type: 'switch',
  },
  {
    id: 2,
    message:
      '스위치의 회원이 되신 것을 환영합니다! 상대방의 물건과 스위치를 원하신다면, 창고에 물품을 추가해보세요.스위치의 회원이 되신 것을 환영합니다! 상대방의 물건과 스위치를 원하신다면, 창고에 물품을 추가해보세요.스위치의 회원이 되신 것을 환영합니다! 상대방의 물건과 스위치를 원하신다면, 창고에 물품을 추가해보세요.스위치의 회원이 되신 것을 환영합니다! 상대방의 물건과 스위치를 원하신다면, 창고에 물품을 추가해보세요.',
    ago: '방금',
    type: 'announcement',
  },
  {
    id: 3,
    message:
      '스위치의 회원이 되신 것을 환영합니다! 상대방의 물건과 스위치를 원하신다면, 창고에 물품을 추가해보세요.',
    ago: '방금',
    type: 'announcement',
  },
  {
    id: 4,
    message:
      '스위치의 회원이 되신 것을 환영합니다! 상대방의 물건과 스위치를 원하신다면, 창고에 물품을 추가해보세요.',
    ago: '방금',
    type: 'announcement',
  },
  {
    id: 5,
    message:
      '스위치의 회원이 되신 것을 환영합니다! 상대방의 물건과 스위치를 원하신다면, 창고에 물품을 추가해보세요.',
    ago: '방금',
    type: 'announcement',
  },
  {
    id: 6,
    message:
      '스위치의 회원이 되신 것을 환영합니다! 상대방의 물건과 스위치를 원하신다면, 창고에 물품을 추가해보세요.',
    ago: '방금',
    type: 'announcement',
  },
  {
    id: 7,
    message:
      '스위치의 회원이 되신 것을 환영합니다! 상대방의 물건과 스위치를 원하신다면, 창고에 물품을 추가해보세요.',
    ago: '방금',
    type: 'announcement',
  },
  {
    id: 8,
    message:
      '스위치의 회원이 되신 것을 환영합니다! 상대방의 물건과 스위치를 원하신다면, 창고에 물품을 추가해보세요.',
    ago: '방금',
    type: 'announcement',
  },
  {
    id: 9,
    message:
      '스위치의 회원이 되신 것을 환영합니다! 상대방의 물건과 스위치를 원하신다면, 창고에 물품을 추가해보세요.',
    ago: '방금',
    type: 'announcement',
  },
  {
    id: 10,
    message:
      '스위치의 회원이 되신 것을 환영합니다! 상대방의 물건과 스위치를 원하신다면, 창고에 물품을 추가해보세요.',
    ago: '방금',
    type: 'announcement',
  },
  {
    id: 11,
    message:
      '스위치의 회원이 되신 것을 환영합니다! 상대방의 물건과 스위치를 원하신다면, 창고에 물품을 추가해보세요.',
    ago: '방금',
    type: 'announcement',
  },
];

const Notifications = ({ item }: { item: NotificationData }) => {
  const getIconName = (type: string) => {
    switch (type) {
      case 'switch':
        return 'swap-horizontal';
      case 'announcement':
        return 'megaphone-outline';
    }
  };

  const onClick = () => {
    // 어떤 액션
  };

  return (
    <Flexbox.Item pt={30} width={'100%'}>
      <NotiListItem
        data={{
          notification: item.message,
          iconName: getIconName(item.type),
          iconSize: 24,
          ago: item.ago,
        }}
        onPress={onClick}
      />
    </Flexbox.Item>
  );
};

const NotificationsScreen = () => {
  return (
    <ScreenWrapper>
      <Flexbox
        height={'100%'}
        width={'100%'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <Flexbox.Item width={'100%'} padding={10}>
          <FlatList<NotificationData>
            data={ALARM_MOCK_DATA}
            renderItem={Notifications}
            keyExtractor={(item, index) => `${index}`}
            numColumns={1}
            onEndReached={() => {
              console.debug('reacted end');
            }}
            onEndReachedThreshold={0.1}
          />
        </Flexbox.Item>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { NotificationsScreen };
