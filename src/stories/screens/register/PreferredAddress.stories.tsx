import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Meta, StoryFn } from '@storybook/react';
import { RegisterRouteParamList } from 'src/routes/root/register';
import { PreferredAddressScreen } from 'src/routes/root/register/PreferredAddressScreen';

export default {
  title: 'PreferredAddressScreen',
  component: PreferredAddressScreen,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
} as Meta<typeof PreferredAddressScreen>;

const Template: StoryFn<typeof PreferredAddressScreen> = () => {
  const navigation =
    useNavigation<
      StackNavigationProp<RegisterRouteParamList, 'PreferredAddress'>
    >();
  const route =
    useRoute<RouteProp<RegisterRouteParamList, 'PreferredAddress'>>();
  return <PreferredAddressScreen navigation={navigation} route={route} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
