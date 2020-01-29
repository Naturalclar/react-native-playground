import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
});
export const TestModule = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>This Page will be used to test out components</Text>
      </View>
    </SafeAreaView>
  );
};
