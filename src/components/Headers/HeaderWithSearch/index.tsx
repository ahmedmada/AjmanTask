import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CartIcon from '../../CartIcon';
import Images from '../../../assets/Images';

const HeaderWithSearch = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.headerContainerStyle}>
      <View style={styles.contentContainerStyle}>
        <CartIcon style={styles.iconLeft} icon = {Images.cart} />
        <View style={styles.rightItems}>
          <CartIcon style={styles.iconRight} icon = {Images.delete} />
          <CartIcon style={styles.iconRight} icon = {Images.search} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderWithSearch;
