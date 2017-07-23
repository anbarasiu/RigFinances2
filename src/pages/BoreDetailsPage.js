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

export default class BoreDetailsPage extends Component {
  static navigationOptions = {
    title: 'Bore Details',
  };

  constructor() {
    super();
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
  }

  onSubmitPressed() {
    // Navigate to navigation activity
    const { navigate } = this.props.navigation;
    navigate('Navigation');
  }

  renderComponent(type) {
    switch (type) {
      case 'Picker':
      return <Picker />;
      case 'Number':
      return <TextInput keyboardType="numeric" />;
      case 'TimePicker':
      return <TextInput keyboardType="numeric" />;
      default:
      return <TextInput />;
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle = {styles.container}>
      {
        boreDetailsContent.map((b) => {
          return (
            <View style={styles.row}>
              <Text>{b.field}</Text>
              {this.renderComponent(b.type)}
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
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  row: {
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('BoreDetailsPage', () => BoreDetailsPage);
