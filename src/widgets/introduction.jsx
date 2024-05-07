import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {height, width} from '../utils/constans';
import {AppColors} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../utils/routes';

const Introduction = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/int.png')} style={styles.image} />
      <TouchableOpacity
        onPress={() => navigation.navigate(PRODUCTLIST)}
        style={{
          position: 'absolute',
          bottom: 26,
          right: 17,
          backgroundColor: AppColors.PRIMARY,
          width: width * 0.34,
          height: height * 0.034,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: AppColors.BLACK,
            fontSize: 16,
            fontWeight: '500',
          }}>
          Shop Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: width - 30,
    height: height / 4,
    resizeMode: 'cover',
  },
});

export default Introduction;
