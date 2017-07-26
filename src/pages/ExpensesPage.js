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
import commonStyles from '../utils/styles';

export default class ExpensesPage extends Component {
  static navigationOptions = {
    title: 'Expenses',
  };

  constructor() {
    super();
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.addExpenseItem = this.addExpenseItem.bind(this);
    this.columns = setResponsiveGrid(9);
    this.state = {
      expenseItems: [{}]
    };
  }

  onSubmitPressed() {
    // Navigate to navigation activity
    const { navigate } = this.props.navigation;
    navigate('Navigation');
  }

  addExpenseItem() {
    const newItems = this.state.expenseItems.concat({});
    this.setState({expenseItems: newItems});
  }

  render() {
    return (
      <ScrollView contentContainerStyle = {styles.container}>
        <FormHeader />
        <View style = {styles.row}>
        {
          expensesContent.map((e, index) => {
            return (
              <Text key={index} style={this.columns}>{e.field}</Text>
            );
          })
        }
        </View>
        {
          this.state.expenseItems.map((e, index) => <ExpenseItem key={index} index={index} columnStyle={this.columns} content={expensesContent} /> )
        }
        <Button style={this.button} onPress={this.addExpenseItem} title="Add" />
        <Button type = "button" title = "Submit" onPress = {this.onSubmitPressed} style = {styles.submit} />
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
  submit: commonStyles.submit
});

AppRegistry.registerComponent('ExpensesPage', () => ExpensesPage);
