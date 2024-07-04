import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StoryFn, Meta } from '@storybook/react';
import { WithdrawParamList } from 'src/routes/root/my-info/WithdrawScreen';
import { WithdrawInfoScreen } from 'src/routes/root/my-info/WithdrawScreen/WithdrawInfoScreen';

export default {
  title: 'WithdrawInfoScreen',
  component: WithdrawInfoScreen,
} as Meta<typeof WithdrawInfoScreen>;

const Template: StoryFn<typeof WithdrawInfoScreen> = () => {
  const navigation =
    useNavigation<StackNavigationProp<WithdrawParamList, 'WithdrawInfo'>>();
  const route = useRoute<RouteProp<WithdrawParamList, 'WithdrawInfo'>>();
  return <WithdrawInfoScreen navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
