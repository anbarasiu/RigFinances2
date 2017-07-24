import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  ScrollView
} from 'react-native';
import {setResponsiveGrid} from '../utils';
import FormHeader from '../components/FormHeader';
import ExpenseItem from '../components/ExpenseItem';
import expensesContent from '../content/expenses';

export default class ExpensesPage extends Component {
  static navigationOptions = {
    title: 'Expenses',
  };

  constructor() {
    super();
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.addExpenseItem = this.addExpenseItem.bind(this);
    this.columns = setResponsiveGrid(9);
    this.expenseItems = [{}];
  }

  onSubmitPressed() {
    // Navigate to navigation activity
    const { navigate } = this.props.navigation;
    navigate('Navigation');
  }

  addExpenseItem() {
    this.expenseItems.push({});
  }

  render() {
    return (
      <ScrollView contentContainerStyle = {styles.container}>
        <FormHeader />
        <View style = {styles.row}>
        {
          expensesContent.map((e) => {
            return (
              <Text style={this.columns}>{e}</Text>
            );
          })
        }
        </View>
        {
          this.expenseItems.map((e, index) => <ExpenseItem index={index} columnStyle={this.columns} /> )
        }
        <Button style={this.button} onPress={this.addExpenseItem} title="Add" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  text: {
    margin: 8
  },
  button: {

  }
});

AppRegistry.registerComponent('ExpensesPage', () => ExpensesPage);
