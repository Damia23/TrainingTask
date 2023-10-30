import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import ProductCard from '../components/ProductCard';


const HomeScreen = () => {
    return (
      <SafeAreaView>
        <Text style={styles.title}>My Store</Text>
        <ProductCard/>
      </SafeAreaView>
      
      
    )
}
  
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
title:{
    fontSize: 24,
    fontWeight: 'bold',
},

})

export default HomeScreen;