import LoginPage from './src/pages/LoginPage';
import NavigationPage from './src/pages/NavigationPage';

const App = StackNavigator({
  Login: { screen: SivagamiBorewells },
  Navigation: { screen: NavigationPage }
});

AppRegistry.registerComponent('App', () => App);
