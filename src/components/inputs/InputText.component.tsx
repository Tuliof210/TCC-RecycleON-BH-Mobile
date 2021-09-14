import React from 'react';

import { StyleSheet, TextInput } from 'react-native';

import { colors } from '../../constants/styles';

export default ({
  size,
  placeholder,
  inputFunction,
}: {
  size: { width: number | string; height: number | string };
  placeholder: string;
  inputFunction: () => string;
}) => {
  return <TextInput style={{ ...size }} placeholder={placeholder}></TextInput>;
};

const styles = StyleSheet.create({});
