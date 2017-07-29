// @flow
import React from 'react';
import { Dimensions, TextInput, Picker } from 'react-native';

export function vw(percentageWidth: number) {
  return Dimensions.get('window').width * (percentageWidth / 100);
}

export function vh(percentageHeight: number) {
  return Dimensions.get('window').height * (percentageHeight / 100);
}

export function setResponsiveGrid(columns: number) {
  const COLUMNS = columns;
  const MARGIN = vw(1);
  const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN;

  return {
    marginLeft: MARGIN,
    marginTop: MARGIN,
    width: vw(100) / COLUMNS - SPACING
  };
}

export function renderComponent(type: string, style: Object, content = []) {
  switch (type) {
    case 'Picker':
      return (
        <Picker style={style}>
          {content
            .filter(c => typeof c === 'string') //TODO: Modify after normalizing data
            .map((c, index) => <Picker.Item key={index} label={c} value={c} />)}
        </Picker>
      );
    case 'Number':
      return <TextInput style={style} keyboardType="numeric" />;
    case 'TimePicker':
      return <TextInput style={style} keyboardType="numeric" />;
    default:
      return <TextInput style={style} />;
  }
}
