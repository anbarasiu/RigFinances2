import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  Image
} from 'react-native';

export default class Tile extends Component {
  constructor() {
    super();
    this.onTileSelected = this.onTileSelected.bind(this);
  }

  onTileSelected() {
    // Navigate to selected activity
    // props.link
  }

  render() {
    return (
      <View style = {styles.container} onClick={this.onTileSelected}>
        <Image style = {styles.tileImg} source={this.props.imgSrc} />
        <Text style = {styles.tileText}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 320
  },
  tileImg: {
    position: 'relative'
  },
  tileText: {
    position: 'absolute',
    color: 'white'
  }
});

AppRegistry.registerComponent('Tile', () => Tile);
