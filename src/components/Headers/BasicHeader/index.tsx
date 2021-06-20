import React from 'react';
import Text from 'react-native';
import CartIcon from '../../CartIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const BasicHeader = ({ title }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.headerContainerStyle}>
      <Text style={styles.textStyle}>{title}</Text>
      
    </SafeAreaView>
  );
};

export default BasicHeader;
