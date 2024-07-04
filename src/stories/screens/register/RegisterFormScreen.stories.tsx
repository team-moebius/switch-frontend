import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StoryFn, Meta } from '@storybook/react';
import { RegisterRouteParamList } from 'src/routes/root/register';
import { RegisterFormScreen } from 'src/routes/root/register/RegisterFormScreen';
import { mockRoute } from 'src/utils/mockRoute';

export default {
  title: 'RegisterForm',
  component: RegisterFormScreen,
} as Meta<typeof RegisterFormScreen>;

const Template: StoryFn<typeof RegisterFormScreen> = () => {
  const navigation =
    useNavigation<
      StackNavigationProp<RegisterRouteParamList, 'RegisterForm'>
    >();
  return (
    <RegisterFormScreen
      navigation={navigation}
      route={mockRoute<RegisterRouteParamList, 'RegisterForm'>(
        {},
        'RegisterForm'
      )}
    />
  );
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
