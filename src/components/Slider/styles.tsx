import { StyleSheet } from 'react-native';
import { verticalScale, scale, moderateScale } from '../../utilities/Scaling';
import { colors } from '../../assets';

export default StyleSheet.create({
  imageStyle: {
    width: scale(394),
    height: verticalScale(180),
    marginTop:verticalScale(15),
    marginHorizontal:scale(17),
    borderRadius:8,
  },
  imageStyleBorder:{ 
    borderRadius: 8 
  },
  dotStyle: {
    width: scale(8),
    height: verticalScale(8),
    borderRadius: moderateScale(8),
    backgroundColor: colors.redViolet,
    paddingVertical: 0,
    marginHorizontal: scale(-4),
  },
  inactiveDotStyle: {
    width: scale(7),
    height: verticalScale(7),
    borderRadius: moderateScale(7),
    backgroundColor: colors.grayViolet,
    paddingVertical: 0,
    marginHorizontal: scale(-4),
  },
  paginationContainerStyle: {
    paddingVertical: verticalScale(10),
  },
});
