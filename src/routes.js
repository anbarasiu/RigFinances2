import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import store from './store';
import LoginPage from './pages/LoginPage';
import NavigationPage from './pages/NavigationPage';
import MasterPage from './pages/MasterPage';

const AppNavigation = StackNavigator({
  Login: { screen: LoginPage },
  Navigation: { screen: NavigationPage },
  Content: { screen: MasterPage }
});

const App = () =>
  <Provider store={store}>
    <AppNavigation />
  </Provider>;

export { App };
