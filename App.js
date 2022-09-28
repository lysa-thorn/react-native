import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import LibraryScreen from './screens/LibraryScreen';
import SubscriptionScreen from './screens/SubscriptionScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
const Tab = createBottomTabNavigator(

);
export default function App()  {
  return (
    <NavigationContainer>
      <View style={styles.navBar}>
        <Image source={require('./app/images/logo.png')} style={{ width: 98, height: 22 }} />
        <View style={styles.rightNav}>
          <TouchableOpacity>
            <Icon style={styles.navItem} name="search" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon style={styles.navItem} name="notifications" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon style={styles.navItem} name="account-circle" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
          />

          <Tab.Screen 
            name="Shorts" 
            component={LibraryScreen} 
            options={{
              tabBarLabel: 'Shorts',
              tabBarIcon: ({ color, size }) => (
                <Icon name="flash-on" color={color} size={size} />
              ),
            }}
          />
        <Tab.Screen 
          name="Subscriptions" 
          component={SubscriptionScreen} 
          options={{
            tabBarLabel: 'Subscriptions',
            tabBarIcon: ({ color, size }) => (
              <Icon name="folder" color={color} size={size} />
            ),
          }}
          />
           <Tab.Screen 
            name="Library" 
            component={LibraryScreen} 
            options={{
              tabBarLabel: 'Library',
              tabBarIcon: ({ color, size }) => (
                <Icon name="video-library" color={color} size={size} />
              ),
            }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem: {
    marginLeft: 25
  },
  body: {
    flex: 1
  },
  tabBar: {
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c',
    paddingTop: 4
  }
})