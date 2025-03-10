import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FONT_SIZE } from 'src/assets/theme/base';
import { Box, Button, Flexbox, Icon, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';
import { ChatRouteParamList } from 'src/routes/root/chat';
import { HomeRouteParamList } from '../..';

const ErrorFallbackUI = ({
  navigation,
}: {
  navigation: CompositeNavigationProp<
    StackNavigationProp<HomeRouteParamList, 'SwitchDetail'>,
    StackNavigationProp<ChatRouteParamList, 'SwitchDetail'>
  >;
}) => {
  return (
    <ScreenWrapper>
      <Flexbox
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        height={'90%'}
        rowGap={20}
      >
        <Typography fontSize={FONT_SIZE.header}>
          에러가 발생했습니다 :(
        </Typography>
        <Icon name={'build-outline'} size={50} />
        <Box width={'50%'}>
          <Button
            type={'warning'}
            size={'medium'}
            onPress={navigation.goBack}
            children={'뒤로가기'}
          />
        </Box>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { ErrorFallbackUI };
