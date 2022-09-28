import React from 'react';
import { 
  Dimensions, 
  StyleSheet,
  View,
  Text,
} from "react-native";

const width = Dimensions.get('window');

export default class ShortsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={{textAlign: 'center', marginTop: 300}}>Shorts Screen</Text>
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



