import React from 'react';
import { 
  Dimensions, 
  StyleSheet,
  View,
  Text,
} from "react-native";

const width = Dimensions.get('window');

export default class VideoDatailScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>History</Text>

        </View >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});



