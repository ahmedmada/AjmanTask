import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '../../../../src/containers';
import { profileRoutes } from '../../../../src/constants/routeNames';
import { Home } from '../../../../src/containers';
import { homeRoutes } from '../../../../src/constants/routeNames';

const ProfileStack = createStackNavigator();

export default function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name={profileRoutes.index} component={Profile} />
    </ProfileStack.Navigator>
  );
}