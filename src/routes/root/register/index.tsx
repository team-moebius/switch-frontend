import { createStackNavigator } from '@react-navigation/stack';
import { RegisterFormProps, RegisterFormScreen } from './RegisterFormScreen';
import { PreferredAddressScreen } from './PreferredAddressScreen';
import { ScreenHeader } from 'src/components/molecule';

type RegisterRouteParamList = {
  RegisterMain: RegisterFormProps;
  PreferredAddress: undefined;
};

const Stack = createStackNavigator<RegisterRouteParamList>();

const RegisterRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='RegisterMain'
        component={RegisterFormScreen}
        initialParams={{ initialData: undefined }}
        options={{
          header: (props) => {
            return <ScreenHeader {...props} center={'물품등록하기'} />;
          },
        }}
      />
      <Stack.Screen
        name='PreferredAddress'
        component={PreferredAddressScreen}
        options={{
          header: (props) => {
            return <ScreenHeader {...props} center={'스위치 선호 주소'} />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export { RegisterRoute, type RegisterRouteParamList };
