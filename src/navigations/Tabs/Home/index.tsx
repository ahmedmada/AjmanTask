import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { Home } from 'containers';
// import { homeRoutes } from 'src/constants/routeNames';
// import { HeaderWithSearch } from 'components';
import { Home } from '../../../../src/containers';
import { homeRoutes } from '../../../../src/constants/routeNames';
import { HeaderWithSearch } from '../../../../src/components';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: HeaderWithSearch,
      }}>
      <HomeStack.Screen name={homeRoutes.index} component={Home} />
    </HomeStack.Navigator>
  );
}
