import React from 'react';

import { Image, TouchableWithoutFeedback, ImageProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles, { backgroundGradient } from './social-button.style';

export function SocialButtonComponent(props: {
  size: { width: number | string; height: number | string };
  icon: ImageProps;
  handler: () => Promise<void>;
}): JSX.Element {
  return (
    <TouchableWithoutFeedback onPress={props.handler}>
      <LinearGradient
        style={[styles.container, styles.containerBorder, { width: props.size.width, height: props.size.height }]}
        colors={backgroundGradient}
        end={{ x: 0.8, y: 0 }}
      >
        <Image style={styles.icon} source={props.icon} />
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
