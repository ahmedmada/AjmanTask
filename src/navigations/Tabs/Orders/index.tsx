import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Orders } from '../../../../src/containers';
import { ordersRoutes } from '../../../../src/constants/routeNames';
// import { Home } from '../../../../src/containers';
// import { homeRoutes } from '../../../../src/constants/routeNames';

const OrdersStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name={ordersRoutes.index} component={Orders} />
    </OrdersStack.Navigator>
  );
}