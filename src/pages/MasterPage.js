import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Tab, Tabs } from 'native-base';
import ReportsPage from './ReportsPage';
import ExpensesPage from './ExpensesPage';
import BoreDetailsPage from './BoreDetailsPage';
import EmployeeDetailsPage from './EmployeeDetailsPage';
import EmployeeMasterPage from './EmployeeMasterPage';

export default class MasterPage extends Component {
  static navigationOptions = {
    title: 'Master'
  };

  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Tabs initialPage={1}>
          <Tab heading="Expenses">
            <ExpensesPage />
          </Tab>
          <Tab heading="Bore Details">
            <BoreDetailsPage />
          </Tab>
          <Tab heading="Employee Master">
            <EmployeeMasterPage />
          </Tab>
          <Tab heading="Employee Details">
            <EmployeeDetailsPage />
          </Tab>
          <Tab heading="Reports">
            <ReportsPage />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

AppRegistry.registerComponent('MasterPage', () => MasterPage);
