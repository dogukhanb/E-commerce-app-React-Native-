//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {height} from '../../utils/constans';
import {AppColors} from '../../theme/colors';
import {Button} from '@ui-kitten/components';
import {PRODUCTLIST} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

// create a component
const ListEmptyComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>
          You haven't added any products yet.
        </Text>
      </View>
      <Button
        onPress={() => navigation.navigate(PRODUCTLIST)}
        style={styles.button}
        status="info">
        All Products
      </Button>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: height / 2,
    backgroundColor: AppColors.WHITE,
  },
  button: {
    marginVertical: 20,
  },
});

//make this component available to the app
export default ListEmptyComponent;
