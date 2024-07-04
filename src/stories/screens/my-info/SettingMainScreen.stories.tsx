import { StoryFn, Meta } from '@storybook/react';
import { SettingMainScreen } from 'src/routes/root/my-info/SettingMainScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { MyInfoParamList } from 'src/routes/root/my-info';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

export default {
  title: 'SettingMainScreen',
  component: SettingMainScreen,
} as Meta<typeof SettingMainScreen>;

const Template: StoryFn<typeof SettingMainScreen> = () => {
  const navigation =
    useNavigation<StackNavigationProp<MyInfoParamList, 'SettingMain'>>();
  const route = useRoute<RouteProp<MyInfoParamList, 'SettingMain'>>();
  return <SettingMainScreen navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
