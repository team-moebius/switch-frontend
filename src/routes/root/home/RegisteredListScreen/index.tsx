import { Flexbox, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

const RegisteredListScreen = () => {
  return (
    <ScreenWrapper>
      {/* write contents */}
      <Flexbox height={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Typography fontSize={12}>RegisteredList</Typography>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { RegisteredListScreen };
