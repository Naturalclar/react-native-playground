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
import {StyleSheet, ScrollView, View, Text, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const repoUrl = 'https://github.com/Naturalclar/react-native-playground';

export const Example = () => {
  const usingHermes =
    typeof HermesInternal === 'object' && HermesInternal !== null;
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Header />
      {!usingHermes ? null : (
        <View style={styles.engine}>
          <Text style={styles.footer}>Engine: Hermes</Text>
        </View>
      )}

      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>React Native Playground</Text>
          <Text style={styles.sectionDescription}>
            Playground repository to try out different react-native repositories
          </Text>
          <Icon.Button
            name="github"
            color="white"
            backgroundColor="black"
            onPress={() => {
              Linking.openURL(repoUrl);
            }}>
            See on Github
          </Icon.Button>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>See Your Changes</Text>
          <Text style={styles.sectionDescription}>
            <ReloadInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Debug</Text>
          <Text style={styles.sectionDescription}>
            <DebugInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Learn More</Text>
          <Text style={styles.sectionDescription}>
            Read the docs to discover what to do next:
          </Text>
        </View>
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
