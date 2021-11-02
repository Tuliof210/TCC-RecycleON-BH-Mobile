import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { WikiData, WikiItem } from 'common/constants/types';

import { WikiContext } from 'context';

import styles, { backgroundGradient } from './wiki-main.style';

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
    console.log({ label, itemList });
    return (
      itemList.length > 0 && (
        <View>
          <Text>{label}</Text>
          <View>{renderListOfItems(itemList)}</View>
        </View>
      )
    );
  }

  function renderListOfItems(items: WikiData): Array<JSX.Element> {
    return items.map((item) => {
      const component = <Text key={item._id}>{item.tag}</Text>;

      console.log(component);

      return component;
    });
  }

  function renderBreakLine(): JSX.Element | boolean {
    return locationsItems.length > 0 && materialItems.length > 0 && <Text>===============================</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        {renderItemsContainer('Locais', locationsItems)}
        {renderBreakLine()}
        {renderItemsContainer('Categorias', materialItems)}
      </View>
    </SafeAreaView>
  );
}
