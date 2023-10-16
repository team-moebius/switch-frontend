import React from 'react';
import { Flexbox } from 'src/components/atom';
import { Separator } from 'src/components/atom/Separator';
import { ChattingListItem } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';

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

const ChatMainScreen = () => {
  return (
    <ScreenWrapper>
      <Flexbox width={'100%'} height={'100%'} pt={50}>
        <Flexbox.Item width={'100%'} height={100}>
          {CHAT_MOCK_DATA.map((data, idx) => (
            <React.Fragment key={idx}>
              <Separator />
              <ChattingListItem
                data={{
                  username: data.username,
                  selectedItem: data.selectedItem,
                  message: data.message,
                  ago: data.ago,
                  isUnread: data.isUnread,
                }}
                onPress={() => window.alert('chat detail screen')}
              />
              {idx === CHAT_MOCK_DATA.length - 1 && (
                <Separator key={'separator' + idx} />
              )}
            </React.Fragment>
          ))}
        </Flexbox.Item>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { ChatMainScreen };
