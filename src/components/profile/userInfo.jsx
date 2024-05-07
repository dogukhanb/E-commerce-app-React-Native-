//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'; // Image bileşeni buradan import ediliyor
import {height, width} from '../../utils/constans';
import {AppColors} from '../../theme/colors';

// create a component
const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/photo.jpeg')}
        style={{
          width: width * 0.35,
          height: width * 0.35,
          resizeMode: 'contain',
          alignSelf: 'center',
          borderRadius: 1000,
        }}
      />
      <Text style={{fontWeight: '800', fontSize: 20, marginVertical: 10}}>
        Doğukhan Bağcı
      </Text>
      <Text style={{fontWeight: '500', fontSize: 14, color: AppColors.GRAY}}>
        Mobile Developer
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserInfo;
