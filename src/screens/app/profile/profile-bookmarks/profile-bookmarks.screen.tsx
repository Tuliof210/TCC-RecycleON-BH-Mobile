import React, { useContext } from 'react';
import { SafeAreaView, View, TouchableHighlight, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LocationContext, UserContext } from 'context';

import { ProfileBookmarkCard } from './profile-bookmark-card/profile-bookmark-card.component';

import { SvgXml } from 'react-native-svg';
import { ArrowBackSVG } from 'assets/svgs';

import styles from './profile-bookmarks.style';
import { colors } from 'common/constants/colors';

export default function ProfileBookmarksScreen(props: { navigation: NavigationProp<any, any> }): JSX.Element {
  const router = props.navigation;

  const { getLocationById } = useContext(LocationContext);
  const { user, updateUser } = useContext(UserContext);

  function renderBookmarks(): Promise<Array<JSX.Element>> | JSX.Element {
    const bookmarks = user?.bookmarks;
    return bookmarks && bookmarks.length > 0 ? renderBookmarksList(bookmarks) : renderEmptyMessage();
  }

  function renderEmptyMessage(): JSX.Element {
    return <View></View>;
  }

  async function renderBookmarksList(bookmarks: Array<string>): Promise<Array<JSX.Element>> {
    const elements: Array<JSX.Element> = [];

    for (const id of bookmarks) {
      const locationData = await getLocationById(id);
      if (locationData) elements.push(<ProfileBookmarkCard location={locationData} />);
    }

    return elements;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableHighlight activeOpacity={1} underlayColor={colors('white')} onPress={() => router.goBack()}>
        <View style={styles.goBackContainer}>
          <SvgXml xml={ArrowBackSVG.default} width={25} height={25} />
          <Text style={styles.goBackText}>Voltar</Text>
        </View>
      </TouchableHighlight>
      {renderBookmarks()}
    </SafeAreaView>
  );
}
