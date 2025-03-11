import { ScreenWrapper, WithMirror } from 'src/components/template';
import { ItemListContent } from '../HomeMainScreen/content/ItemListContent';
import { useCallback, useContext, useMemo, useRef, useState } from 'react';
import { Button, Flexbox, Icon, Modal, Typography } from 'src/components/atom';
import { ItemDetail } from 'src/components/molecule/SwitchListItem';
import { WithImage, fontSizeStyle } from 'src/components/template/WithImage';
import { ItemApi, SwitchAPI } from 'src/api';
import { UserContext } from 'src/context/user';
import { Alert } from 'react-native';
import { COLORS, FONT_SIZE, PADDING } from 'src/assets/theme/base';
import { ItemResponse, SwitchRequest } from '@team-moebius/api-typescript';
import { useCommonMutation } from 'src/hooks/useCommonMutation';

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
      <Typography fontSize={FONT_SIZE.bigger}>
        {myItem ? '나의' : '상대의'}
      </Typography>
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

interface RegisteredListProp {
  pairedItemId: number;
  pairedUserId: number;
  pairedName: string;
  pairedImage: string;
}

const RegisteredListScreen = ({
  pairedItemId,
  pairedUserId,
  pairedName,
  pairedImage,
}: RegisteredListProp) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { userId } = useContext(UserContext);
  const myItem = useRef<ItemResponse>(undefined);

  const { mutate: createMutate } = useCommonMutation<number, SwitchRequest>({
    api: SwitchAPI.createSwitch,
    onSuccess(data, varaiables) {
      console.debug(
        '\n\n\n ✅ RegisterList_SwitchApi_createSwitch data ✅ \n\n',
        data,
        varaiables
      );
    },
    onError(error, varaiables) {
      console.debug(
        '\n\n\n 🚨 RegisterList_SwitchApi_createSwitch error 🚨 \n\n',
        error,
        varaiables
      );
    },
  });

  const handleModalOpen = useCallback((data: ItemResponse) => {
    myItem.current = data;
    setModalVisible(true);
  }, []);

  const onPressSwitch = () => {
    if (myItem.current && myItem.current.id) {
      createMutate({
        itemId: myItem.current.id,
        userId: +(userId as string),
        pairedItemId,
        pairedUserId,
      });
    }
  };

  const onPressCancel = () => {
    setModalVisible(false);
    myItem.current = undefined;
  };

  const childrenA = useMemo(
    () =>
      renderChildren(
        {
          name: myItem.current?.name ?? '',
          src: myItem.current?.images ? myItem.current?.images[0] : '',
        },
        'switchList',
        true
      ),
    []
  );
  const childrenB = useMemo(
    () => renderChildren({ name: pairedName, src: pairedImage }, 'switchList'),
    []
  );

  return (
    <ScreenWrapper>
      <Flexbox
        pl={PADDING.wrapper.horizontal}
        pr={PADDING.wrapper.horizontal}
        height={'100%'}
      >
        <ItemListContent
          onClickList={handleModalOpen}
          withTitleOnly
          queryKey={'myInfoMain_ItemApi_getItemsByLoginUser'}
          api={
            userId
              ? (params) =>
                  ItemApi.getItemsByLoginUser(
                    'in-progress',
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
      </Flexbox>
      <Modal
        visible={modalVisible}
        width={'80%'}
        height={'45%'}
        backgroundColor={COLORS.container_background}
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
            <Typography fontSize={FONT_SIZE.bigger}>
              스위치를 제안합니다.
            </Typography>
          </Flexbox.Item>
          <Flexbox
            width={'80%'}
            ml={'auto'}
            mr={'auto'}
            justifyContent={'center'}
            gap={5}
          >
            <Flexbox.Item width={'50%'}>
              <Button type='warning' size='medium' onPress={onPressCancel}>
                취소
              </Button>
            </Flexbox.Item>
            <Flexbox.Item width={'50%'}>
              <Button
                type='normal'
                size='medium'
                // TODO : chatting room 생성으로 이어져야 함
                onPress={onPressSwitch}
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
