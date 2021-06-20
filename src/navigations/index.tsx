import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigationService';
import TabsNavigator from './Tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import Animated, {
  Value,
  cond,
  multiply,
  divide,
  interpolate,
} from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { onGestureEvent, snapPoint } from "react-native-redash";

import Weave from "../components/LiquidSwipe/Weave";
import { followPointer, snapProgress } from "../components/LiquidSwipe/AnimationHelpers";
import {
  initialSideWidth,
  initialWaveCenter,
  sideWidth,
  waveHorRadius,
  waveHorRadiusBack,
  waveVertRadius,
} from "../components/LiquidSwipe/WeaveHelpers";
import Button from "../components/LiquidSwipe/Button";
import LinearGradient from 'react-native-linear-gradient';


import { useState, useEffect } from 'react';
import Icon from '../components/Icon';
import { images } from '../../src/assets';

import { useDispatch, useSelector } from 'react-redux';
import { setFace, getFace } from '../store/actions/Config';
import { Emoji } from '../components';


const { width } = Dimensions.get("window");
const Stack = createStackNavigator();

const TabNavigation = ({ navigation }) => {


  const y = new Value(initialWaveCenter);
  const translationX = new Value(0);
  const velocityX = new Value(0);
  const state = new Value(State.UNDETERMINED);
  const gestureHandler = onGestureEvent({
    translationX,
    velocityX,
    y,
    state,
  });
  const maxDist = width - initialSideWidth;
  const isBack = new Value(0);
  const gestureProgress = cond(
    isBack,
    interpolate(translationX, {
      inputRange: [0, maxDist],
      outputRange: [1, 0],
    }),
    interpolate(translationX, {
      inputRange: [-maxDist, 0],
      outputRange: [0.4, 0],
    })
  );
  const progress = snapProgress(
    gestureProgress,
    state,
    isBack,
    snapPoint(
      gestureProgress,
      divide(
        multiply(-1, velocityX),
        cond(isBack, maxDist, multiply(maxDist, 0.4))
      ),
      [0, 1]
    )
  );
  const centerY = followPointer(y);
  const horRadius = cond(
    isBack,
    waveHorRadiusBack(progress),
    waveHorRadius(progress)
  );
  const vertRadius = waveVertRadius(progress);
  const sWidth = sideWidth(progress);

  // return (
  //   <View style={{ flex: 1 }}>


  //     <Emoji></Emoji>



  //     <PanGestureHandler {...gestureHandler}>
  //       <Animated.View style={StyleSheet.absoluteFill}>
  //         <Weave sideWidth={sWidth} {...{ centerY, horRadius, vertRadius }}>

  //           <NavigationContainer ref={navigationRef}>
  //             <TabsNavigator />
  //           </NavigationContainer>

  //         </Weave>
  //         <Button y={centerY} {...{ progress }} />
  //       </Animated.View>
  //     </PanGestureHandler>

  //   </View>
  // );

  const [clicked, setClicked] = useState(false);


  const onPress = () => {
    if (clicked === false) {
      setClicked(true);
      navigation.replace('Emoji');
    }
  }
  return (

    <View style={{ flex: 1 }}>


      <View style={{ flex: 1, backgroundColor: '#00aaff' }}></View>



      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <Weave sideWidth={sWidth} {...{ centerY, horRadius, vertRadius }}>

            <TabsNavigator />

          </Weave>
          <View onTouchEnd={() => onPress()} onTouchMove={() => onPress()} >

            <Button y={centerY} {...{ progress }} />
          </View>
        </Animated.View>
      </PanGestureHandler>

    </View>

  );
}



const RootNavigation = () => {

  // I18n.locale = 'ar-Us';
  // I18nManager.forceRTL(false);
  // AsyncStorage.getItem('lang').then((value) => value.includes('ar')?I18n.locale = 'ar-Us':I18n.locale = 'en-Us')

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigation">

        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Emoji"
          component={Emoji}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
