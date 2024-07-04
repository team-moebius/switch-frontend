import { StoryFn, Meta } from '@storybook/react';
import { MyInfoEditScreen } from 'src/routes/root/my-info/MyInfoEditScreen';
import { MyInfoParamList } from 'src/routes/root/my-info';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

export default {
  title: 'MyInfoEditScreen',
  component: MyInfoEditScreen,
} as Meta<typeof MyInfoEditScreen>;

const Template: StoryFn<typeof MyInfoEditScreen> = () => {
  const navigation =
    useNavigation<StackNavigationProp<MyInfoParamList, 'MyInfoEdit'>>();
  const route = useRoute<RouteProp<MyInfoParamList, 'MyInfoEdit'>>();
  return <MyInfoEditScreen navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
