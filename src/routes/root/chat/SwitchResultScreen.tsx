import { useMemo, useState } from 'react';
import { FONT_SIZE, PADDING } from 'src/assets/theme/base';
import { Box, Button, Flexbox, Icon, Typography } from 'src/components/atom';
import { ScoreQuestion } from 'src/components/molecule';
import { ScreenWrapper, WithMirror } from 'src/components/template';
import { WithImage } from 'src/components/template/WithImage';

//TODO: 스위치 결과에 해당하는 페이지로, 임시로 ChatDetailScreen의 '스위치' 버튼 누르면 라우트 되도록 할 것.
const SWITCH_RESULT_MOCK = {
  id: 1,
  myItem: {
    name: '꼬부기',
    src: 'https://cdn-gq.github.io/pokemon/7.webp',
  },
  selectedItem: {
    name: '이브이',
    src: 'https://cdn-gq.github.io/pokemon/133.webp',
  },
};
const renderChildren = (children: string, src: string) => {
  return (
    <WithImage
      text={children}
      src={src}
      imageHeight={90}
      cardDirection={'column'}
      imageResizeMode={'center'}
      layoutStyle={{
        titleContainerLayout: {
          alignSelf: 'center',
        },
      }}
    />
  );
};

const SwitchResultScreen = () => {
  const { myItem, selectedItem } = SWITCH_RESULT_MOCK;
  const [mannerRating, setMannerRating] = useState(0);
  const [conditionRating, setConditionRating] = useState(0);

  const ratingHandler = (rating: number, type: string) => {
    if (type === 'manner') {
      setMannerRating(rating);
    } else if (type === 'condition') {
      setConditionRating(rating);
    }
  };

  const childrenA = useMemo(() => {
    return renderChildren(myItem.name, myItem.src);
  }, [myItem]);

  const childrenB = useMemo(() => {
    return renderChildren(selectedItem.name, selectedItem.src);
  }, [selectedItem]);

  return (
    <ScreenWrapper>
      <Flexbox
        width={'100%'}
        height={'100%'}
        gap={40}
        flexDirection={'column'}
        justifyContent={'center'}
        pl={PADDING.wrapper.horizontal}
        pr={PADDING.wrapper.horizontal}
      >
        <Flexbox.Item alignSelf={'center'}>
          <Typography fontSize={24}>스위치를 완료했습니다.</Typography>
        </Flexbox.Item>
        <Flexbox.Item alignSelf={'center'}>
          <WithMirror
            renderItem={[childrenA, childrenB]}
            mirrorDirection='row'
            centerAxis={<Icon name={'swap-horizontal'} size={20} />}
          />
        </Flexbox.Item>
        <Flexbox flexDirection='column' alignItems='center' width={'100%'}>
          <Typography fontSize={FONT_SIZE.bigger}>
            상대방의 매너는 어땠나요?
          </Typography>
          <Flexbox.Item alignSelf={'center'}>
            <ScoreQuestion
              rating={mannerRating}
              ratingHandler={(e) => ratingHandler(e, 'manner')}
              maxRating={5}
              ratingSize={24}
              itemJustify={'center'}
            />
          </Flexbox.Item>
        </Flexbox>
        <Flexbox flexDirection='column' alignItems='center' width={'100%'}>
          <Typography fontSize={FONT_SIZE.bigger}>
            물품은 설명된 상태와 얼마나 동일했나요?
          </Typography>
          <Flexbox.Item alignSelf={'center'}>
            <ScoreQuestion
              rating={conditionRating}
              ratingHandler={(e) => ratingHandler(e, 'condition')}
              maxRating={5}
              ratingSize={24}
              itemJustify={'center'}
            />
          </Flexbox.Item>
        </Flexbox>
        <Flexbox width={'100%'} justifyContent={'space-between'}>
          <Box width={'48%'}>
            <Button
              type='cancel'
              size='medium'
              onPress={() => console.log('건너뛰어')}
            >
              건너뛰기
            </Button>
          </Box>
          <Box width={'48%'}>
            <Button
              type='normal'
              size='medium'
              onPress={() => console.log('확인')}
            >
              확인
            </Button>
          </Box>
        </Flexbox>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { SwitchResultScreen };
