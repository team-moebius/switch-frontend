import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Meta, StoryFn } from '@storybook/react';
import { HomeRouteParamList } from 'src/routes/root/home';
import { ReportsScreen } from 'src/routes/root/home/ReportsScreen';

export default {
  title: 'Report',
  component: ReportsScreen,
} as Meta<typeof ReportsScreen>;

const Template: StoryFn<typeof ReportsScreen> = () => {
  const navigation =
    useNavigation<StackNavigationProp<HomeRouteParamList, 'Report'>>();
  const route = useRoute<RouteProp<HomeRouteParamList, 'Report'>>();
  return <ReportsScreen navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = ' default';
story.args = {};
