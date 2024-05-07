//import liraries
import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import WidgetTitle from '../components/widgets/WidgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORY_URL} from '../service/urls';
import WidgetProductCard from '../components/widgets/ProductCard';
import CategorySelect from '../components/widgets/CategorySelect';

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const getBestSellerProducts = (category = "men's clothing") => {
    getRequest(CATEGORY_URL + `/${category}`, {limit: 5, sort: 'desc'})
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log('Hata', error);
      });
  };
  useEffect(() => {
    getBestSellerProducts();
  }, []);
  return (
    <View style={styles.container}>
      <WidgetTitle title={'Best Seller'} category={"men's clothing"} />
      <CategorySelect onSelect={value => getBestSellerProducts(value)} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={products}
        renderItem={({item}) => <WidgetProductCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BestSeller;
