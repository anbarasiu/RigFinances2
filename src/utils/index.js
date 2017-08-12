// @flow
import React from 'react';
import { Input, Picker, Switch, Text } from 'native-base';
import { DatePickerAndroid, Keyboard } from 'react-native';

async function showDatePicker(id, handler) {
  try {
    Keyboard.dismiss();
    let date = '';
    const { action, year, month, day } = await DatePickerAndroid.open({
      // Use `new Date()` for current date.
      // May 25 2020. Month 0 is January.
      date: new Date()
    });
    if (action !== DatePickerAndroid.dismissedAction) {
      date = `${day}/${month + 1}/${year}`;
      handler(id, date);
    }
  } catch (e) {
    console.warn('Cannot open date picker', e.message);
  }
}

export function renderComponent(
  id: string,
  type: string,
  style?: Object,
  content: Array<any>,
  value: any,
  handler: Function
) {
  switch (type) {
    case 'Picker':
      return (
        content &&
        content.length > 0 &&
        <Picker
          style={style}
          onValueChange={selectedValue => {
            try {
              throw new Error();
            } catch (e) {
              handler(id, selectedValue);
            }
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
    case 'Switch':
      return <Switch style={style} value={value} onValueChange={handler} />;
    case 'TimePicker':
      return (
        <Input style={style} keyboardType="numeric" onChangeText={handler} />
      );
    case 'DatePicker':
      return (
        <Input
          style={style}
          value={value}
          onFocus={() => {
            showDatePicker(id, handler);
          }}
        />
      );
    default:
      return (
        <Text style={style}>
          {value}
        </Text>
      );
  }
}

export function getCurrentDateString() {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}
