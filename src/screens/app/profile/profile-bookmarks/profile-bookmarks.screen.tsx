import React, { useContext } from 'react';
import { SafeAreaView, View, TouchableHighlight, Text, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { UserContext } from 'context';

import { ProfileBookmarkCard } from './profile-bookmark-card/profile-bookmark-card.component';

import { SvgXml } from 'react-native-svg';
import { ArrowBackSVG } from 'assets/svgs';

import styles from './profile-bookmarks.style';
import { colors } from 'common/constants/colors';

export default function ProfileBookmarksScreen(props: { navigation: NavigationProp<any, any> }): JSX.Element {
  const router = props.navigation;

  const { user, updateUser } = useContext(UserContext);

  const removeBookmark = async (locationID: string): Promise<void> => {
    const currentBookmarks = user?.bookmarks || [];

    if (locationID) {
      const bookmarksList = currentBookmarks.filter((bookmark) => bookmark !== locationID);
      const updatedBookmarks = new Set(bookmarksList);
      await updateUser({ bookmarks: Array.from(updatedBookmarks) });
    }
  };

  function renderBookmarks(): Array<JSX.Element> | JSX.Element {
    const bookmarks = user?.bookmarks;
    return bookmarks && bookmarks.length > 0 ? renderBookmarksList(bookmarks) : renderEmptyMessage();
  }

  function renderEmptyMessage(): JSX.Element {
    return <Text>teste</Text>;
  }

  function renderBookmarksList(bookmarks: Array<string>): Array<JSX.Element> {
    return bookmarks.map((id) => <ProfileBookmarkCard key={id} locationId={id} deleteHandler={removeBookmark} />);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableHighlight activeOpacity={1} underlayColor={colors('white')} onPress={() => router.goBack()}>
        <View style={styles.goBackContainer}>
          <SvgXml xml={ArrowBackSVG.default} width={25} height={25} />
          <Text style={styles.goBackText}>Voltar</Text>
        </View>
      </TouchableHighlight>
      <ScrollView style={styles.bookmarksContainer}>{renderBookmarks()}</ScrollView>
    </SafeAreaView>
  );
}
