import { ScreenWrapper, WithMirror } from 'src/components/template';
import { ItemListContent } from '../HomeMainScreen/content/ItemListContent';
import { useCallback, useContext, useMemo, useState } from 'react';
import { Button, Flexbox, Icon, Modal, Typography } from 'src/components/atom';
import { ItemDetail } from 'src/components/molecule/SwitchListItem';
import { WithImage, fontSizeStyle } from 'src/components/template/WithImage';
import { ItemApi } from 'src/api';
import { UserContext } from 'src/context/user';
import { Alert } from 'react-native';

const MY_ITEM = {
  name: '이브이',
  src: 'https://cdn-gq.github.io/pokemon/133.webp',
};

const SELECTED_ITEM = {
  name: '꼬부기',
  src: 'https://cdn-gq.github.io/pokemon/7.webp',
};

const renderChildren = (
  item: ItemDetail,
  fontSize?: keyof typeof fontSizeStyle,
  myItem?: boolean
) => {
  return (
    <Flexbox
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      gap={10}
    >
      {/** myItem prop 대신 data상에서 나의 아이템인지 확인 할 수 있는 속성이 있다면 대신 사용해도 좋을 것 같아요*/}
      <Typography fontSize={17}>{myItem ? '나의' : '상대의'}</Typography>
      <WithImage
        text={item?.name}
        src={item?.src || ''}
        fontSize={fontSize}
        imageWidth={70}
        imageHeight={70}
        imageResizeMode={'center'}
        cardDirection={'column'}
      />
    </Flexbox>
  );
};

const RegisteredListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { userId } = useContext(UserContext);

  const handleModalOpen = useCallback(() => {
    setModalVisible((prev) => !prev);
  }, []);

  const childrenA = useMemo(
    () => renderChildren(MY_ITEM, 'switchList', true),
    []
  );
  const childrenB = useMemo(
    () => renderChildren(SELECTED_ITEM, 'switchList'),
    []
  );

  return (
    <ScreenWrapper>
      <ItemListContent
        onClickList={handleModalOpen}
        withTitleOnly
        api={
          userId
            ? (params) =>
                ItemApi.getItems(
                  Number(userId),
                  params.page,
                  params.size,
                  params.sort
                )
            : () =>
                Promise.reject(
                  Alert.alert(
                    '알림',
                    '비정상적인 접근입니다. 다시 로그인 해주세요.'
                  )
                )
        }
      />
      <Modal
        visible={modalVisible}
        width={'80%'}
        height={'45%'}
        backgroundColor={'#fefefe'}
        onPressBack={() => setModalVisible(false)}
        position={'center'}
      >
        <Flexbox
          width={'100%'}
          height={'100%'}
          margin={'auto'}
          flexDirection={'column'}
          justifyContent={'center'}
          gap={50}
        >
          <Flexbox.Item alignSelf='center'>
            <WithMirror
              renderItem={[childrenA, childrenB]}
              mirrorDirection={'row'}
              centerAxis={<Icon name={'swap-horizontal'} size={20} />}
            />
          </Flexbox.Item>
          <Flexbox.Item alignSelf='center'>
            <Typography fontSize={17}>스위치를 제안합니다.</Typography>
          </Flexbox.Item>
          <Flexbox
            width={'80%'}
            ml={'auto'}
            mr={'auto'}
            justifyContent={'center'}
            gap={5}
          >
            <Flexbox.Item margin={'auto'}>
              <Button
                type='cancel'
                size='medium'
                onPress={() => setModalVisible(false)}
              >
                취소
              </Button>
            </Flexbox.Item>
            <Flexbox.Item margin={'auto'}>
              <Button
                type='normal'
                size='medium'
                onPress={() => console.log('스위치')}
              >
                확인
              </Button>
            </Flexbox.Item>
          </Flexbox>
        </Flexbox>
      </Modal>
    </ScreenWrapper>
  );
};

export { RegisteredListScreen };
