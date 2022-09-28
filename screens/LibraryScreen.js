import * as React from 'react';
import {
  Button, 
  Text, 
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
 } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from '../app/components/historyvideoItem';
import data from '../app/subscription.json';
function SettingsStackScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.libries}>
          <View >
            <Text style={styles.history}>History</Text>
            <FlatList 
              horizontal
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              legacyImplementation={false}
              data={data.items}
              renderItem={(video)=><VideoItem style={styles.flatList} video={video.item} />}
              keyExtractor={(item)=>item.id}
              ItemSeparatorComponent={()=><View style={{height: 0.1}}
          />}
         />
          </View>

          <TouchableOpacity style={styles.library}>
            <Icon style={styles.icon} name="video-library" size={25} />
            <Text>Your Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.library}>
            <Icon style={styles.icon} name="file-download" size={25} />
            <Text>downloads</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.library}>
            <Icon style={styles.icon} name="local-movies" size={25} />
            <Text>downloads</Text>
          </TouchableOpacity>
          <Text style={styles.playlist}>Playlist</Text>
          <TouchableOpacity style={styles.library}>
            <Icon style={styles.icon} name="add" size={25} />
            <Text>New playlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.library}>
            <Icon style={styles.icon} name="watch-later" size={25} />
            <Text>New playlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.library}>
            <Icon style={styles.icon} name="thumb-up" size={25} />
            <Text>Like</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
export default SettingsStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatList: {
    width: 105,
  },
  libries: {
    paddingLeft: 15,
  },
  library: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
   marginRight: 10, 
  },
  playlist: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  history: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10,
  }
});



