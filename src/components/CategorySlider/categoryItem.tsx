import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import styles from './styles';
const CategoryItem = ({ id, title, desc, image }) => {
  return (
    <TouchableOpacity key={id}>
      <View style={styles.categoryItemWrapper}>

        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />

        <Text style={styles.title}> {title}</Text>
        <Text style={styles.desc}> {desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
