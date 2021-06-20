import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import Icon from '../../components/Icon';
import { images } from '../../../src/assets';

import { useDispatch, useSelector } from 'react-redux';
import { getFace } from '../../store/actions/Config';



// JSON.parse(faceSelected).faceData
////////////////////////////////
const { sub, interpolate, Extrapolate } = Animated;
const { width } = Dimensions.get("window");
const size = 50;
interface ButtonProps {
  progress: Animated.Node<number>;
  y: Animated.Node<number>;
}


export default ({ progress, y }: ButtonProps) => {

  // const [selected, setSelected] = useState(0);

  // useEffect(() => {
  //   // this.props.

  //     dispatch(getFace());
  //     // setTimeout(()=>alert(faceSelected), 1000); 

  //     setSelected(JSON.parse(faceSelected).faceData);

  //     // setSelected(JSON.parse(faceSelected).faceData);
  //     // setEmojiData(JSON.parse(faceSelected));


  // }, []);
  const translateX = interpolate(progress, {
    inputRange: [0, 0.4],
    outputRange: [width - size - 8, 0],
  });
  const translateY = sub(y, size / 2);
  const opacity = interpolate(progress, {
    inputRange: [0, 0.1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const faceSelected = useSelector(state => state.faceReducer.face)
  const dispatch = useDispatch();

  dispatch(getFace());

  return (

    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
        transform: [{ translateX }, { translateY }],

      }}
    >
      {faceSelected === null || faceSelected === '' || faceSelected.faceData === 0?
        <Icon
          source={images.emoji3}
          color={'#fff'}
          size={30}
        />
        :

        <Icon
          source={JSON.parse(faceSelected).faceData === 1 ? images.emoji1 : JSON.parse(faceSelected).faceData === 2 ? images.emoji2 : images.emoji3}
          color={'#f0f'}
          size={30}
        />
      }

    </Animated.View>
  );
};
{/* <Icon
          source={JSON.parse(faceSelected).faceData === 1 ?images.search:JSON.parse(faceSelected).faceData === 2?images.emoji2:images.orders}
          color={JSON.parse(faceSelected).faceData === 0 ?'#fff':'#f0f'}
        /> */}

        // <Icon
        //   source={images.search}
        //   color={'#f0f'}
        // />