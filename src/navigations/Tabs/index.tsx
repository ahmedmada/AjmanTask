import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import {
//   homeRoutes,
//   profileRoutes,
//   categoriesRoutes,
//   ordersRoutes,
//   brandsRoutes,
// } from 'src/constants/routeNames';

import {
  homeRoutes,
  profileRoutes,
  ordersRoutes,
  brandsRoutes,
} from '../../../src/constants/routeNames';

import HomeStack from './Home';
import ProfileStack from './Profile';
import BrandsStack from './Brands';
import OrdersStack from './Orders';
// import { images } from 'assets';
import { images } from '../../../src/assets';
// import { TabBar } from 'components';
import { TabBar } from '../../components';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name={homeRoutes.index}
        component={HomeStack}
        options={{
          tabBarIcon: images.home,
        }}
      />
      <Tab.Screen
        name={ordersRoutes.index}
        component={OrdersStack}
        options={{
          tabBarIcon: images.orders,
        }}
      />
      <Tab.Screen
        name={brandsRoutes.index}
        component={BrandsStack}
        options={{
          tabBarIcon: images.brands,
        }}
      />
      <Tab.Screen
        name={profileRoutes.index}
        component={ProfileStack}
        options={{
          tabBarIcon: images.profile,
        }}
      />
    </Tab.Navigator>
  );
}
