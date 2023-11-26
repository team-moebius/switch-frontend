import { ScreenWrapper } from 'src/components/template';
import { ItemListContent } from '../HomeMainScreen/content/ItemListContent';

const RegisteredListScreen = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <ItemListContent onClickList={() => alert('clicked')} myList />
    </ScreenWrapper>
  );
};

export { RegisteredListScreen };
