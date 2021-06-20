import React from 'react';
import { Pressable, View } from 'react-native';
import Icon from '../Icon';
import Images from '../../assets/Images';
import Text from '../Text';
import styles from './styles';

const CartIcon = ({ style ,icon }) => {
  const count = 0;

  return (
    <Pressable>
      <Icon source={icon} style={style} />
    </Pressable>
  );
};

export default CartIcon;
