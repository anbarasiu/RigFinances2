import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  Image,
  View
} from 'react-native';

export default class Tile extends Component {

  render() {
    return (
      <TouchableHighlight onPress={this.props.onTileSelected} style = {this.props.tileStyle}>
        <View style = {styles.containerView}>
          <Image style = {styles.tileImg} />
          <Text style = {styles.tileText}>{this.props.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2756A4' //162E3E
  },
  tileText: {
    fontSize: 20,
    color: 'white'
  }
});

AppRegistry.registerComponent('Tile', () => Tile);
