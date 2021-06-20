import React from 'react';
import styles from './styles';
import { View } from 'react-native';

const Card = ({ style, children }) => {
  return <View style={[styles.cardContainerStyle, style]}>{children}</View>;
};

export default Card;
