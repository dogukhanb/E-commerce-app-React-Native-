import React, {Component} from 'react';
import {
  Category,
  Home2,
  NotificationFavorite,
  Profile,
} from 'iconsax-react-native';
import {CATEGORİES, FAVORİTES, HOME, PROFILE} from '../../utils/routes';

const TabIcon = ({name, size, color}) => {
  if (name == HOME) {
    return <Home2 size={size} color={color} variant="Bold" />;
  } else if (name == CATEGORİES) {
    return <Category size={size} color={color} variant="Bold" />;
  } else if (name == FAVORİTES) {
    return <NotificationFavorite size={size} color={color} variant="Bold" />;
  } else if (name == PROFILE) {
    return <Profile size={size} color={color} variant="Bold" />;
  }
};

export default TabIcon;
