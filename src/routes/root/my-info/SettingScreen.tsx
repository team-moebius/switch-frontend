import { useContext, useEffect } from 'react';
import { DARK_MODE, FEED_RANGE, localStore } from 'src/common/localStore';

import { Box, Flexbox, Icon, Typography } from 'src/components/atom';
import { Field } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';

import { UserContext } from 'src/context/user';

const SettingScreen = () => {
  const { onChangeDarkMode, onChangeFeedRange, darkMode, isFeedThird } =
    useContext(UserContext);

  return (
    <ScreenWrapper>
      <Box padding={10} pt={50}>
        <Box mb={50}>
          <Field
            fieldType='toggle'
            width={'100%'}
            name='darkmode'
            label={<Typography fontSize={20}>다크모드</Typography>}
            value={darkMode}
            onChange={(value) => onChangeDarkMode(value['darkmode'])}
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
              value={isFeedThird ? true : false}
              onChange={() => onChangeFeedRange(true)}
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
              value={isFeedThird ? false : true}
              onChange={() => onChangeFeedRange(false)}
              labelAlign='center'
              labelPosition='top'
              size={25}
            />
          </Flexbox.Item>
        </Flexbox>
      </Box>
    </ScreenWrapper>
  );
};

export { SettingScreen };
