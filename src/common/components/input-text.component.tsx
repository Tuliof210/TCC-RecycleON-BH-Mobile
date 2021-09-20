import React from 'react';

import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';

import { colors } from 'common/constants/colors';

export default (props: {
  size: { width: number | string; height: number | string };
  placeholder: string;
  text: string;
  keyboardType?: KeyboardTypeOptions;
  secureText?: boolean;
  handler: (text: string) => void;
}) => (
  <TextInput
    autoCapitalize={'none'}
    keyboardType={props.keyboardType ?? 'default'}
    secureTextEntry={props.secureText ?? false}
    style={[styles.container, styles.inputBorder, styles.inputFont, { ...props.size }]}
    placeholderTextColor={colors.get('black') + '4D'}
    placeholder={props.placeholder}
    value={props.text}
    onChangeText={props.handler}
  />
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.get('white-dark'),
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: colors.get('black') + '26',
    borderRadius: 7,
  },
  inputFont: {
    fontSize: 14,
    fontFamily: 'Ubuntu-Light',
    color: colors.get('black') + 'B3',
  },
});
