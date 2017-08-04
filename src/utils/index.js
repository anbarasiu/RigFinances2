// @flow
import React from 'react';
import { Input, Picker, Text } from 'native-base';

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
          onValueChange={selectedValue => {
            handler(id, selectedValue);
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
    case 'Text':
      return <Input style={style} onChangeText={handler} />;
    case 'TimePicker':
      return (
        <Input style={style} keyboardType="numeric" onChangeText={handler} />
      );
    default:
      return (
        <Text style={style}>
          {value}
        </Text>
      );
  }
}
