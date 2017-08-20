// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppRegistry } from 'react-native';
import { Container, Tab, Tabs } from 'native-base';
import ReportsPage from './ReportsPage';
import ExpensesPage from './ExpensesPage';
import BoreDetailsPage from './BoreDetailsPage';
import EmployeeDetailsPage from './EmployeeDetailsPage';
import EmployeeMasterPage from './EmployeeMasterPage';
import * as actions from '../actions';

class MasterPage extends Component {
  static navigationOptions = {
    title: 'Master'
  };

  props: {
    navigation: Object,
    expenses: Object,
    bore: Object,
    employee: Object,
    onExpenseItemUpdate: Function,
    onBoreItemUpdate: Function,
    onEmployeeItemUpdate: Function
  };

  render() {
    return (
      <Container>
        <Tabs initialPage={this.props.navigation.state.params.tab}>
          <Tab heading="Expenses">
            <ExpensesPage
              data={this.props.expenses}
              onExpenseItemUpdate={this.props.onExpenseItemUpdate}
            />
          </Tab>
          <Tab heading="Bore Details">
            <BoreDetailsPage
              data={this.props.bore}
              onBoreItemUpdate={this.props.onBoreItemUpdate}
            />
          </Tab>
          <Tab heading="Employee Master">
            <EmployeeMasterPage
              data={this.props.employee}
              onEmployeeItemUpdate={this.props.onEmployeeItemUpdate}
            />
          </Tab>
          <Tab heading="Employee Details">
            <EmployeeDetailsPage
              data={this.props.employee}
              onEmployeeItemUpdate={this.props.onEmployeeItemUpdate}
            />
          </Tab>
          <Tab heading="Reports">
            <ReportsPage />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses || {},
  bore: state.bore || {},
  employee: state.employee || {}
});

const mapDispatchToProps = dispatch => ({
  onExpenseItemUpdate: (date, data) => {
    dispatch(actions.updateExpenseItem(date, data));
  },
  onBoreItemUpdate: (date, data) => {
    dispatch(actions.updateBoreItem(date, data));
  },
  onEmployeeItemUpdate: (date, data) => {
    dispatch(actions.updateEmployeeItem(date, data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MasterPage);

AppRegistry.registerComponent('MasterPage', () => MasterPage);
