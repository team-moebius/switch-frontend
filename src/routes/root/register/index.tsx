import { createStackNavigator } from '@react-navigation/stack';
import { RegisterFormScreen } from './RegisterFormScreen';
import { PreferredAddressScreen } from './PreferredAddressScreen';
import { ScreenHeader } from 'src/components/molecule';

type RegisterParamList = {
  RegisterMain: undefined;
  PreferredAddress: undefined;
};

const Stack = createStackNavigator<RegisterParamList>();

const RegisterRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='RegisterMain'
        component={RegisterFormScreen}
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

export { RegisterRoute };
