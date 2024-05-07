//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {AppColors} from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';
import CategoryCard from '../../components/categories/CategoryCard';
import {screenStyle} from '../../styles/screenStyle';
import Spinner from '../../components/ui/Spinner';

// create a component
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getCategories = () => {
    setLoading(true);
    getRequest(CATEGORIES_URL)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={screenStyle.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={categories}
          renderItem={({item}) => <CategoryCard item={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  activeCategory: {
    padding: 12,
    backgroundColor: AppColors.PRIMARY,
    marginRight: 8,
    borderRadius: 100,
  },
  inactiveCategory: {
    padding: 12,
    backgroundColor: AppColors.SOFTGRAY,
    marginRight: 8,
    borderRadius: 100,
  },
});

export default Categories;
