
import { View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import { useState, useEffect } from 'react';
import Icon from '../../components/Icon';
import { images } from '../../../src/assets';

import { useDispatch, useSelector } from 'react-redux';
import { setFace, getFace } from '../../store/actions/Config';
import React from 'react';



const Emoji = ({ navigation }) => {


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
  
  function close (){
  navigation.replace('TabNavigation');
  }
    const onPress = (faceType) => {
    if (emojiData.date === currentDay.getDate() + '-' + currentDay.getMonth() + '-' + currentDay.getFullYear()
      && emojiData.times >= 5) {
      alert('Five submissions per user per day is allowed');
      return;
    }
    alert(''+currentDay.getDate() + '-' + currentDay.getMonth() + '-' + currentDay.getFullYear())

    setEmojiData({
      faceData: faceType,
      date: currentDay.getDate() + '-' + currentDay.getMonth() + '-' + currentDay.getFullYear(),
      times: emojiData.times + 1,
    })

    setSelected(faceType);

  // navigation.replace('TabNavigation');
  setTimeout(() => {
    close()
  }, 100);
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


  // colors={['#00aaff', '#49baf2', '#9cd1ff']}

  return (

    <LinearGradient
    colors={['#00aaff', '#00aaff', '#00aaff']}
      start={{ x: 0.0, y: 0.1 }} end={{ x: 0.5, y: 0.35 }}
      locations={[1, 1.0, 0.1]}
      style={{ flex: 1 }}
    >

      <TouchableOpacity onPress={() => navigation.replace('TabNavigation')}>
        <Icon
              source={images.close}
              color={'#fff'}
              style={{ alignSelf: 'flex-end', marginTop: 50, marginRight: 20,
              width: 25, height: 25, margin: 12 }}
            />
      </TouchableOpacity>

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: -100,
        
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
