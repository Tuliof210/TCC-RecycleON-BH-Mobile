import React from 'react';

import { StyleSheet, TextInput } from 'react-native';

import { colors } from 'styles/colors';

export default (props: {
  size: { width: number | string; height: number | string };
  placeholder: string;
  text: string;
  secureText: boolean;
  inputFunction: (text: string) => void;
}) => (
  <TextInput
    secureTextEntry={props.secureText}
    style={[styles.container, styles.inputBorder, styles.inputFont, { ...props.size }]}
    placeholderTextColor={colors.get('black') + '4D'}
    placeholder={props.placeholder}
    onChangeText={props.inputFunction}
    value={props.text}
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
