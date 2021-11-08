import React from 'react';

import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';

import { colors } from 'common/constants/colors';

export function InputTextComponent(props: {
  size: { width: number | string; height: number | string };
  placeholder: string;
  text: string;
  keyboardType?: KeyboardTypeOptions;
  secureText?: boolean;
  handler: (text: string) => void;
}): JSX.Element {
  return (
    <TextInput
      autoCapitalize={'none'}
      keyboardType={props.keyboardType ?? 'default'}
      secureTextEntry={props.secureText ?? false}
      style={[styles.container, styles.inputBorder, styles.inputFont, { ...props.size }]}
      placeholderTextColor={colors('black') + '4D'}
      placeholder={props.placeholder}
      value={props.text}
      onChangeText={props.handler}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors('white-dark'),
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: colors('black') + '26',
    borderRadius: 7,
  },
  inputFont: {
    fontSize: 14,
    fontFamily: 'Ubuntu-Light',
    color: colors('black') + 'B3',
  },
});
