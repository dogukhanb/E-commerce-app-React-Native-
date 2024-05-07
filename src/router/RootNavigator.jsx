import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../screens/cart';
import {
  CART,
  CHECKOUT,
  LOGIN,
  PRODUCTDETAIL,
  PRODUCTLIST,
  TAB,
} from '../utils/routes';
import TabNavigator from './TabNavigator';
import {AppColors} from '../theme/colors';
import ProductList from '../screens/product/ProductList';
import ProductDetail from '../screens/product/ProductDetail';
import HeaderTabRight from '../components/router/HeaderTabRight';
import CheckOut from '../screens/checkout';
import Login from '../screens/login';
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: AppColors.BLACK,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={CART} component={Cart} />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerRight: () => <HeaderTabRight />,
          title: route?.params?.title,
        })}
        name={PRODUCTLIST}
        component={ProductList}
      />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerRight: () => <HeaderTabRight />,
        })}
        name={PRODUCTDETAIL}
        component={ProductDetail}
      />
      <Stack.Screen name={CHECKOUT} component={CheckOut} />
      <Stack.Screen name={LOGIN} component={Login} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
