import { useState } from 'react';
import { Box, Flexbox, Icon, Typography } from 'src/components/atom';
import { Field } from 'src/components/molecule';

const SettingScreen = () => {
  const [theme, setTheme] = useState(false);
  const [isThird, setIsThird] = useState(false);

  const onClickHandler = (opt: 'third' | 'second') => {
    setIsThird(opt === 'third' ? true : false);
  };

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
          childrenAlign='center'
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
            height={170}
            label={
              <Flexbox flexDirection='column' alignItems='center'>
                <Box height={60}>
                  <Icon name='apps-sharp' size={50} color='black' />
                </Box>
                <Typography fontSize={15}>3단</Typography>
              </Flexbox>
            }
            value={isThird ? true : false}
            onChange={() => onClickHandler('third')}
            labelAlign='center'
            labelPosition='top'
            size={25}
          />
        </Flexbox.Item>
        <Flexbox.Item flex={1}>
          <Field
            fieldType='radio'
            name='feed'
            height={170}
            label={
              <Flexbox flexDirection='column' alignItems='center'>
                <Box height={60}>
                  <Icon name='grid-sharp' size={50} color='black' />
                </Box>
                <Typography fontSize={15}>2단</Typography>
              </Flexbox>
            }
            value={isThird ? false : true}
            onChange={() => onClickHandler('second')}
            labelAlign='center'
            labelPosition='top'
            size={25}
          />
        </Flexbox.Item>
      </Flexbox>
    </Box>
  );
};

export { SettingScreen };
