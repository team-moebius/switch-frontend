import { useEffect, useState } from 'react';
import { Box, Flexbox, Icon, Typography } from 'src/components/atom';
import { Field } from 'src/components/molecule';

const SettingScreen = () => {
  // const { changeTheme } = useContext(ThemeContext);
  // ThemeContext에서 themeKey를 받아올 수 있으면 따로 state를 사용 안해도 될 거 같습니다.
  const [theme, setTheme] = useState(false);
  // 이 부분도 나중에 기기 설정을 조회할 수 있다면 좋을 것 같습니다.
  const [isThird, setIsThird] = useState(false);

  const onClickHandler = (opt: 'third' | 'second') => {
    setIsThird(opt === 'third' ? true : false);
  };

  useEffect(() => {
    // 설정값 조회 후 초기 상태 설정
  }, []);

  return (
    <Box padding={10} pt={50}>
      <Box mb={50}>
        <Field
          fieldType='toggle'
          width={'100%'}
          name='darkmode'
          label={<Typography fontSize={20}>다크모드</Typography>}
          value={theme}
          onChange={() => setTheme((prev) => !prev)}
        />
      </Box>
      <Box mb={20}>
        <Typography fontSize={20}>피드 정렬</Typography>
        <Typography fontSize={13}>패드 정렬 방식을 설정합니다.</Typography>
      </Box>
      <Flexbox>
        <Flexbox.Item flex={1}>
          <Field
            fieldType='radio'
            name='feed'
            label={
              <Flexbox flexDirection='column' alignItems='center'>
                <Icon name='grid-outline' size={32} color='black' />
                <Typography fontSize={15}>3단</Typography>
              </Flexbox>
            }
            value={isThird ? true : false}
            onChange={() => onClickHandler('third')}
            labelAlign='center'
            labelPosition='top'
            size={20}
          />
        </Flexbox.Item>
        <Flexbox.Item flex={1}>
          <Field
            fieldType='radio'
            name='feed'
            label={
              <Flexbox flexDirection='column' alignItems='center'>
                <Icon name='grid-outline' size={32} color='black' />
                <Typography fontSize={15}>2단</Typography>
              </Flexbox>
            }
            value={isThird ? false : true}
            onChange={() => onClickHandler('second')}
            labelAlign='center'
            labelPosition='top'
            size={20}
          />
        </Flexbox.Item>
      </Flexbox>
    </Box>
  );
};

export { SettingScreen };
