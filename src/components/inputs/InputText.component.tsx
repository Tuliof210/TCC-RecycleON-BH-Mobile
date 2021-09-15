import React from 'react';

import { StyleSheet, TextInput } from 'react-native';

import { colors } from '../../constants/styles';

export default (props: {
  size: { width: number | string; height: number | string };
  placeholder: string;
  secureText: boolean;
  inputFunction: (text: string) => void;
}) => {
  return (
    <TextInput
      secureTextEntry={props.secureText}
      style={[styles.container, styles.inputBorder, styles.inputFont, { ...props.size }]}
      placeholderTextColor={colors.get('black') + '4D'}
      placeholder={props.placeholder}
      onChangeText={props.inputFunction}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.get('white-dark'),
  },
  inputFont: {
    fontSize: 14,
    fontFamily: 'Ubuntu-Light',
    color: colors.get('black') + 'B3',
  },
  inputBorder: {
    borderWidth: 1,
    //=> '#00000026' === black with 15% opacity in hex code
    borderColor: colors.get('black') + '26',
    borderRadius: 7,
  },
});
