import { StoryFn, Meta } from '@storybook/react';
import { SubmitValidationCode } from 'src/routes/sign/sign-up/SubmitValidationCode';
import { SignUpRouteParamList } from 'src/routes/sign/sign-up';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

export default {
  title: 'SubmitValidationCode',
  component: SubmitValidationCode,
} as Meta<typeof SubmitValidationCode>;

const Template: StoryFn<typeof SubmitValidationCode> = () => {
  const navigation =
    useNavigation<
      StackNavigationProp<SignUpRouteParamList, 'SubmitValidationCode'>
    >();
  const route =
    useRoute<RouteProp<SignUpRouteParamList, 'SubmitValidationCode'>>();

  return <SubmitValidationCode navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
