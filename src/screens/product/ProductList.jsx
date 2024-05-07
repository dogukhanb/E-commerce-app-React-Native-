import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {PRODUCTS_URL} from '../../service/urls';
import ProductCard from '../../components/product/ProductCard';
import {getRequest} from '../../service/verbs';
import {screenStyle} from '../../styles/screenStyle';
import CategorySelect from '../../components/widgets/CategorySelect';
import Spinner from '../../components/ui/Spinner';

const ProductList = ({route}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const filterCategory = route?.params?.category;
  const getAllProducts = category => {
    const url = category
      ? PRODUCTS_URL + `/category/${category}`
      : PRODUCTS_URL;
    setLoading(true);
    getRequest(url)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log('Hata', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getAllProducts(filterCategory);
  }, []);

  return (
    <View style={screenStyle.container}>
      <CategorySelect onSelect={value => getAllProducts(value)} />

      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 30}}
          numColumns={2}
          data={products}
          renderItem={({item}) => <ProductCard item={item} />}
        />
      )}
    </View>
  );
};

export default ProductList;
