import React, { useMemo, useState } from 'react';
import { Pressable } from 'react-native';
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
      >
        <Flexbox.Item alignSelf={'center'}>
          <Typography fontSize={24}>스위치를 완료했습니다.</Typography>
        </Flexbox.Item>
        <Flexbox.Item alignSelf={'center'}>
          <WithMirror
            renderItem={[childrenA, childrenB]}
            mirrorDirection='row'
            centerAxis={<Icon name={'code-outline'} size={20} />}
          />
        </Flexbox.Item>
        <Flexbox.Item alignSelf={'center'}>
          <ScoreQuestion
            rating={mannerRating}
            ratingHandler={(e) => ratingHandler(e, 'manner')}
            maxRating={5}
            fontSize={'inherit'}
            ratingSize={24}
            itemJustify={'center'}
          >
            상대방의 매너는 어땠나요?
          </ScoreQuestion>
        </Flexbox.Item>
        <Flexbox.Item alignSelf={'center'}>
          <ScoreQuestion
            rating={conditionRating}
            ratingHandler={(e) => ratingHandler(e, 'condition')}
            maxRating={5}
            fontSize={'inherit'}
            ratingSize={24}
            itemJustify={'center'}
          >
            물품은 설명된 상태와 얼마나 동일했나요?
          </ScoreQuestion>
        </Flexbox.Item>
        <Flexbox
          width={'100%'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Flexbox>
            <Typography fontSize={14}>평가 유의사항</Typography>
          </Flexbox>
          <Pressable onPress={() => window.alert('clicked')}>
            <Flexbox alignItems='center' justifyContent='flex-end'>
              <Typography fontSize={14}>확인하기</Typography>
              <Icon name='chevron-up' size={24} />
            </Flexbox>
          </Pressable>
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
