import { StyleSheet } from 'react-native';
// import { verticalScale } from 'utilities';
// import { colors } from 'assets';
import { scale, verticalScale, moderateScale } from '../../utilities';
import { colors } from '../../assets';

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: verticalScale(16),
  },
  tabItemStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:10
  },
});
