import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Meta, StoryFn } from '@storybook/react';
import { ChatRouteParamList } from 'src/routes/root/chat';
import { ChatDetailScreen } from 'src/routes/root/chat/ChatDetailScreen';

export default {
  title: 'ChatDetail',
  component: ChatDetailScreen,
} as Meta<typeof ChatDetailScreen>;

const Template: StoryFn<typeof ChatDetailScreen> = () => {
  const navigation =
    useNavigation<StackNavigationProp<ChatRouteParamList, 'ChatDetail'>>();
  const route = useRoute<RouteProp<ChatRouteParamList, 'ChatDetail'>>();

  return <ChatDetailScreen navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
