import { Flexbox, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

const NotificationsScreen = () => {
  return (
    <ScreenWrapper>
      {/* write contents */}
      <Flexbox height={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Typography fontSize={12}>Notifications</Typography>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { NotificationsScreen };
