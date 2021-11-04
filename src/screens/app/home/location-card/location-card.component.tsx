import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Animated, View, Text } from 'react-native';

import { LocationProperties } from 'common/constants/types';

import styles from './location-card.style';

interface IlocationCardProps {}
export interface ILocationCardRef {
  setLocationPropertiesRef(locationProperties: LocationProperties): void;
  clearLocationPropertiesRef(): void;
}

export const LocationCardComponent = forwardRef<ILocationCardRef, {}>((props, ref): JSX.Element => {
  const animationDuration = 200;

  const [fadeAnimation] = useState(new Animated.Value(0));
  const [locationProperties, setLocationProperties] = useState<LocationProperties | null>(null);

  useImperativeHandle(ref, () => ({
    setLocationPropertiesRef(locationProperties: LocationProperties) {
      fadeIn();
      setLocationProperties(locationProperties);
    },
    clearLocationPropertiesRef() {
      fadeOut();
      setLocationProperties(null);
    },
  }));

  function fadeIn(): void {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();
  }

  function fadeOut(): void {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Animated.View
      style={[
        styles.container,
        styles.containerShadow,
        {
          opacity: fadeAnimation,
        },
      ]}
    >
      <Text>{locationProperties?.name}</Text>
    </Animated.View>
  );
});
