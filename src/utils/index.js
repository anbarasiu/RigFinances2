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
            handler(id, selectedValue);
          }}
          selectedValue={value}
        >
          {content.map(c => <Picker.Item key={id} label={c} value={c} />)}
        </Picker>
      );
    case 'Number':
      return (
        <Input
          style={style}
          keyboardType="numeric"
          onChangeText={selectedValue => {
            handler(id, selectedValue);
          }}
        />
      );
    case 'Text':
      return (
        <Input
          style={style}
          onChangeText={selectedValue => {
            handler(id, selectedValue);
          }}
        />
      );
    case 'Switch':
      return (
        <Switch
          style={style}
          value={value}
          onValueChange={selectedValue => {
            handler(id, selectedValue);
          }}
        />
      );
    case 'TimePicker':
      return (
        <Input
          style={style}
          keyboardType="numeric"
          onChangeText={selectedValue => {
            handler(id, selectedValue);
          }}
        />
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

// TODO: Refactor this copied logic from Android code
export function formatDateEntry(date: string) {
  if (!date || date === '') {
    return '0';
  }
  let temp = date.split('/');
  if (temp[1].length <= 1) {
    temp[1] = '0' + temp[1];
  }
  if (temp[0].length <= 1) {
    temp[0] = '0' + temp[0];
  }
  const formattedDate = temp[2] + temp[1] + temp[0];
  return formattedDate;
}

export function reverseFormatDateEntry(date: string) {
  if (!date || date === '0') {
    return '';
  }

  return (
    date.substring(6, 8) +
    '/' +
    date.substring(4, 6) +
    '/' +
    date.substring(0, 4)
  );
}
