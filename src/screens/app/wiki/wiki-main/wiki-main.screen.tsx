import React, { useContext, useEffect, useState } from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';

import { WikiData, WikiItem } from 'common/constants/types';

import { WikiContext } from 'context';

import { colors } from 'common/constants/colors';
import styles from './wiki-main.style';

export default function WikiMainScreen(): JSX.Element {
  const { wikiData } = useContext(WikiContext);

  const [locationsItems, setLocationsItems] = useState<WikiData>([]);
  const [materialItems, setMaterialItems] = useState<WikiData>([]);

  useEffect(() => {
    setLocationsItems(wikiData.filter(filterItemsByType('location')));
    setMaterialItems(wikiData.filter(filterItemsByType('material')));

    console.log({ locationsItems, materialItems });
  }, []);

  function filterItemsByType(type: string): (item: WikiItem) => boolean {
    return (item: WikiItem): boolean => item.type === type;
  }

  function renderItemsContainer(label: string, itemList: WikiData): JSX.Element | boolean {
    return (
      itemList.length > 0 && (
        <View style={styles.item}>
          <Text style={styles.label}>{label}</Text>
          <View>{renderListOfItems(itemList)}</View>
        </View>
      )
    );
  }

  function renderListOfItems(items: WikiData): Array<JSX.Element> {
    return items.map((item) => (
      <TouchableHighlight key={item._id} activeOpacity={1} underlayColor={colors('white-dark')} onPress={() => {}}>
        <Text style={styles.itemText}>{item.tag}</Text>
      </TouchableHighlight>
    ));
  }

  function renderBreakLine(): JSX.Element | boolean {
    return locationsItems.length > 0 && materialItems.length > 0 && <View style={styles.breakLine}></View>;
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.screen}>
        {renderItemsContainer('Locais', locationsItems)}
        {renderBreakLine()}
        {renderItemsContainer('Categorias', materialItems)}
      </View>
    </ScrollView>
  );
}
