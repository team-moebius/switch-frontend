import { createStackNavigator } from '@react-navigation/stack';
import { ChatMainScreen } from './ChatMainScreen';
import { SwitchResultScreen } from './SwitchResultScreen';
import { ChatDetailScreen } from './ChatDetailScreen';
import { PressableIcon, ScreenHeader } from 'src/components/molecule';
import { Flexbox } from 'src/components/atom';

const Stack = createStackNavigator();

const ChatRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={'ChatMain'}
          component={ChatMainScreen}
          options={{
            header: (props) => {
              return (
                <ScreenHeader
                  {...props}
                  center={'채팅'}
                  right={
                    <Flexbox width={'100%'} justifyContent={'flex-end'} pr={16}>
                      <PressableIcon
                        size={24}
                        name={'notifications-outline'}
                        onPress={() => {
                          props.navigation.navigate('Notifications');
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
          name={'SwitchResult'}
          component={SwitchResultScreen}
          options={{
            header: (props) => {
              return <ScreenHeader {...props} />;
            },
          }}
        />
        <Stack.Screen
          name={'ChatDetail'}
          component={ChatDetailScreen}
          options={{
            header: (props) => {
              return <ScreenHeader {...props} center={'채팅 상대 닉네임'} />;
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export { ChatRoute };
