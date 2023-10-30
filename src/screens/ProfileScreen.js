import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  Image
} from 'react-native';

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Image
            style={styles.image}
            source= {require('../assets/1.png')}
          />
          <Text style={styles.name}>Abdullah</Text>
          <View>
          <Text style={styles.email}>Abdullah@email.com</Text>
          </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
  },

})

export default ProfileScreen;