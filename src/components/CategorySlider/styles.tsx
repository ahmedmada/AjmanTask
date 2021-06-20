import { StyleSheet } from 'react-native';
// import { scale } from 'utilities/Scaling';
// import { verticalScale } from 'utilities';
import { scale, verticalScale, moderateScale } from '../../utilities';
// import { colors } from 'assets';
import { colors } from '../../assets';
export default StyleSheet.create({
  categorySliderWrapper: {
    marginTop: verticalScale(31),
    backgroundColor: colors.greyBackground,
    padding: scale(10),
    marginLeft: scale(0),
  },
  categoryItemWrapper: {
    width:scale(150),
    height:verticalScale(100),
    backgroundColor:'#fff',
    flexDirection: 'column',
    marginLeft:scale(10),
    borderRadius:moderateScale(8),
    padding:moderateScale(10)
  },
  image: {
    width: scale(30),
    height: verticalScale(30),
    resizeMode: 'cover',
  },
  title: {
    fontSize: 12,
    color: colors.black,
    fontWeight:'bold',
    marginTop: verticalScale(15),
  },
  desc: {
    fontSize: 8,
    color: colors.dimGray,
    marginTop: verticalScale(5),
  },
});
