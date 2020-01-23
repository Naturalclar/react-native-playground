import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ProgressView} from '@react-native-community/progress-view';
import {} from 'react-navigation';

const styles = StyleSheet.create({
  container: {flex: 1},
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  margin: {
    marginBottom: 8,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
export const TestModule = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProgressView progress={0.5} />
      <View style={styles.margin} />
      <Text style={styles.title}>Progress Bar Example</Text>
      <View style={styles.margin} />
      <Text style={styles.heading}>Default</Text>
      <View style={styles.margin} />
      <ProgressView progress={0.5} />
      <View style={styles.margin} />
      <Text style={styles.heading}>0 %</Text>
      <View style={styles.margin} />
      <ProgressView progress={0} />
      <View style={styles.margin} />
      <Text style={styles.heading}>100 %</Text>
      <View style={styles.margin} />
      <ProgressView progress={1} />
      <View style={styles.margin} />
      <Text style={styles.heading}>Progress Tint Color</Text>
      <View style={styles.margin} />
      <ProgressView progressTintColor="teal" progress={0.6} />
      <View style={styles.margin} />
      <Text style={styles.heading}>Bar Style</Text>
      <View style={styles.margin} />
      <ProgressView progressViewStyle="bar" progress={0.3} />
      <View style={styles.margin} />
      <Text style={styles.heading}>Track Tint Color</Text>
      <View style={styles.margin} />
      <ProgressView
        trackTintColor="blue"
        progressTintColor="red"
        progress={0.7}
      />
      <View style={styles.margin} />
      <Text style={styles.heading}>Progress with Image</Text>
      <View style={styles.margin} />
      <ProgressView
        progressImage={require('./react.png')}
        progress={0.5}
        progressViewStyle="bar"
      />
    </SafeAreaView>
  );
};
