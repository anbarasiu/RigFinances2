import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { Container, Text, Content, Button } from 'native-base';
import boreDetailsContent from '../content/boreDetails';
import { renderComponent, setResponsiveGrid } from '../utils';
import commonStyles from '../utils/styles';

export default class BoreDetailsPage extends Component {
  static navigationOptions = {
    title: 'Bore Details'
  };

  constructor() {
    super();
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.columns = setResponsiveGrid(2);
  }

  onSubmitPressed() {
    // Navigate to navigation activity
    const { navigate } = this.props.navigation;
    navigate('Navigation');
  }

  render() {
    return (
      <Container style={styles.row}>
        <Content>
          {boreDetailsContent.map((b, index) => {
            return (
              <View>
                <Text>
                  {b.field}
                </Text>
                {renderComponent(b.type, this.columns)}
              </View>
            );
          })}
          <Button type="button" title="Submit" onPress={this.onSubmitPressed} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  row: commonStyles.row,
  submit: commonStyles.submit
});

AppRegistry.registerComponent('BoreDetailsPage', () => BoreDetailsPage);
