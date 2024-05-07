import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/colors';

const Badge = ({count}) => {
  return (
    <View
      style={{
        backgroundColor: AppColors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        width: 22,
        height: 22,
        borderRadius: 100,
        position: 'absolute',
        zIndex: 99,
        right: -7,
        top: -8,
      }}>
      <Text style={{color: AppColors.WHITE, fontSize: 12, fontWeight: '500'}}>
        {count}
      </Text>
    </View>
  );
};

export default Badge;
