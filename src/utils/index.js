// @flow
import React from 'react';
import { Input, Picker } from 'native-base';

export function vw(percentageWidth: number) {
  // return Dimensions.get('window').width * (percentageWidth / 100);
}

export function vh(percentageHeight: number) {
  // return Dimensions.get('window').height * (percentageHeight / 100);
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

export function renderComponent(
  id: string,
  type: string,
  style: Object,
  content = [],
  value,
  handler
) {
  switch (type) {
    case 'Picker':
      return (
        <Picker
          style={style}
          onValueChange={id => {
            handler(id);
          }}
          selectedValue={value}
        >
          {content.map(c => <Picker.Item key={id} label={c} value={c} />)}
        </Picker>
      );
    case 'Number':
      return (
        <Input style={style} keyboardType="numeric" onChangeText={handler} />
      );
    case 'TimePicker':
      return (
        <Input style={style} keyboardType="numeric" onChangeText={handler} />
      );
    default:
      return <Input style={style} />;
  }
}
