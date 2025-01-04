import { createStackNavigator } from '@react-navigation/stack';
import { RegisterFormProps, RegisterFormScreen } from './RegisterFormScreen';
import {
  PreferredAddressProps,
  PreferredAddressScreen,
} from './PreferredAddressScreen';
import { ScreenHeader } from 'src/components/molecule';

type RegisterRouteParamList = {
  RegisterForm: RegisterFormProps;
  PreferredAddress: PreferredAddressProps;
};

const Stack = createStackNavigator<RegisterRouteParamList>();

const RegisterRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='RegisterForm'
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
