import { StyleSheet } from 'react-native';
// import { colors } from 'assets';
// import { scale, verticalScale, moderateScale } from 'utilities';
import { scale, verticalScale, moderateScale } from '../../../utilities';
import { colors } from '../../../assets';

export default StyleSheet.create({
  headerContainerStyle: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(11),
    paddingVertical: verticalScale(19),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  textStyle: {
    fontSize: moderateScale(18),
    fontWeight: '500',
  },
});
