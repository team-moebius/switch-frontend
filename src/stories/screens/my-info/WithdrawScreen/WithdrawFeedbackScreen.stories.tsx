import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StoryFn, Meta } from '@storybook/react';
import { WithdrawParamList } from 'src/routes/root/my-info/WithdrawScreen';
import { WithdrawFeedbackScreen } from 'src/routes/root/my-info/WithdrawScreen/WithdrawFeedbackScreen';

export default {
  title: 'WithdrawFeedbackScreen',
  component: WithdrawFeedbackScreen,
} as Meta<typeof WithdrawFeedbackScreen>;

const Template: StoryFn<typeof WithdrawFeedbackScreen> = () => {
  const navigation =
    useNavigation<StackNavigationProp<WithdrawParamList, 'WithdrawFeedback'>>();
  const route = useRoute<RouteProp<WithdrawParamList, 'WithdrawFeedback'>>();
  return <WithdrawFeedbackScreen navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
