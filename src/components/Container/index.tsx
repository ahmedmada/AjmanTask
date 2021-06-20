import React from 'react';
import styles from './styles';

import { ScrollView, View } from 'react-native';

const Container = ({
  containerStyle,
  children,
  scrollEnabled,
}) => {

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {scrollEnabled ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};

export default Container;
