import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StoryFn, Meta } from '@storybook/react';
import { SignUpRouteParamList } from 'src/routes/sign/sign-up';
import { SubmitPhoneNumber } from 'src/routes/sign/sign-up/SubmitPhoneNumber';

export default {
  title: 'SubmitPhoneNumber',
  component: SubmitPhoneNumber,
} as Meta<typeof SubmitPhoneNumber>;

const Template: StoryFn<typeof SubmitPhoneNumber> = () => {
  const navigation =
    useNavigation<StackNavigationProp<SignUpRouteParamList, 'SubmitPhone'>>();
  const route = useRoute<RouteProp<SignUpRouteParamList, 'SubmitPhone'>>();
  return <SubmitPhoneNumber navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
