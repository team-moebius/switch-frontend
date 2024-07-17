import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Meta, StoryFn } from '@storybook/react';
import { ChatRouteParamList } from 'src/routes/root/chat';
import { ChatMainScreen } from 'src/routes/root/chat/ChatMainScreen';

export default {
  title: 'ChatMain',
  component: ChatMainScreen,
} as Meta<typeof ChatMainScreen>;

const Template: StoryFn<typeof ChatMainScreen> = () => {
  const navigation =
    useNavigation<StackNavigationProp<ChatRouteParamList, 'ChatMain'>>();
  const route = useRoute<RouteProp<ChatRouteParamList, 'ChatMain'>>();

  return <ChatMainScreen navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = ' default';
story.args = {};
