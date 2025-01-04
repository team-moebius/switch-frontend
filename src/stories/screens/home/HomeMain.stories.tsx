import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Meta, StoryFn } from '@storybook/react';
import { HomeRouteParamList } from 'src/routes/root/home';
import { HomeMainScreen } from 'src/routes/root/home/HomeMainScreen';

export default {
  title: 'HomeMain',
  component: HomeMainScreen,
} as Meta<typeof HomeMainScreen>;

const Template: StoryFn<typeof HomeMainScreen> = () => {
  const navigation =
    useNavigation<StackNavigationProp<HomeRouteParamList, 'HomeMain'>>();
  const route = useRoute<RouteProp<HomeRouteParamList, 'HomeMain'>>();
  return <HomeMainScreen navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
