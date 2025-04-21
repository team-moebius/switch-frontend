import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Box, Flexbox } from 'src/components/atom';
import { Separator } from 'src/components/atom/Separator';
import { ChattingListItem } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { ChatRouteParamList } from '.';
import { PADDING } from 'src/assets/theme/base';
import { STUFF_LIST_MOCK } from '../home/SwitchDetailScreen/SwitchList.mock';
import { CompositeScreenProps } from '@react-navigation/native';
import { HomeRouteParamList } from '../home';
import { Alert, FlatList } from 'react-native';
import { ChatAPI } from 'src/api';
import { useCommonInfiniteQuery } from 'src/hooks/useCommonInfiniteQuery';
import { ChatResponse, SliceChatResponse } from '@team-moebius/api-typescript';
import { getPageableContent } from 'src/utils/getPageableContent';

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

interface ChatMainScreenProps {
  itemId?: number;
}

const ChatMainScreen = ({
  navigation,
  route,
}: CompositeScreenProps<
  StackScreenProps<ChatRouteParamList, 'ChatMain'>,
  StackScreenProps<HomeRouteParamList, 'ChatMain'>
>) => {
  const { params: routeParams } = route;
  const { fetchNextPage, data, isFetchingNextPage } =
    useCommonInfiniteQuery<SliceChatResponse>({
      api: (params) => ChatAPI.getChats(params, routeParams.itemId),
      queryString: { size: 20 },
      queryKey: [
        routeParams?.itemId
          ? 'homeRoute_chatMain_ChatAPI_getChats'
          : 'chatRoute_chatMain_ChatAPI_getChats',
      ],
      getNextPageParam(page) {
        let nextPageNumber: number | undefined;
        if (page.pageable && !page.last) {
          nextPageNumber = (page.pageable.pageNumber as number) + 1;
        } else {
          nextPageNumber = undefined;
        }

        return nextPageNumber;
      },
      onSuccess(data) {
        console.debug('✅ home main success!! \n', data);
      },
      onError(err) {
        console.debug('🚧🚧 home main fail!! 🚧🚧 \n', err);
      },
    });

  const handleLoadMoreData = () => {
    if (!isFetchingNextPage) return;
    fetchNextPage();
  };

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
                  // TODO : SwitchDetail로 navigate할 때 params 수정해야 된다.
                  navigation.navigate('SwitchDetail', STUFF_LIST_MOCK[0])
                }
              />
            </Box>
          ))}
        </Flexbox.Item>
        {/* <FlatList<ChatResponse>
          data={getPageableContent(data)}
          renderItem={ChattingListItem}
          keyExtractor={(item) => `${item.id}`}
          numColumns={1}
          onEndReached={handleLoadMoreData}
          onEndReachedThreshold={0.1}
        /> */}
      </Flexbox>
    </ScreenWrapper>
  );
};

export { ChatMainScreen, type ChatMainScreenProps };
