import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import shortid from 'shortid';

const styles = StyleSheet.create({
  header: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  listItem: {
    height: 70,
    flexDirection: 'row',
    flex: 1,
  },
  deleteButton: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  listBody: {
    flex: 1,
    padding: 16,
  },
});

type Album = {
  id: string;
  title: string;
  artist: string;
};

const ListHeader: React.FC<{onPress: () => void}> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.header} onPress={onPress}>
      <Text style={styles.headerText}>Add Item</Text>
    </TouchableOpacity>
  );
};
const ListItem: React.FC<{album: Album; onDelete: () => void}> = ({
  album,
  onDelete,
}) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.listBody}>
        <Text>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text>x</Text>
      </TouchableOpacity>
    </View>
  );
};
export const LayoutAnimationList = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  return (
    <FlatList
      renderItem={({item}) => (
        <ListItem
          album={item}
          onDelete={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            setAlbums(albums.filter((album) => album.id !== item.id));
          }}
        />
      )}
      data={albums}
      ListHeaderComponent={
        <ListHeader
          onPress={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            setAlbums([
              ...albums,
              {id: shortid(), title: 'Good bye April', artist: 'saji'},
            ]);
          }}
        />
      }
    />
  );
};
