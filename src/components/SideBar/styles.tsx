import { StyleSheet } from 'react-native';
// import { colors } from 'assets';
// import { verticalScale, scale, moderateScale } from 'utilities';
import { scale, verticalScale, moderateScale } from '../../utilities';
import { colors } from '../../assets';

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    marginTop: verticalScale(2),
  },
  tabItemStyle: (isFocused) => ({
    backgroundColor: isFocused ? colors.white : colors.borderGrey,
    borderBottomWidth: isFocused ? 0 : 1,
    borderColor: colors.silver,
    flexDirection: 'row',
    justifyContent: 'center',
    height: verticalScale(88),
    alignItems: 'center',
  }),
  tabBarStyle: {
    width: scale(115),
    backgroundColor: colors.borderGrey,
  },
  tabTextStyle: (isFocused) => ({
    textAlign: 'center',
    color: isFocused ? colors.redViolet : colors.dimGray,
    fontWeight: 'bold',
    fontSize: moderateScale(13),
  }),
  leftBarStyle: {
    width: scale(4),
    backgroundColor: colors.redViolet,
    position: 'absolute',
    left: 0,
    flex: 1,
    height: '100%',
  },
});
