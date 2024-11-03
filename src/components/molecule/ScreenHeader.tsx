import { StackHeaderProps } from '@react-navigation/stack';
import { ReactNode, useContext } from 'react';
import { Pressable } from 'react-native';
import { ThemeContext } from 'src/context/theme';
import { Flexbox, Icon, Typography } from '../atom';
import { FlexboxProps } from '../atom/Flexbox';
import { FONT_SIZE, PADDING } from 'src/assets/theme/base';

interface ScreenHeaderProps extends StackHeaderProps {
  center?: ReactNode;
  right?: ReactNode;
  backVisible?: boolean;
  containerStyle?: FlexboxProps;
  setModalVisible?: (value: React.SetStateAction<boolean>) => void;
  isConfirmGoBack?: boolean;
}

const DEFAULT_STYLE = {
  width: '100%',
  height: 50,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  pl: PADDING.wrapper.horizontal,
  pr: PADDING.wrapper.horizontal,
  pt: 10,
  pb: 10,
} as FlexboxProps;

const ScreenHeader = ({
  center = '',
  backVisible = true,
  right,
  // back,
  navigation,
  containerStyle,
  setModalVisible,
  isConfirmGoBack,
}: ScreenHeaderProps) => {
  const { color } = useContext(ThemeContext);
  // const routeName = getFocusedRouteNameFromRoute(route);

  return (
    <Flexbox
      {...DEFAULT_STYLE}
      {...containerStyle}
      backgroundColor={
        containerStyle?.backgroundColor || color.container_background
      }
    >
      <Flexbox.Item flex={1}>
        <Flexbox width={'100%'}>
          {backVisible && navigation.canGoBack() && (
            <Pressable
              onPress={() => {
                if (isConfirmGoBack && setModalVisible) {
                  setModalVisible(true);
                } else navigation.goBack();
              }}
            >
              <Icon size={24} name={'chevron-back'} />
            </Pressable>
          )}
        </Flexbox>
      </Flexbox.Item>
      <Flexbox.Item flex={3}>
        <Flexbox width={'100%'} justifyContent={'center'}>
          {typeof center === 'string' ? (
            <Typography fontSize={FONT_SIZE.header} color={color.text}>
              {center}
            </Typography>
          ) : (
            center
          )}
        </Flexbox>
      </Flexbox.Item>
      <Flexbox.Item flex={1}>{right}</Flexbox.Item>
    </Flexbox>
  );
};

export { ScreenHeader, ScreenHeaderProps };
