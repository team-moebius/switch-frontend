import { StoryFn, Meta } from '@storybook/react';
import { SubmitValidationCode } from 'src/routes/sign/sign-up/SubmitValidationCode';
import { SignUpRouteParamList } from 'src/routes/sign/sign-up';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { mockRoute } from 'src/utils/mockRoute';

export default {
  title: 'SubmitValidationCode',
  component: SubmitValidationCode,
} as Meta<typeof SubmitValidationCode>;

const Template: StoryFn<typeof SubmitValidationCode> = () => {
  const navigation =
    useNavigation<
      StackNavigationProp<SignUpRouteParamList, 'SubmitValidationCode'>
    >();

  return (
    <SubmitValidationCode
      navigation={navigation}
      route={mockRoute<SignUpRouteParamList, 'SubmitValidationCode'>(
        { phoneNumber: '01012345678' },
        'SubmitValidationCode'
      )}
    />
  );
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
