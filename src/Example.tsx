/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {ProgressBarAndroid} from '@react-native-community/progress-bar-android';

export const Example = () => {
  const usingHermes =
    typeof HermesInternal === 'object' && HermesInternal !== null;
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Header />
      {!usingHermes ? null : <View style={styles.engine} />}
      <ProgressBarAndroid
        styleAttr="Horizontal"
        progress={75}
        color="red"
        indeterminate
      />
      <View style={styles.body}>
        <LearnMoreLinks />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
