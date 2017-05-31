import { StackNavigator } from 'react-navigation';
import LoginPage from './pages/LoginPage';
import NavigationPage from './pages/NavigationPage';
import BoreDetailsPage from './pages/BoreDetailsPage';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage';
import EmployeeMasterPage from './pages/EmployeeMasterPage';
import MasterPage from './pages/MasterPage';
import ReportsPage from './pages/ReportsPage';

const App = StackNavigator({
  Login: { screen: LoginPage },
  Navigation: { screen: NavigationPage },
  BoreDetails: { screen: BoreDetailsPage },
  EmployeeDetails: { screen: EmployeeDetailsPage },
  EmployeeMaster: { screen: EmployeeMasterPage },
  Master: { screen: MasterPage },
  Reports: { screen: ReportsPage }
});

export default App;
