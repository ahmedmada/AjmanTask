import React from 'react';
// import { scale } from 'utilities';
import { scale } from '../../utilities';
import { Image } from 'react-native';

const Icon = ({ source, size = 21, color, style, ...props }) => {
  return (
    <Image
      source={source}
      style={[
        {
          width: scale(size),
          height: scale(size),
          resizeMode: 'contain',
          tintColor: color,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default Icon;
