import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View
} from 'react-native';
import FormHeader from '../components/FormHeader';
import content from '../content/master';
import {renderComponent, setResponsiveGrid} from '../utils';
import {MasterPageScreen} from '../routes';

export default class MasterPage extends Component {
  static navigationOptions = {
    title: 'Master',
  };

  constructor() {
    super();
    this.columns = setResponsiveGrid(2);
  }

  render() {
    return (
      <View style = {styles.container}>
        <FormHeader />
        {
          content.map((c) => {
            return (
              <View style={styles.row}>
                <Text style={this.columns}>{c.field}</Text>
                {renderComponent(c.type, this.columns)}
              </View>
            );
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1
  }
});

AppRegistry.registerComponent('MasterPage', () => MasterPageScreen);
