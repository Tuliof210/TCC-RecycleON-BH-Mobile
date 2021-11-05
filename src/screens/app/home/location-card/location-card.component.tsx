import React, { forwardRef, Fragment, useImperativeHandle, useState } from 'react';
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
  const [display, setDisplay] = useState<'none' | 'flex'>('none');
  const [locationProperties, setLocationProperties] = useState<LocationProperties | null>(null);

  function fadeIn(): void {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setDisplay('flex');
    }, animationDuration);
  }

  function fadeOut(): void {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setDisplay('none');
    }, animationDuration);
  }

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

  //---------------------------------------------------------------------------------------------------------------------

  const tryRender = (value: any) => value || '-';

  const renderAddress = (): JSX.Element | undefined => {
    const address = locationProperties?.address;
    if (address) {
      return (
        <Fragment>
          <Text style={styles.text}>
            {tryRender(address.street)}, nº {tryRender(address.number)}
          </Text>
          <Text style={styles.text}>Bairro {tryRender(address.neighborhood)}</Text>
        </Fragment>
      );
    }
  };

  const renderMaterials = (): Array<JSX.Element> | undefined => {
    return locationProperties?.materials.map((material, index) => (
      <Text key={`${index}-${material}`} style={styles.itens}>
        {material}
      </Text>
    ));
  };

  return (
    <Animated.View
      style={[
        styles.container,
        styles.containerShadow,
        {
          opacity: fadeAnimation,
          display: display,
        },
      ]}
    >
      <View>
        {renderAddress()}
        <View style={styles.breakLine}></View>
        <View style={styles.containerBody}>
          <View style={styles.containerSubBody}>{renderMaterials()}</View>
          <View style={styles.containerSubBody}>
            <Text style={styles.subText}>{locationProperties?.businessHours}</Text>
          </View>
        </View>
      </View>

      <View></View>
    </Animated.View>
  );
});
