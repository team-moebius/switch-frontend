import { useEffect, useMemo, useState } from 'react';

import { Button, Flexbox, Typography } from 'src/components/atom';

// mock
const CURRENT_VERSION = '1.0';
const LATEST_VERSION = '1.4';
const updateContents = [
  '기능 1번이 추가됩니다.',
  '기능 2번이 변경됩니다.',
  '기능 3번이 삭제됩니다.',
];

const VersionScreen = () => {
  const [isLatest, setIsLatest] = useState<boolean>();
  const [version, setVersion] = useState<string>();

  const onClickHandler = () => {
    alert('업데이트');
  };

  useEffect(() => {
    // 버전 조회
    setVersion(LATEST_VERSION);
  }, []);

  useEffect(() => {
    setIsLatest(version === CURRENT_VERSION);
  }, [version]);

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
              >{`- ${content}`}</Typography>
            ))}
          </Flexbox.Item>
          <Button onPress={onClickHandler} type={'normal'} size={'medium'}>
            업데이트 하기
          </Button>
        </>
      ),
    [isLatest, version]
  );

  return (
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
  );
};

export { VersionScreen };
