import { PADDING } from 'src/assets/theme/base';
import { Box, Button } from 'src/components/atom';

interface SwitchDetailButtonProp {
  onPressPropose: () => void;
  onPressRevoke: () => void;
  isSuggested: boolean;
}

const SwitchDetailButton = ({
  onPressPropose,
  onPressRevoke,
  isSuggested,
}: SwitchDetailButtonProp) => {
  return (
    <>
      {isSuggested ? (
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
