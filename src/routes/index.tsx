import { NavigationContainer } from '@react-navigation/native';
import { MainRoutes } from './Main';

const NavigationRouter = () => {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
};

export default NavigationRouter;
