import React from 'react';
import { View, TextInput } from 'react-native';

import { AutocompleteHelper } from 'helpers';

import styles from './location-searcher.style';

export function LocationSearcherComponent(): JSX.Element {
  const autoComplete = new AutocompleteHelper();

  const handler = (text: string) => {
    const locationsSugestion = autoComplete.sugestLocation(text);
    const materialsSugestion = autoComplete.sugestMaterials(text);

    [...locationsSugestion, ...materialsSugestion].forEach((tag) => console.log(tag));
    console.log('\n');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.text} onChangeText={handler}></TextInput>
    </View>
  );
}
