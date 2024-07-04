import { StoryFn, Meta } from '@storybook/react';

import { SecuritySettingPassword } from 'src/routes/root/my-info/Security/screens/SecuritySettingPassword';
import { StackNavigationProp } from '@react-navigation/stack';
import { SecuritySettingParamList } from 'src/routes/root/my-info/Security';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

export default {
  title: 'SecuritySettingPassword',
  component: SecuritySettingPassword,
} as Meta<typeof SecuritySettingPassword>;

const Template: StoryFn<typeof SecuritySettingPassword> = () => {
  const navigation =
    useNavigation<
      StackNavigationProp<SecuritySettingParamList, 'SecuritySettingPassword'>
    >();
  const route =
    useRoute<RouteProp<SecuritySettingParamList, 'SecuritySettingPassword'>>();
  return <SecuritySettingPassword navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
