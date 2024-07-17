import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StoryFn, Meta } from '@storybook/react';
import { FavoriteRouteParamList } from 'src/routes/root/favorite';
import { FavoriteMainScreen } from 'src/routes/root/favorite/FavoriteMainScreen';

export default {
  title: 'FavoriteMainScreen',
  component: FavoriteMainScreen,
} as Meta<typeof FavoriteMainScreen>;

const Template: StoryFn<typeof FavoriteMainScreen> = () => {
  const navigation =
    useNavigation<
      StackNavigationProp<FavoriteRouteParamList, 'FavoriteMain'>
    >();
  const route = useRoute<RouteProp<FavoriteRouteParamList, 'FavoriteMain'>>();
  return <FavoriteMainScreen navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
