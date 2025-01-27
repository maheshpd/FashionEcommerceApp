import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import CardCard from '../components/CardCard';
import { CartContext } from '../context/CartContext';
// import { CartContext } from '../context/CartContext';

const CartScreen = () => {
  // const {carts } = useContext(CartContext);
  const { carts } = useContext(CartContext);
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>
      {/* <CardCard />
      <CardCard /> */}
      <FlatList
        data={carts}
        ListHeaderComponent={
          <>
            
          </>
        }
        renderItem={CardCard}
        ListFooterComponent={
          <>
          <View style={styles.priceContainer}>
              <View style={styles.priceAndTitle}>
                <Text style={styles.text}>Total: </Text>
                <Text style={styles.text}>$0.0</Text>
              </View>
              <View style={styles.priceAndTitle}>
                <Text style={styles.text}>Shipping: </Text>
                <Text style={styles.text}>Shipping: </Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.priceAndTitle}>
              <Text style={styles.text}>Grand Total:</Text>
              <Text style={[styles.text, {color: 'black', fontWeight: '700'}]}>
                $119.0{' '}
              </Text>
            </View>
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
      />

      <TouchableOpacity style={styles.checkoutContainer}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  priceAndTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    color: '#757575',
    fontSize: 18,
  },
  priceContainer: {
    marginTop: 40,
  },
  divider: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  checkoutContainer: {
    backgroundColor: '#E96E6E',
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
});
