import React from 'react';
import styles from './styles';
import TabBarItem from './TabBarItem';
import { SafeAreaView } from 'react-native-safe-area-context';

const TabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <SafeAreaView style={styles.containerStyle} edges={['bottom']}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarItem
            isFocused={isFocused}
            key={route.key}
            onLongPress={onLongPress}
            onPress={onPress}
            tabBarIcon={options.tabBarIcon}
          />
        );
      })}
    </SafeAreaView>
  );
};

export default TabBar;
