import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },
  albumArt: {
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    borderColor: '#999',
    alignItems: 'center',
    width: 50,
    height: 50,
    marginRight: 10,
  },
  albumArtText: {fontSize: 24},
  title: {fontWeight: 'bold', marginBottom: 4},
});
type ListItemProps = {
  title: string;
  description: string;
  album: number;
};
export const ListItem = ({title, description, album}: ListItemProps) => (
  <View style={styles.container}>
    <View style={styles.albumArt}>
      <Text style={styles.albumArtText}>{album}</Text>
    </View>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
  </View>
);
