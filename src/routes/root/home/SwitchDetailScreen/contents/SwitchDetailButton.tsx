import { View, Text } from 'react-native';
import { PADDING } from 'src/assets/theme/base';
import { Box, Button, Flexbox } from 'src/components/atom';

interface SwitchDetailButtonProp {
  onPressPropose: () => void;
  onPressRevoke: () => void;
  onPressSwitchInProgress: () => void;
  isMine: boolean;
  isSuggested: boolean;
}

const SwitchDetailButton = ({
  onPressPropose,
  onPressRevoke,
  onPressSwitchInProgress,
  isMine,
  isSuggested,
}: SwitchDetailButtonProp) => {
  return (
    <>
      {!isMine ? (
        <Box
          pl={PADDING.wrapper.horizontal}
          pr={PADDING.wrapper.horizontal}
          pb={25}
        >
          <Button
            type={'normal'}
            size={'medium'}
            onPress={onPressSwitchInProgress}
          >
            {/* TODO : props 추가해서 변수로 넣기 */}
            진행 중인 N건의 스위치 보기
          </Button>
        </Box>
      ) : isSuggested ? (
        <Box
          pl={PADDING.wrapper.horizontal}
          pr={PADDING.wrapper.horizontal}
          pb={25}
        >
          <Button type={'warning'} size={'medium'} onPress={onPressRevoke}>
            요청 취소하기
          </Button>
        </Box>
      ) : (
        <Box
          pl={PADDING.wrapper.horizontal}
          pr={PADDING.wrapper.horizontal}
          pb={25}
        >
          <Button type={'normal'} size={'medium'} onPress={onPressPropose}>
            스위치 요청하기
          </Button>
        </Box>
      )}
    </>
  );
};

export { SwitchDetailButton };
