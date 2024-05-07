//import liraries
import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import {width} from '../../utils/constans';
import {AppColors} from '../../theme/colors';
import {Heart, HeartAdd} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {LOGIN, PRODUCTDETAIL} from '../../utils/routes';
import Button from '../ui/Button';
import StoreContext from '../../context';

const ProductCard = ({item}) => {
  const navigation = useNavigation();
  const {addCart, addToFavorites, isLogin} = useContext(StoreContext);
  const checkIsLogin = () => {
    if (isLogin) {
      addToFavorites(item);
    } else {
      Alert.alert(
        'Login',
        'You must be logged in to add products to favorites.',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Login', onPress: () => navigation.navigate(LOGIN)},
        ],
      );
    }
  };

  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}
      style={styles.container}>
      <Image
        source={{
          uri: item.image,
        }}
        style={{
          width: width * 0.4,
          height: width * 0.3,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text
          numberOfLines={3}
          style={{
            fontWeight: '700',
            marginVertical: 5,
            fontSize: 14,
            color: AppColors.BLACK,
          }}>
          {item.title}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 2}}>
          <Text
            style={{
              marginVertical: 5,
              fontSize: 12,
              color: AppColors.GRAY,
            }}>
            {item.category}
          </Text>
          <Text
            style={{
              fontWeight: '700',
              marginVertical: 5,
              fontSize: 14,
              color: AppColors.BLACK,
            }}>
            $ {item.price}
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => checkIsLogin()}>
            {item.favorite ? (
              <Heart size={20} color={AppColors.RED} variant="Bold" />
            ) : (
              <HeartAdd size={20} color={AppColors.BLACK} variant="outline" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Button onPress={() => addCart(item)} title="Add to Basket" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    margin: 5,
    flex: 1,
    marginVertical: 15,
  },
});

export default ProductCard;
