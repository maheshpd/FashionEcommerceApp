import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


const imageUrl =
  'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png';
const CardCard = (item) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.imageUrl}} style={styles.coverImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.circileSizeContainer}>
          <View style={[styles.circile,{backgroundColor: item.color,}]} />
          <View style={styles.sizeCircle} />
          <Text style={styles.sizeText}>{item.size}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <FontAwesome6 name={'trash'} color={'#F68CB5'} size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default CardCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  coverImage: {
    height: 125,
    width: '25%',
    borderRadius: 20,
  },
  cardContent: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: '#444444',
    fontWeight: '500',
  },
  price: {
    color: '#797979',
    marginVertical: 10,
    fontSize: 18,
  },
  circile: {
    height: 32,
    width: 32,
    borderRadius: 16,
    
  },
  circileSizeContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  sizeCircle: {
    backgroundColor: 'white',
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  sizeText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
