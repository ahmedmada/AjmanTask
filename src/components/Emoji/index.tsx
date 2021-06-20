
import { View, Dimensions, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import { useState, useEffect } from 'react';
import Icon from '../../components/Icon';
import { images } from '../../../src/assets';

import { useDispatch, useSelector } from 'react-redux';
import { setFace, getFace } from '../../store/actions/Config';
import React from 'react';



const Emoji = ({ }) => {


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
    alert('press')
    if (emojiData.date === currentDay.getDay() + '-' + currentDay.getMonth() + '-' + currentDay.getFullYear()
      && emojiData.times === 50) {
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
    // setSelected(1);

    

    try {



      if (faceSelected !== null && faceSelected !== "" && faceSelected.faceData !== 0) {

        setSelected(JSON.parse(faceSelected).faceData);
        setEmojiData(JSON.parse(faceSelected));
      }

    } catch (e) {

    }

  }, []);


  return (

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
        <View style={{ flexDirection: 'row', marginTop: 10, }}>
          <TouchableOpacity onPress={() => onPress(1)} >
            <Icon
              source={images.emoji1}
              color={selected === 1 ? '#f70cb9' : '#fff'}
              style={{ width: 40, height: 40, margin: 12 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onPress(2)}>

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

  );
};

export default Emoji;
