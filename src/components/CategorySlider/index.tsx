import React from 'react';
import { FlatList, View } from 'react-native';
import CategoryItem from './categoryItem';
import Styles from './styles';
const CategorySlider = ({ items }) => {
  return (
    <View style={Styles.categorySliderWrapper}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <CategoryItem {...item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default CategorySlider;
