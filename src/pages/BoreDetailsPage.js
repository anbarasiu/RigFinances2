import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  ScrollView,
  Picker
} from 'react-native';
import boreDetailsContent from '../content/boreDetails';
import {renderComponent} from '../utils';

export default class BoreDetailsPage extends Component {
  static navigationOptions = {
    title: 'Bore Details',
  };

  constructor() {
    super();
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
  }

  onSubmitPressed() {
    // Navigate to navigation activity
    const { navigate } = this.props.navigation;
    navigate('Navigation');
  }

  render() {
    return (
      <ScrollView contentContainerStyle = {styles.container}>
      {
        boreDetailsContent.map((b) => {
          return (
            <View style={styles.row}>
              <Text>{b.field}</Text>
              {renderComponent(b.type)}
            </View>
          );
        })
      }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  row: {
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('BoreDetailsPage', () => BoreDetailsPage);
