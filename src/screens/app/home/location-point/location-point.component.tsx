import React from 'react';
import { View, Text, Keyboard } from 'react-native';
import { Callout, Marker } from 'react-native-maps';

import { LocationPoint, LocationProperties } from 'common/constants/types';

import styles from './location-point.style';

export function LocationPointComponent(props: {
  point: LocationPoint;
  pinColor: string;
  getter: (locationProperties: LocationProperties) => void;
}): JSX.Element {
  const { point } = props;
  const { properties } = point;
  const { coordinates } = point.geometry;

  const renderMaterials = (): Array<JSX.Element> => {
    return properties.materials.map((material, index) => (
      <Text style={styles.itens} key={`${index}-${material}`}>
        {material}
      </Text>
    ));
  };

  const getterHandler = (): void => {
    Keyboard.dismiss;
    props.getter(properties);
  };

  return (
    //TODO fix marker screen focus
    <Marker
      pinColor={props.pinColor}
      coordinate={{ latitude: coordinates[1], longitude: coordinates[0] }}
      onPress={() => getterHandler()}
    >
      <Callout tooltip>
        <View>
          <View style={styles.container}>
            <Text style={styles.title}>{properties.name}</Text>
            <View style={styles.breakLine}></View>
            <View>{renderMaterials()}</View>
          </View>
        </View>
      </Callout>
    </Marker>
  );
}
