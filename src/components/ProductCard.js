import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  {
    id: 1,
    name: 'Product 1',
    price: 'RM23',
    image:  require('../assets/1.png'),
  },
  {
    id: 2,
    name: 'Product 2',
    price: 'RM23',
    image:  require('../assets/2.png'),
  },
  {
    id: 3,
    name: 'Product 3',
    price: 'RM23',
    image:  require('../assets/3.png'),
  },
  {
    id: 4,
    name: 'Product 4',
    price: 'RM23',
    image:  require('../assets/4.png'),
  },
]

const renderItem = ({item, index}) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image}/>
      </View>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.priceText}>{item.price}</Text>
    </View>

  )
}


const ProductCard = () => {
    return (
        <SafeAreaView style={styles.card}>
        <FlatList 
            data={data} 
            renderItem={renderItem} 
            keyExtractor={item => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
        />
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
      },
      listContainer: {
        width: Dimensions.get('window').width/2-20,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
      },
      imageContainer: {
        margin: 15,
        borderRadius: 10,
        overflow: 'hidden',
      },
      nameText: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 15,
      },
      priceText: {
        color: 'blue',
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10,
      },
      
  });

export default ProductCard;