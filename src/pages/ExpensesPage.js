// @flow
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Button, Text, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import FormHeader from '../components/FormHeader';
import ExpenseItem from '../components/ExpenseItem';
import expensesContent from '../content/expenses';
import { getCurrentDateString } from '../utils';

export default class ExpensesPage extends Component {
  static navigationOptions = {
    title: 'Expenses'
  };

  constructor(props: Object) {
    super(props);
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.addExpenseItem = this.addExpenseItem.bind(this);
    this.closeExpenseItem = this.closeExpenseItem.bind(this);
    this.onExpenseItemUpdate = this.onExpenseItemUpdate.bind(this);
    this.setDate = this.setDate.bind(this);
    this.state = {
      date: '',
      isModalOpen: false,
      expenseItems: (this.props.data[getCurrentDateString] &&
        this.props.data[getCurrentDateString].items) || [{}]
    };
  }

  state: {
    expenseItems: Array<Object>,
    date: string,
    isModalOpen: boolean
  };

  setDate: Function;
  setDate(date: string) {
    this.setState({ date });
  }

  onSubmitPressed: Function;
  onSubmitPressed() {
    console.log(this);
  }

  onExpenseItemUpdate: Function;
  onExpenseItemUpdate(data: Object) {
    this.props.onExpenseItemUpdate(this.state.date, data);
  }

  props: {
    data: Array<Object>,
    onExpenseItemUpdate: Function
  };

  addExpenseItem: Function;
  addExpenseItem() {
    // const newItems =
    //   this.state.expenseItems && this.state.expenseItems.concat({});
    // this.setState({ expenseItems: newItems });
    this.setState({ isModalOpen: true });
  }

  closeExpenseItem: Function;
  closeExpenseItem() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <Container>
        <FormHeader setDate={this.setDate} />
        <ExpenseItem
          isOpen={this.state.isModalOpen}
          close={this.closeExpenseItem}
          /* key={index}
          index={index}
          data={e} */
          content={expensesContent}
          onExpenseItemUpdate={this.onExpenseItemUpdate}
        />
        <Grid>
          {expensesContent.map((e, index) => {
            return (
              <Col>
                <Text key={index}>
                  {e.field}
                </Text>
              </Col>
            );
          })}
        </Grid>
        <Content>
          {this.state.expenseItems &&
            this.state.expenseItems.map((e, index) =>
              <Row>
                {expensesContent.map((c, index) => {
                  const items =
                    c.items &&
                    (c.items.length ? c.items : c.items[this.state.category]);
                  const id = c.id;
                  return (
                    <Col>
                      <Text>
                        {e[id]}
                      </Text>
                    </Col>
                  );
                })}
              </Row>
            )}
        </Content>
        <Button onPress={this.addExpenseItem} block>
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

AppRegistry.registerComponent('ExpensesPage', () => ExpensesPage);
