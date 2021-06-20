import { StyleSheet } from 'react-native';
// import { colors } from 'assets';
import { colors } from '../../assets';
// import { scale, moderateScale, verticalScale } from 'utilities';
import { scale, verticalScale, moderateScale } from '../../utilities';

export default StyleSheet.create({
  countStyle: {
    position: 'absolute',
    backgroundColor: colors.redViolet,
    width: scale(18),
    height: scale(18),
    borderRadius: scale(9),
    justifyContent: 'center',
    alignItems: 'center',
    left: scale(15),
    top: verticalScale(-17),
  },
  textStyle: {
    color: colors.white,
    fontSize: moderateScale(11),
  },
});
