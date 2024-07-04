import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Meta, StoryFn } from '@storybook/react';
import { HomeRouteParamList } from 'src/routes/root/home';
import { SwitchDetailScreen } from 'src/routes/root/home/SwitchDetailScreen';

export default {
  title: 'SwitchDetail',
  component: SwitchDetailScreen,
} as Meta<typeof SwitchDetailScreen>;

const Template: StoryFn<typeof SwitchDetailScreen> = () => {
  const navigation =
    useNavigation<StackNavigationProp<HomeRouteParamList, 'SwitchDetail'>>();
  const route = useRoute<RouteProp<HomeRouteParamList, 'SwitchDetail'>>();
  return <SwitchDetailScreen navigation={navigation} route={route} />;
};
export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
