import React from 'react';
import { Flexbox, Typography } from '../atom';
import { SwitchList } from '../template/SwitchList';
import WithSwitchList from '../template/WithSwitchList';

interface ChattingListItemProps {
  data: {
    username: string;
    selectedItem: string;
    message: string;
    ago: string;
  };
}

const ChattingListItem = ({ data, ...props }: ChattingListItemProps) => {
  const { username, selectedItem, message, ago } = data;
  return (
    <WithSwitchList
      itemA={username}
      itemB={selectedItem}
      message={message}
      ago={ago}
    />

    // <Flexbox gap={20}>
    //   <Flexbox flexDirection='column' gap={10}>
    //     <Flexbox.Item>
    //       <SwitchList itemA={username} itemB={selectedItem} />
    //     </Flexbox.Item>
    //     <Flexbox gap={10}>
    //       <Flexbox.Item
    //         width={6}
    //         height={6}
    //         backgroundColor='red'
    //         borderRadius={50}
    //       />
    //       <Flexbox.Item flex={1}>
    //         <Typography fontSize={15} numberOfLines={1} ellipsizeMode='tail'>
    //           {message}
    //         </Typography>
    //       </Flexbox.Item>
    //     </Flexbox>
    //   </Flexbox>
    //   <Flexbox.Item alignSelf='center'>
    //     <Typography fontSize={13}>{ago}</Typography>
    //   </Flexbox.Item>
    // </Flexbox>
  );
};

export { ChattingListItem, ChattingListItemProps };
