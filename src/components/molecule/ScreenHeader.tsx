import { StackHeaderProps } from '@react-navigation/stack';
import { ReactNode, useContext } from 'react';
import { Pressable } from 'react-native';
import { ThemeContext } from 'src/context/theme';
import { Flexbox, Icon, Typography } from '../atom';
import { FlexboxProps } from '../atom/Flexbox';

interface ScreenHeaderProps extends StackHeaderProps {
  title?: string;
  right?: ReactNode;
  backVisible?: boolean;
  containerStyle?: FlexboxProps;
}

const DEFAULT_STYLE = {
  width: '100%',
  height: 50,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
} as FlexboxProps;

const ScreenHeader = ({
  title = '',
  backVisible = true,
  right,
  // back,
  navigation,
  containerStyle,
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
        {backVisible && navigation.canGoBack() && (
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon size={24} name={'arrow-back'} />
          </Pressable>
        )}
      </Flexbox.Item>
      <Flexbox.Item flex={3}>
        <Flexbox width={'100%'} justifyContent={'center'}>
          <Typography fontSize={20} color={color.neutral['300']}>
            {title}
          </Typography>
        </Flexbox>
      </Flexbox.Item>
      <Flexbox.Item flex={1}>{right}</Flexbox.Item>
    </Flexbox>
  );
};

export { ScreenHeader, ScreenHeaderProps };