import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import NotiScreen from '../screens/NotiScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ScanScreen from '../screens/ScanScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 



const Tab = createBottomTabNavigator()

const NavigationBar = () => {

    return(
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
              position: 'absolute',
              elevation: 0,
              backgroundColor: '#ffffff',
              height: 90,
              //...styles.shadow
          }
      }}
        >
             <Tab.Screen name="Home" component={HomeScreen} 
             options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
             <Tab.Screen name="Product" component={ProductScreen} 
             options={{
              tabBarLabel: 'Product',
              tabBarIcon: ({ color, size }) => (
                <Icon name="package" color={color} size={size} />
              ),
            }}
             />
             <Tab.Screen name="Scan" component={ScanScreen}
             options={{
              tabBarLabel: 'Scan',
              tabBarIcon: ({ color, size }) => (
                <Icon name="plus-circle" color={color} size={size} />
              ),
            }}
             />
             <Tab.Screen name="Notification" component={NotiScreen}
             options={{
              tabBarLabel: 'Notification',
              tabBarIcon: ({ color, size }) => (
                <Icon name="bell" color={color} size={size} />
              ),
            }}
             />
             <Tab.Screen name="Profile" component={ProfileScreen} 
             options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <Icon name="account" color={color} size={size} />
              ),
            }}
             />
        </Tab.Navigator>
    )
    
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },


});

export default NavigationBar;