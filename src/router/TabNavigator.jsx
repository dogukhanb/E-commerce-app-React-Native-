import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CATEGORİES, FAVORİTES, HOME, PROFILE} from '../utils/routes';
import Home from '../screens/home';
import Categories from '../screens/categories';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';
import {AppColors} from '../theme/colors';
import TabIcon from '../components/router/TabIcon';
import HeaderTabRight from '../components/router/HeaderTabRight';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),
        headerRight: ({focused, color, size}) => <HeaderTabRight />,
        tabBarActiveTintColor: AppColors.PRIMARY,
        tabBarInactiveTintColor: AppColors.GRAY,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={CATEGORİES} component={Categories} />
      <Tab.Screen name={FAVORİTES} component={Favorites} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
