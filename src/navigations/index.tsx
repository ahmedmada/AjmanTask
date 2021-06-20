import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigationService';
import TabsNavigator from './Tabs';

//////////////////////

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


// export const assets = [
//   require("../components/LiquidSwipe/assets/firstPageImage.png"),
//   require("../components/LiquidSwipe/assets/secondPageImage.png"),
// ];
const { width } = Dimensions.get("window");

const RootNavigation = ({ }) => {
  // export default function RootNavigation() {
  // const Emoji = ({ }) => {


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


  ///////////////////
  // <Content
  //       backgroundColor="#4d1168"
  //       source={assets[1]}
  //       title1="For"
  //       title2="Gamers"
  //       color="#fd5587"
  //     />

  // colors={['#9ae3f5', '#54cdeb', '#07c2f0']} 
  //     start={{x: 0.5, y: 0.0}} end={{x: 0.0, y: 0.25}}
  //     locations={[0,0.5,0.6]}
  //     style={{flex:1,justifyContent:'center'}}



  const faceSelected = useSelector(state => state.faceReducer.face)


  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);

  var currentDay = new Date();
  const [emojiData, setEmojiData] = useState({
    faceData: 0,
    date: '',
    times: 0,
  });
  useEffect(() => {
    dispatch(setFace(JSON.stringify(emojiData)));
  }, [emojiData]);

  const onPress = (faceType) => {

    if (emojiData.date === currentDay.getDay() + '-' + currentDay.getMonth() + '-' + currentDay.getFullYear()
      && emojiData.times === 5) {
      alert('Five submissions per user per day is allowed');
      return;
    }
    setEmojiData({
      faceData: faceType,
      date: currentDay.getDate() + '-' + currentDay.getMonth() + '-' + currentDay.getFullYear(),
      times: emojiData.times + 1,
    })

    setSelected(faceType);
  };


  useEffect(() => {

    dispatch(getFace());

    try {



      if (faceSelected !== null && faceSelected !== "" && faceSelected.faceData !== 0) {

        setSelected(JSON.parse(faceSelected).faceData);
        setEmojiData(JSON.parse(faceSelected));
      }

    } catch (e) {

    }

  }, []);

  return (
    <View style={{ flex: 1 }}>


      <LinearGradient
        colors={['#00aaff', '#49baf2', '#9cd1ff']}
        start={{ x: 0.0, y: 0.1 }} end={{ x: 0.5, y: 0.35 }}
        locations={[1, 1.0, 0.1]}
        style={{ flex: 1 }}
      >

        <TouchableOpacity>
          <Text style={{ alignSelf: 'flex-end', marginTop: 50, marginRight: 20, color: '#fff', fontWeight: '400', fontSize: 22 }} >x</Text>
        </TouchableOpacity>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -100
        }}>
          <Text style={{ color: '#fff', fontWeight: '600', fontSize: 15 }}>How was your experience?</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity onPress={(e) => onPress(1)} >
              <Icon
                source={images.emoji1}
                color={selected === 1 ? '#f70cb9' : '#fff'}
                style={{ width: 40, height: 40, margin: 12 }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={(e) => onPress(2)}>
              <Icon
                source={images.emoji2}
                color={selected === 2 ? '#f70cb9' : '#fff'}
                style={{ width: 40, height: 40, margin: 12 }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={(e) => onPress(3)}>
              <Icon
                source={images.emoji3}
                color={selected === 3 ? '#f70cb9' : '#fff'}
                style={{ width: 40, height: 40, margin: 12 }}
              />
            </TouchableOpacity>

          </View>
        </View>
      </LinearGradient>




      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <Weave sideWidth={sWidth} {...{ centerY, horRadius, vertRadius }}>

            <NavigationContainer ref={navigationRef}>
              <TabsNavigator />
            </NavigationContainer>

          </Weave>
          <Button y={centerY} {...{ progress }} />
        </Animated.View>
      </PanGestureHandler>

    </View>
  );
}

export default RootNavigation;
