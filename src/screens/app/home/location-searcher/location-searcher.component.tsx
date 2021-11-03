import React, { useContext, useState } from 'react';
import { View, TextInput, TouchableWithoutFeedback } from 'react-native';

import { WikiContext } from 'context';
import { AutocompleteHelper } from 'helpers';

import styles from './location-searcher.style';
import { colors } from 'common/constants/colors';

import { SvgXml } from 'react-native-svg';
import { SearchSVG } from 'assets/svgs';

export function LocationSearcherComponent(props: {
  handlerSearch: (ags: Array<string>, materials: Array<string>) => Promise<void>;
}): JSX.Element {
  const { wikiData } = useContext(WikiContext);
  const autoComplete = new AutocompleteHelper(wikiData);

  const [locationTags, setLocationTags] = useState<Array<string>>([]);
  const [materials, setMaterials] = useState<Array<string>>([]);

  const placeholder = 'Busque por locais ou materiais';

  const handler = () => {
    props.handlerSearch(locationTags, materials);
  };

  const getSuggestions = (text: string) => {
    setLocationTags(autoComplete.suggestLocationTags(text));
    setMaterials(autoComplete.suggestMaterials(text));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors('black') + '4D'}
        style={styles.text}
        onChangeText={getSuggestions}
      />
      <TouchableWithoutFeedback onPress={handler}>
        <View style={styles.searchContainer}>
          <SvgXml xml={SearchSVG.default} width={40} height={40} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
