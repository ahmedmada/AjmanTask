import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Brands } from '../../../../src/containers';
import { brandsRoutes } from '../../../../src/constants/routeNames';
import { Home } from '../../../../src/containers';
import { homeRoutes } from '../../../../src/constants/routeNames';

const BrandsStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <BrandsStack.Navigator>
      <BrandsStack.Screen name={brandsRoutes.index} component={Brands} />
    </BrandsStack.Navigator>
  );
}