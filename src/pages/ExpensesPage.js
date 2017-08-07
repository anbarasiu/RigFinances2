// @flow
import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Container, Button, Text, Content } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
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
    this.state = {
      expenseItems: [{}]
    };
  }

  onSubmitPressed() {
    console.log(this);
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
        <Content>
          {this.state.expenseItems.map((e, index) =>
            <ExpenseItem
              key={index}
              index={index}
              columnStyle={this.columns}
              content={expensesContent}
            />
          )}
        </Content>
        <Button style={this.button} onPress={this.addExpenseItem} block>
          <Text>Add</Text>
        </Button>
        <Button
          type="button"
          title="Submit"
          onPress={this.onSubmitPressed}
          block
        >
          <Text>Submit</Text>
        </Button>
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
