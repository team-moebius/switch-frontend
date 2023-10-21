import { createStackNavigator } from '@react-navigation/stack';
import { useCallback, useContext, useState } from 'react';

import { Button, Flexbox, IconButton, TextInput } from 'src/components/atom';

import {
  ScreenHeader,
  ScreenHeaderProps,
} from 'src/components/molecule/ScreenHeader';
import { ThemeContext } from 'src/context/theme';
import { HomeMainScreen } from './HomeMainScreen';
import { SwitchDetailScreen } from './HomeMainScreen/SwitchDetailScreen';
import { NotificationsScreen } from './NotificationsScreen';

const Stack = createStackNavigator();

const HomeRouteHeader = ({
  onSearch,
  right,
}: Pick<ScreenHeaderProps, 'right'> & {
  onSearch?: (value: string) => void;
}) => {
  const { color } = useContext(ThemeContext);
  const [value, setValue] = useState('');
  const changeHandler = useCallback(
    (value: string) => {
      setValue(value);
      onSearch && onSearch(value);
    },
    [onSearch]
  );
  return (
    <Flexbox
      width={'100%'}
      padding={16}
      backgroundColor={color.container_background}
      justifyContent={'space-around'}
      alignItems={'center'}
      height={60}
      flexDirection={'row'}
    >
      <Flexbox.Item flex={4}>
        <TextInput
          width={'100%'}
          name={'search'}
          value={value}
          onChangeText={changeHandler}
        />
      </Flexbox.Item>
      <Flexbox.Item flex={1}>{right}</Flexbox.Item>
    </Flexbox>
  );
};

const HomeRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={'HomeMain'}
          component={HomeMainScreen}
          options={{
            header: ({ navigation }) => {
              return (
                <HomeRouteHeader
                  onSearch={(value) => {
                    navigation.setParams({
                      search: value,
                    });
                  }}
                  right={
                    <Flexbox width={'100%'} justifyContent={'flex-end'}>
                      <IconButton
                        size={24}
                        name={'notifications-outline'}
                        onPress={() => {
                          navigation.navigate('Notifications');
                        }}
                      />
                    </Flexbox>
                  }
                />
              );
            },
          }}
        />
        <Stack.Screen
          name={'SwitchDetail'}
          component={SwitchDetailScreen}
          options={{
            header: (props) => {
              return (
                <ScreenHeader
                  {...props}
                  containerStyle={{
                    backgroundColor: 'transparent',
                    position: 'absolute',
                  }}
                />
              );
            },
          }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name={'Notifications'}
          component={NotificationsScreen}
          options={{
            header: (props) => (
              <ScreenHeader
                {...props}
                title={'알림'}
                right={
                  <Flexbox width={'100%'} justifyContent={'flex-end'}>
                    <Button
                      size={'medium'}
                      type={'transparent'}
                      onPress={() => {
                        props.navigation.setParams({ isEditMode: true });
                      }}
                    >
                      편집
                    </Button>
                  </Flexbox>
                }
              />
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export { HomeRoute };
