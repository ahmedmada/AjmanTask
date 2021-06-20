import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
  createNavigatorFactory,
} from '@react-navigation/native';
import isFunction from 'lodash/isFunction';
import styles from './styles';

function SideBar({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}) {
  const { state, navigation, descriptors } = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
  });

  return (
    <NavigationHelpersContext.Provider value={navigation}>
      {isFunction(screenOptions?.header) &&
        screenOptions?.header({ title: screenOptions.title })}
      <View style={styles.containerStyle}>
        <View style={styles.tabBarStyle}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;

            return (
              <TouchableOpacity
                key={route.key}
                onPress={() => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!event.defaultPrevented) {
                    navigation.dispatch({
                      ...TabActions.jumpTo(route.name),
                      target: state.key,
                    });
                  }
                }}
                style={styles.tabItemStyle(isFocused)}>
                {isFocused ? <View style={styles.leftBarStyle} /> : null}
                <Text style={styles.tabTextStyle(isFocused)}>
                  {descriptors[route.key].options.title || route.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={[{ flex: 1 }, contentStyle]}>
          {descriptors[state.routes[state.index].key].render()}
        </View>
      </View>
    </NavigationHelpersContext.Provider>
  );
}
const createSideBarNavigator = createNavigatorFactory(SideBar);

export { createSideBarNavigator };
