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

export default class MasterPageContainer extends Component {
  static navigationOptions = {
    title: 'Master'
  };

  constructor() {
    super();
  }

  props: {
    navigation: Object
  };

  render() {
    return (
      <Container>
        <Tabs initialPage={this.props.navigation.state.params.tab}>
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

const mapStateToProps = state => ({
  place: state.locations.place || ''
});

const mapDispatchToProps = dispatch => ({
  test: () => {
    console.log(dispatch);
  }
});

const MasterPage = connect(mapStateToProps, mapDispatchToProps)(
  MasterPageContainer
);

AppRegistry.registerComponent('MasterPage', () => MasterPage);
