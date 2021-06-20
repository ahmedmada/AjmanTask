import { StyleSheet } from 'react-native';
// import { verticalScale, scale } from 'utilities';
// import { colors } from 'assets';
import { scale, verticalScale, moderateScale } from '../../../utilities';
import { colors } from '../../../assets';

export default StyleSheet.create({
  headerContainerStyle: {
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    flexDirection: 'row',
    paddingVertical: verticalScale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  rightItems:{
    justifyContent: 'center',
    flexDirection: 'row'
  },
  iconLeft: {
    marginLeft: scale(17),

  },
  iconRight: {
    marginRight: scale(17),
  },
  searchInputContainerStyle: {
    flex: 1,
  },
});
