import { Flexbox } from 'src/components/atom';
import { PressableIcon, ScreenHeader } from 'src/components/molecule';

import { ChatMainScreen } from './ChatMainScreen';
import { SwitchResultScreen } from './SwitchResultScreen';
import { ChatDetailScreen } from './ChatDetailScreen';
import { ReportScreenProps, ReportsScreen } from '../home/ReportsScreen';

import { createStackNavigator } from '@react-navigation/stack';

type ChatRouteParamList = {
  ChatMain: undefined;
  SwitchResult: undefined;
  ChatDetail: undefined;
  Report: ReportScreenProps;
};

const Stack = createStackNavigator<ChatRouteParamList>();

const ChatRoute = () => {
  return (
    <>
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
                      <Flexbox width={'100%'} justifyContent={'flex-end'}>
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
          <Stack.Screen name={'ChatDetail'} component={ChatDetailScreen} />
        </Stack.Group>
        <Stack.Screen
          name={'Report'}
          component={ReportsScreen}
          options={{
            header: (props) => {
              return <ScreenHeader {...props} center={'신고하기'} />;
            },
            // presentation:'modal'
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export { ChatRoute, type ChatRouteParamList };
