import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Container, Button, Text, Grid, Col } from 'native-base';
import FormHeader from '../components/FormHeader';
import ExpenseItem from '../components/ExpenseItem';
import expensesContent from '../content/expenses';
import commonStyles from '../utils/styles';

export default class ExpensesPage extends Component {
  static navigationOptions = {
    title: 'Expenses'
  };

  constructor() {
    super();
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.addExpenseItem = this.addExpenseItem.bind(this);
    // this.columns = setResponsiveGrid(9);
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
    this.setState({ expenseItems: newItems });
  }

  render() {
    return (
      <Container>
        <FormHeader />
        <Grid>
          {expensesContent.map((e, index) => {
            return (
              <Col>
                <Text key={index} style={this.columns}>
                  {e.field}
                </Text>
              </Col>
            );
          })}
        </Grid>
        {this.state.expenseItems.map((e, index) =>
          <ExpenseItem
            key={index}
            index={index}
            columnStyle={this.columns}
            content={expensesContent}
          />
        )}
        <Button style={this.button} onPress={this.addExpenseItem} title="Add" />
        <Button
          type="button"
          title="Submit"
          onPress={this.onSubmitPressed}
          style={styles.submit}
        />
      </Container>
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
