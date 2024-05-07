import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import StoreContext from '../../context';
import CartCard from '../../components/cart/CartCard';
import {screenStyle} from '../../styles/screenStyle';
import Summery from '../../components/cart/summery';

const Cart = () => {
  const {cart} = useContext(StoreContext);
  return (
    <View style={screenStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart}
        renderItem={({item}) => <CartCard item={item} />}
        keyExtractor={item => item.id}
      />
      <Summery />
    </View>
  );
};

export default Cart;
