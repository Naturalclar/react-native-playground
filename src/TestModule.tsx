import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
});

export const TestModule = () => {
  return <SafeAreaView style={styles.container} />;
};
