import React from 'react';
import {Dimensions} from 'react-native';
import {
  TextInput,
  Button,
  Text,
  View,
  ScrollView,
  Picker
} from 'react-native';

export function vw(percentageWidth) {
  return Dimensions.get('window').width * (percentageWidth / 100);
}

export function vh(percentageHeight) {
  return Dimensions.get('window').height * (percentageHeight / 100);
}

export function setResponsiveGrid(columns) {
  const COLUMNS = columns;
  const MARGIN = vw(1);
  const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN;

  return {
    marginLeft: MARGIN,
    marginTop: MARGIN,
    width: vw(100) / COLUMNS - SPACING
  };
}

export function renderComponent(type, style) {
  switch (type) {
    case 'Picker':
    return <Picker style={style} />;
    case 'Number':
    return <TextInput style={style} keyboardType="numeric" />;
    case 'TimePicker':
    return <TextInput style={style} keyboardType="numeric" />;
    default:
    return <TextInput style={style} />;
  }
}
