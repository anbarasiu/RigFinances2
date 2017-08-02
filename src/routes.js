import { StackNavigator } from 'react-navigation';
import LoginPage from './pages/LoginPage';
import NavigationPage from './pages/NavigationPage';
import MasterPage from './pages/MasterPage';

const App = StackNavigator({
  Login: { screen: LoginPage },
  Navigation: { screen: NavigationPage },
  Content: { screen: MasterPage }
});

export { App };
