import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Button, Text } from 'native-base';

export default class Tile extends Component {
  render() {
    return (
      <Button onPress={this.props.onTileSelected}>
        <Text>
          {this.props.name}
        </Text>
      </Button>
    );
  }
}

AppRegistry.registerComponent('Tile', () => Tile);
