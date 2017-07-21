import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginPage from './pages/LoginPage';
import NavigationPage from './pages/NavigationPage';
import BoreDetailsPage from './pages/BoreDetailsPage';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage';
import EmployeeMasterPage from './pages/EmployeeMasterPage';
import MasterPage from './pages/MasterPage';
import ReportsPage from './pages/ReportsPage';
import ExpensesPage from './pages/ExpensesPage';

const TabView = TabNavigator({
  Expenses: { screen: ExpensesPage },
  BoreDetails: { screen: BoreDetailsPage },
  EmployeeDetails: { screen: EmployeeDetailsPage },
  EmployeeMaster: { screen: EmployeeMasterPage },
  Reports: { screen: ReportsPage }
});

const App = StackNavigator({
  Login: { screen: LoginPage },
  Navigation: { screen: NavigationPage },
  Content: { screen: TabView }
  // Expenses: { screen: ExpensesPage },
  // BoreDetails: { screen: BoreDetailsPage },
  // EmployeeDetails: { screen: EmployeeDetailsPage },
  // EmployeeMaster: { screen: EmployeeMasterPage },
  // Master: { screen: MasterPageScreen },
  // Reports: { screen: ReportsPage }
});

export {App, TabView};
