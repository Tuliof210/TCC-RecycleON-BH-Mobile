import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Callout, Marker } from 'react-native-maps';

import { LocationPoint } from 'common/constants/types';

import { colors } from 'common/constants/colors';

export function LocationPointComponent(props: { point: LocationPoint; pinColor: string }): JSX.Element {
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

  return (
    <Marker pinColor={props.pinColor} coordinate={{ latitude: coordinates[1], longitude: coordinates[0] }}>
      <Callout tooltip onPress={() => console.log('press')}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors('white'),
    borderColor: colors('green-light'),
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    textAlignVertical: 'top',
    fontFamily: 'Ubuntu-Bold',
    color: colors('gray-font-dark'),
  },
  itens: {
    fontFamily: 'Ubuntu-Light',
    fontSize: 10,
  },
  breakLine: {
    height: 1,
    marginVertical: 5,
    backgroundColor: colors('green-light'),
  },
});
