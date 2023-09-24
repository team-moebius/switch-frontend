import { useEffect } from 'react';
import { Flexbox, Typography } from 'src/components/atom';

const FarewellScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Sign');
    }, 3000);
  }, []);
  return (
    <Flexbox alignItems='center' justifyContent='center' height={'100%'}>
      <Typography fontSize={20}>
        그 동안 스위치를 이용해 주셔서 감사합니다.
      </Typography>
    </Flexbox>
  );
};

export { FarewellScreen };