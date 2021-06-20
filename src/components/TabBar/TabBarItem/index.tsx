import React, { useRef, useEffect } from 'react';
import { Pressable, Animated } from 'react-native';
import styles from '../styles';
// import Icon from 'src/components/Icon';
import Icon from '../../../components/Icon';
// import { colors } from 'assets';
import { colors } from '../../../assets';
import Svg, { Path } from 'react-native-svg';
import { scale, verticalScale, moderateScale } from '../../../utilities';

const TabBarItem = ({ isFocused, onPress, onLongPress, tabBarIcon }) => {
  const scaleY = useRef(new Animated.Value(isFocused ? 1 : 0)).current;
  useEffect(() => {
    Animated.timing(scaleY, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isFocused]);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabItemStyle}>

        <Icon
          source={tabBarIcon}
          color={isFocused ? colors.black : colors.blue}
        />
      
    </Pressable>
  );
};

export default TabBarItem;
