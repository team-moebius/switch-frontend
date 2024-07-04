import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Meta, StoryFn } from '@storybook/react';
import { HomeRouteParamList } from 'src/routes/root/home';
import { RegisteredListScreen } from 'src/routes/root/home/RegisteredListScreen';

export default {
  title: 'RegisteredList',
  component: RegisteredListScreen,
} as Meta<typeof RegisteredListScreen>;

const Template: StoryFn<typeof RegisteredListScreen> = () => {
  const navigation =
    useNavigation<StackNavigationProp<HomeRouteParamList, 'RegisteredList'>>();
  const route = useRoute<RouteProp<HomeRouteParamList, 'RegisteredList'>>();
  return <RegisteredListScreen navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
