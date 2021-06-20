import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import styles from './styles';

const ProductItem = ({
  id,
  title,
  desc,
  image,
  price,
  has_offer,
  offer_price,
  discount,
}) => {
  return (
    <Pressable key={id} style={styles.container}>
      <ImageBackground
        source={{ uri: image }}
        resizeMode="cover"
        imageStyle={styles.imageStyle}
        style={styles.image}>
          <Image
            source={{
              uri: 'https://www.iconpacks.net/icons/1/free-icon-heart-492.png',
            }}
            style={styles.favIcon}
          />
        <Text style={styles.desc}>
          {desc || 'this is a default description'}
        </Text>
      </ImageBackground>
    </Pressable>
  );
};

export default ProductItem;
