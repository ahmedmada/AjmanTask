import React from 'react';
import ProductItem from './productItem';
import { FlatList } from 'react-native';
import styles from './styles';

const ProductList = ({ items }) => {

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductItem {...item} />}
      showsHorizontalScrollIndicator={false}
      numColumns={2}
      style={styles.listStyle}
    />
  );
};
export default ProductList;
