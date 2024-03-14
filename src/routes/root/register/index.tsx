import { createStackNavigator } from '@react-navigation/stack';
import { SwitchDetailForm } from './ItemDetail/Form';
import { PreferredAddress } from './PreferredAddress';
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
        component={SwitchDetailForm}
        options={{
          header: (props) => {
            return <ScreenHeader {...props} center={'물품등록하기'} />;
          },
        }}
      />
      <Stack.Screen
        name='PreferredAddress'
        component={PreferredAddress}
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
