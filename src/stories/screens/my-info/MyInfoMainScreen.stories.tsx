import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StoryFn, Meta } from '@storybook/react';
import { MyInfoParamList } from 'src/routes/root/my-info';
import { MyInfoMainScreen } from 'src/routes/root/my-info/MyInfoMainScreen';

export default {
  title: 'MyInfoMainScreen',
  component: MyInfoMainScreen,
} as Meta<typeof MyInfoMainScreen>;

const Template: StoryFn<typeof MyInfoMainScreen> = () => {
  const navigation =
    useNavigation<StackNavigationProp<MyInfoParamList, 'MyInfoMain'>>();
  const route = useRoute<RouteProp<MyInfoParamList, 'MyInfoMain'>>();
  return <MyInfoMainScreen navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
