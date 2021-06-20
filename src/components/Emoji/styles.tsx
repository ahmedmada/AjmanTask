import { StyleSheet } from 'react-native';
// import { verticalScale, scale, moderateScale } from 'utilities';
// import { colors } from 'assets';
import { scale, verticalScale, moderateScale } from '../../utilities';
import { colors } from '../../assets';

export default StyleSheet.create({
  containerStyle: {
    height: verticalScale(44),
  },
  leftIconStyle: {
    marginHorizontal: scale(10),
  },
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.greyBackground,
    marginRight: scale(11),
    height: verticalScale(44),
    borderRadius: moderateScale(5),
    minHeight: verticalScale(44),
    justifyContent: 'space-between',
  },
  inputStyle: {
    flex: 1,
    fontSize: moderateScale(10),
  },
  rightIconStyle: {
    marginHorizontal: scale(10),
  },
  labelStyle: {},
  errorText: {},
});
