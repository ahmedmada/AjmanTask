
import React, { useState } from 'react';
import { Image, View, Dimensions, I18nManager, Text, ImageBackground } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from './styles';

const WINDOW_WIDTH = Dimensions.get('screen').width;


const Slider = ({ items }) => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  return (
    <View>
      <Carousel
        // layout="stack"
        data={items}
        enableMomentum
        onSnapToItem={(index) => setActiveDotIndex(index)}
        renderItem={({ item, index }) => (
          // <Image
          //   source={{ uri: item.image}}
          //   style={styles.imageStyle}
          //   resizeMode="cover"
          // />

          <ImageBackground imageStyle={styles.imageStyleBorder} style={styles.imageStyle} source={{ uri: item.image }} resizeMode="cover">
            <View style={{ flex: 1, justifyContent: 'flex-end', margin:18 }}>
              <Text style={{marginTop:5,color:'#fff',fontWeight:'300'}}>{item.title}</Text>
              <Text style={{marginTop:5,color:'#fff',fontWeight:'700'}}>{item.desc}</Text>
            </View>
          </ImageBackground>

        )}
        sliderWidth={WINDOW_WIDTH}
        itemWidth={WINDOW_WIDTH}
        inverted={I18nManager.isRTL}
      />
      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeDotIndex}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        containerStyle={styles.paginationContainerStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}

      />
    </View>
  );
};

export default Slider;
