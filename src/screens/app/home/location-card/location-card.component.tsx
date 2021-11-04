import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Animated, View } from 'react-native';

import { LocationProperties } from 'common/constants/types';

import styles from './location-card.style';

export interface ILocationCardRef {
  fadeIn(): void;
  fadeOut(): void;
}

interface IlocationCardProps {
  locationProperties: LocationProperties | null;
}

export const LocationCardComponent = forwardRef<ILocationCardRef, IlocationCardProps>((props, ref): JSX.Element => {
  const [fadeAnimation] = useState(new Animated.Value(0));
  const animationDuration = 200;

  useImperativeHandle(ref, () => ({
    fadeIn() {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    },

    fadeOut() {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    },
  }));

  return (
    <Animated.View
      style={[
        styles.container,
        styles.containerShadow,
        {
          opacity: fadeAnimation,
        },
      ]}
    ></Animated.View>
  );
});
