import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Box, Flexbox } from 'src/components/atom';
import { Separator } from 'src/components/atom/Separator';
import { ChattingListItem } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { ChatRouteParamList } from '.';
import { PADDING } from 'src/assets/theme/base';
import { STUFF_LIST_MOCK } from '../home/SwitchDetailScreen/SwitchList.mock';
import { CompositeScreenProps } from '@react-navigation/native';
import { HomeRouteParamList } from '../home';
import { Alert } from 'react-native';

const CHAT_MOCK_DATA = [
  {
    username: '오리',
    selectedItem: '꼬부기',
    message: `The following modules`,
    ago: '5분전',
    isUnread: false,
  },
  {
    username: '청둥오리',
    selectedItem: '꼬부기',
    message: `The following modules couldn't be hot updated: (Full reload needed)
This is usually because the modules which have changed (and their parents) do not know how to hot reload themselves. See https://webpack.js.org/concepts/hot-module-replacement/ for more details.`,
    ago: '20분전',
    isUnread: true,
  },
];

type ApiType = 'ChatMain' | 'SwitchInProgress';

const apiList: Record<ApiType, () => void> = {
  ChatMain: () => Alert.alert('ChatMain 입니다'),
  SwitchInProgress: () => Alert.alert('SwitchInProgress 입니다'),
};

interface ChatMainScreenProps {
  api?: ApiType;
  id?: number;
}

const ChatMainScreen = ({
  navigation,
  route,
}: CompositeScreenProps<
  StackScreenProps<ChatRouteParamList, 'ChatMain'>,
  StackScreenProps<HomeRouteParamList, 'ChatMain'>
>) => {
  return (
    <ScreenWrapper>
      <Flexbox
        width={'100%'}
        height={'100%'}
        pl={PADDING.wrapper.horizontal}
        pr={PADDING.wrapper.horizontal}
      >
        <Flexbox.Item width={'100%'} height={100}>
          {CHAT_MOCK_DATA.map((data, idx) => (
            <Box key={idx} pb={30}>
              <ChattingListItem
                data={{
                  username: data.username,
                  selectedItem: data.selectedItem,
                  message: data.message,
                  ago: data.ago,
                  isUnread: data.isUnread,
                }}
                onPressChatDetail={() => navigation.navigate('ChatDetail')}
                onPressSwitchDetail={() =>
                  navigation.navigate('SwitchDetail', STUFF_LIST_MOCK[0])
                }
              />
            </Box>
          ))}
        </Flexbox.Item>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { ChatMainScreen };
