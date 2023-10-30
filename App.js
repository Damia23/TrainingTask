import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
} from 'react-native';

import SignInScreen from './src/screens/SignInScreen'
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductCard from './src/components/ProductCard';
import NavigationBar from './src/components/NavigationBar';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {

  return (
      <NavigationContainer>
        <NavigationBar/>
      </NavigationContainer>
  );
}

export default App;
