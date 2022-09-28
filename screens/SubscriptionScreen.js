import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import VideoItem from '../app/components/videoItem';
import data from '../app/subscription.json';
export default class SubscriptionScreen extends Component {
  render(){
    return (
      <View style={styles.container}>
      <View style={styles.body}>
        <FlatList
        data={data.items}
        renderItem={(video)=><VideoItem video={video.item} />}
        keyExtractor={(item)=>item.id}
        ItemSeparatorComponent={()=><View style={{height:0.5,backgroundColor:'#E5E5E5'}}
        />}
         />
      </View>
    </View>
    );
  }
  
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1
  },
});
