import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, LayoutAnimation} from 'react-native';
import {
  SwipeableFlatList,
  SwipeableQuickActions,
  SwipeableQuickActionButton,
} from 'react-native-swipe-list';
import {ListItem} from './ListItem';
const styles = StyleSheet.create({
  container: {flex: 1},
});

const initialData = [...Array(30)].map((_, index) => index);

export const TestModule = () => {
  const [data, setData] = useState(initialData);

  return (
    <SafeAreaView style={styles.container}>
      <SwipeableFlatList
        data={data.map(index => ({
          title: 'Hello World',
          description: 'lorem ipsum',
          album: index,
        }))}
        renderItem={({item}) => <ListItem {...item} />}
        keyExtractor={index => index.album.toString()}
        renderLeftActions={({item}) => (
          <SwipeableQuickActions>
            <SwipeableQuickActionButton
              style={{
                backgroundColor: 'red',
                padding: 16,
                width: '100%',
                height: '100%',
              }}
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
                setData(data.filter(value => value !== item.album));
              }}
              text="delete"
              textStyle={{fontWeight: 'bold', color: 'white'}}
            />
          </SwipeableQuickActions>
        )}
        renderRightActions={({item}) => (
          <SwipeableQuickActions>
            <SwipeableQuickActionButton
              style={{
                backgroundColor: 'gray',
                padding: 16,
                width: '100%',
                height: '100%',
              }}
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
                setData(data.filter(value => value !== item.album));
              }}
              text="Other"
              textStyle={{fontWeight: 'bold', color: 'white'}}
            />
            <SwipeableQuickActionButton
              style={{
                backgroundColor: 'orange',
                padding: 16,
                width: '100%',
                height: '100%',
              }}
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
                setData(data.filter(value => value !== item.album));
              }}
              text="Flag"
              textStyle={{fontWeight: 'bold', color: 'white'}}
            />
            <SwipeableQuickActionButton
              style={{
                backgroundColor: 'purple',
                padding: 16,
                width: '100%',
                height: '100%',
              }}
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
                setData(data.filter(value => value !== item.album));
              }}
              text="Archive"
              textStyle={{fontWeight: 'bold', color: 'white'}}
            />
          </SwipeableQuickActions>
        )}
      />
    </SafeAreaView>
  );
};
