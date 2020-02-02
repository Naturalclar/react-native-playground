import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// @ts-ignore
import ToolbarAndroid from '@react-native-community/toolbar-android';

const styles = StyleSheet.create({
  container: {flex: 1},
  toolbar: {backgroundColor: '#E9EAED', height: 56},
});
export const TestModule = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ToolbarAndroid
        title="ToolbarAndroid Example"
        style={styles.toolbar}
        actions={[{title: 'Button', show: 'always'}]}
        // onIconClicked={() => this.setState({message: 'Menu is clicked'})}
        // onActionSelected={position =>
        //   this.setState({message: `action ${position} is clicked`})
        // }
      />
    </SafeAreaView>
  );
};
