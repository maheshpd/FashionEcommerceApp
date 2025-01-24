import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json';

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens'];

const HomeScreen = () => {
  const [products, setProducts] = useState(data.products);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  const handleLiked = item => {
    const newProducts = products.map(prod => {
      if (prod.id === item.id) {
        return {
          ...prod,
          isLiked: true,
        };
      }
      return prod;
    });
    setProducts(newProducts);
  };

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <Header />
      <Text style={styles.matchText}>Match Your Style</Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Fontisto name={'search'} size={26} color={'#C0C0C0'} />
        </View>

        <TextInput style={styles.textInput} placeholder="Search" />
      </View>

      <FlatList
        data={products}
        renderItem={({item, index}) => (
          <ProductCard item={item} handleLiked={handleLiked} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 200,
        }}
        ListHeaderComponent={
          <>
            <FlatList
              data={categories}
              renderItem={({item}) => (
                <Category
                  item={item}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              )}
              keyExtractor={item => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
      />
      {/* <View style={{flexDirection:"row"}}>
        <ProductCard/>
        <ProductCard/>
      </View> */}
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  matchText: {
    fontSize: 28,
    color: '#000000',
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  iconContainer: {
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,
    color: '#000000',
  },
});
