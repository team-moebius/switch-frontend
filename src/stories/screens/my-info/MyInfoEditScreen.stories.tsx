import { StoryFn, Meta } from '@storybook/react';
import { MyInfoEditScreen } from 'src/routes/root/my-info/MyInfoEditScreen';
import { MyInfoParamList } from 'src/routes/root/my-info';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { mockRoute } from 'src/utils/mockRoute';

export default {
  title: 'MyInfoEditScreen',
  component: MyInfoEditScreen,
} as Meta<typeof MyInfoEditScreen>;

const Template: StoryFn<typeof MyInfoEditScreen> = () => {
  const navigation =
    useNavigation<StackNavigationProp<MyInfoParamList, 'MyInfoEdit'>>();
  return (
    <MyInfoEditScreen
      navigation={navigation}
      route={mockRoute<MyInfoParamList, 'MyInfoEdit'>(
        { userInfo: {} },
        'MyInfoEdit'
      )}
    />
  );
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
