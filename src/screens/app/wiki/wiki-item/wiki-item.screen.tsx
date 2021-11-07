import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, View, TouchableHighlight, Text, SafeAreaView } from 'react-native';
import { NavigationProp, Route } from '@react-navigation/native';

import { WikiFullItem } from 'common/constants/types';

import { WikiContext } from 'context';

import { SvgXml } from 'react-native-svg';
import { ArrowBackSVG } from 'assets/svgs';

import styles from './wiki-item.style';
import { colors } from 'common/constants/colors';

export default function WikiMainScreen(props: {
  navigation: NavigationProp<any, any>;
  route: Route<any, { itemId: string }>;
}): JSX.Element {
  const router = props.navigation;
  const { params } = props.route;

  const { getWikiItem } = useContext(WikiContext);
  const [wikiItem, setWikiItem] = useState({} as WikiFullItem);

  useEffect(() => {
    (async () => {
      await getWikiItem(params.itemId).then(populateWikiItem);
    })();
  }, []);

  function populateWikiItem(item: WikiFullItem | void) {
    if (item) setWikiItem(item);
  }

  function renderWikiData(): JSX.Element | boolean {
    return (
      !!wikiItem.tag &&
      !!wikiItem.about &&
      wikiItem.relatedItems.length > 0 && (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{wikiItem.tag}</Text>
          <Text style={styles.body}>{wikiItem.about}</Text>
          {renderBreakLine()}
          <Text style={[styles.title, styles.relatedItemsLabel]}>Itens Relacionados</Text>
          {renderRelatedItems()}
        </ScrollView>
      )
    );
  }

  function renderBreakLine(): JSX.Element {
    return <View style={styles.breakLine}></View>;
  }

  function renderRelatedItems(): Array<JSX.Element> {
    return wikiItem.relatedItems.map((item, index) => (
      <Text key={index} style={styles.relatedItems}>
        {item}
      </Text>
    ));
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableHighlight activeOpacity={1} underlayColor={colors('white')} onPress={() => router.goBack()}>
        <View style={styles.goBackContainer}>
          <SvgXml xml={ArrowBackSVG.default} width={25} height={25} />
          <Text style={styles.goBackText}>Voltar</Text>
        </View>
      </TouchableHighlight>
      {renderWikiData()}
    </SafeAreaView>
  );
}
