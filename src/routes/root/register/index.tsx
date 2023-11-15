import { createStackNavigator } from '@react-navigation/stack';

import { ScreenWrapper } from 'src/components/template';
import { SwitchDetailForm } from './SwitchDetail/Form';
import { PreferredAddress } from './PreferredAddress';
import { ScreenHeader } from 'src/components/molecule';

const Stack = createStackNavigator();

const RegisterMain = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <SwitchDetailForm navigation={navigation} />
    </ScreenWrapper>
  );
};

const RegisterRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='RegisterMain'
        component={RegisterMain}
        options={{
          header: (props) => {
            return <ScreenHeader {...props} title={'물품등록하기'} />;
          },
        }}
      />
      <Stack.Screen
        name='PreferredAddress'
        component={PreferredAddress}
        options={{
          header: (props) => {
            return <ScreenHeader {...props} title={'스위치 선호 주소'} />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export { RegisterRoute, RegisterMain };
