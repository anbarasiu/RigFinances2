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
import {renderComponent, setResponsiveGrid} from '../utils';

export default class BoreDetailsPage extends Component {
  static navigationOptions = {
    title: 'Bore Details',
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
      <ScrollView contentContainerStyle = {styles.container}>
      {
        boreDetailsContent.map((b) => {
          return (
            <View style={styles.row}>
              <Text style={this.columns}>{b.field}</Text>
              {renderComponent(b.type, this.columns)}
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
