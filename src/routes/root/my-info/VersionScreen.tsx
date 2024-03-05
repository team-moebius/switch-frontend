import { useEffect, useMemo, useState } from 'react';

import { Box, Button, Flexbox, Typography } from 'src/components/atom';

import { nativeApplicationVersion, applicationId } from 'expo-application';
import { ScreenWrapper } from 'src/components/template';

// mock
const CURRENT_VERSION = '1.0';
const LATEST_VERSION = '1.4';
const updateContents = [
  '기능 1번이 추가됩니다.',
  '기능 2번이 변경됩니다.',
  '기능 3번이 삭제됩니다.',
];

const VersionScreen = () => {
  // const [version, setVersion] = useState<string>();
  // const isLatest = version === nativeApplicationVersion;

  // 1. 배포 후 applicationId을 사용해서 요청 보내보기
  // 'https://play.google.com/store/apps/details?id=<YOUR_APP_ID>&hl=en'
  // 'https://itunes.apple.com/lookup?id=<YOUR_APP_ID>'
  // 2. 업데이트 후 setVersion 해주기
  // 3. version 바뀌면 nativeApplicationVersion이랑 비교해서
  // isLatest를 설정해주거나, 비교식으로 사용하기
  const [version, setVersion] = useState(nativeApplicationVersion);
  const isLatest = true;

  const onClickHandler = () => {
    // 배포 이후에 app store, play store로 가는 링크(?) 걸어야 됨
    alert('업데이트');
  };

  const renderResult = useMemo(
    () =>
      isLatest ? (
        <>
          <Typography fontSize={15}>스위치가 최신 버전입니다.</Typography>
          <Typography fontSize={15}>{`v ${version}`}</Typography>
        </>
      ) : (
        <>
          <Typography fontSize={15}>스위치 업데이트가 가능합니다.</Typography>
          <Flexbox.Item flex={1} width={'100%'}>
            {updateContents.map((content) => (
              <Typography
                key={content}
                fontSize={15}
              >{`• ${content}`}</Typography>
            ))}
          </Flexbox.Item>
          <Box>
            <Button onPress={onClickHandler} type={'normal'} size={'medium'}>
              업데이트 하기
            </Button>
          </Box>
        </>
      ),
    [isLatest, version]
  );

  return (
    <ScreenWrapper>
      <Flexbox
        height={'100%'}
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap={30}
        padding={10}
      >
        {renderResult}
      </Flexbox>
    </ScreenWrapper>
  );
};

export { VersionScreen };
