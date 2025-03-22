import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StoryFn, Meta } from '@storybook/react';
import { MyInfoParamList } from 'src/routes/root/my-info';
import { BlockUsersList } from 'src/routes/root/my-info/BlockUsersList';

export default {
  title: 'BlockUserList',
  component: BlockUsersList,
} as Meta<typeof BlockUsersList>;

const Template: StoryFn<typeof BlockUsersList> = () => {
  const navigation =
    useNavigation<StackNavigationProp<MyInfoParamList, 'BlockUsers'>>();
  const route = useRoute<RouteProp<MyInfoParamList, 'BlockUsers'>>();
  return <BlockUsersList navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
