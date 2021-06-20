import { StyleSheet } from 'react-native';
// import { verticalScale, scale, moderateScale } from '../../utilities/Scaling';
// import { colors } from 'assets';
import { scale, verticalScale, moderateScale } from '../../utilities';
import { colors } from '../../assets';

export default StyleSheet.create({
  products: {
    paddingHorizontal: scale(11),
    marginTop: verticalScale(54),
  },
  listStyle:{
    marginHorizontal: scale(12),
  },
  container: {
    width: scale(198),
    borderColor: colors.borderGrey,
    borderWidth: scale(1),
    borderRadius: moderateScale(4),
    margin: scale(5),
  },
  image: {
    height: verticalScale(150),
    justifyContent:'space-between',
    padding:moderateScale(10)
  },
  imageStyle:{
    borderRadius:moderateScale(8)
  },
  discountTextContainerStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.red,
    paddingVertical: verticalScale(10),
    paddingLeft: scale(21),
    paddingRight: scale(12),
    borderBottomLeftRadius: moderateScale(6),
  },
  discount: {
    fontSize: moderateScale(12),
    color: colors.white,
    fontWeight: '600',
  },
  titleConatienr: {
    margin: scale(12),
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: moderateScale(15),
    textAlign: 'left',
  },
  desc: {
    fontSize: moderateScale(10),
    fontWeight:'bold',
    color:colors.white
  },
  containerPrice: {
    flexDirection: 'row',
  },
  price: {
    fontSize: moderateScale(13),
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.electricViolet,
    marginTop: verticalScale(10),
    lineHeight: verticalScale(20),
    marginRight: scale(11),
  },
  oldPrice: {
    fontSize: 12,
    marginTop: verticalScale(10),
    lineHeight: 20,
    color: colors.blackOpacity(0.5),
    textDecorationLine: 'line-through',
  },
  button: {
    flexDirection: 'row',
    height: verticalScale(45),
  },
  buyNow: {
    flex: 2,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyNowText: {
    color: colors.white,
    fontSize: moderateScale(13),
    fontWeight: '600',
  },
  fav: {
    flex: 1,
    backgroundColor: colors.borderGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favIcon: {
    width: scale(19),
    height: scale(19),
    alignSelf:'flex-end',
  },
  titleText: {
    fontSize: moderateScale(18),
    textAlign: 'left',
    fontWeight: '600',
    marginBottom: verticalScale(20),
  },
});
