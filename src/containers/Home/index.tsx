import React from 'react';
// import useGetData from 'src/services/useGetData';
// import useGetData from '../../services/useGetData';
// import { Container, SectionFactory } from 'components';
import { Container, Emoji } from '../../components';
// import BrandsList from '../../components/Slider';
import CategorySlider from '../../components/CategorySlider';
import ProductList from '../../components/ProductList';
import Slider from '../../components/Slider';

import Products from '../../FakeData/Products';
import BrandsData from '../../FakeData/BrandsList';
import CategorysliderData from '../../FakeData/CategorySliderItems';
import { View } from 'react-native';



const Home = () => {
  // const notes = useSelector(state => state)

  // return (

  //   <Container scrollEnabled>

  //     <BrandsList items={BrandsData} />
  //     <CategorySlider items={CategorysliderData} />
  //     <ProductList items={Products} />

  //   </Container>


  // );

  //   const faceSelected = useSelector(state => state.faceReducer.face)


  //   const dispatch = useDispatch();
  //   const [selected, setSelected] = useState(0);


  //   // var emojiData = {
  //   //   faceData: 0,
  //   //   date: '',
  //   //   times: 0,

  //   // };
  //   var currentDay = new Date();
  //   const [emojiData, setEmojiData] = useState({
  //     faceData: 0,
  //     date: '',
  //     times: 0,
  //   });
  //   useEffect(() => {
  //     dispatch(setFace(JSON.stringify(emojiData)));
  //  }, [emojiData]);

  //   const onPress = (faceType) => {
  //     // let end = new Date()
  //     // var times = emojiData.times;

  //     if (emojiData.date === currentDay.getDay() + '-' + currentDay.getMonth() + '-' + currentDay.getFullYear()
  //       && emojiData.times === 50) {
  //       alert('Five submissions per user per day is allowed');
  //       return;
  //     }
  //     alert(faceType + '')
  //     // emojiData.date = currentDay.getDay() + '-' + currentDay.getMonth() + '-' + currentDay.getFullYear();
  //     // emojiData.times = emojiData.times + 1;
  //     setEmojiData({
  //       faceData: faceType,
  //       date: currentDay.getDate() + '-' + currentDay.getMonth() + '-' + currentDay.getFullYear(),
  //       times: emojiData.times + 1,
  //     })
  //     // emojiData.faceData = faceType;
  //     // var faceData = 'date';


  //     // alert(emojiData.faceData + '')
  //         // setTimeout(()=>alert(emojiData.faceData + ''), 10000); 

  //     setSelected(faceType);
  //     // dispatch(setFace(JSON.stringify(emojiData)));
  //     // dispatch({ type: 'SET_FACE', payload: faceType })

  //     // type: SET_FACE, payload: face_type
  //   };
  //   // componentWillReceiveProps(nextProps) {
  //   //   if (nextProps.face_type) {
  //   //     this.props.navigation.navigate('Home');
  //   //   }
  //   // }

  //   useEffect(() => {
  //     // this.props.
  //     dispatch(getFace());
  //     // setTimeout(()=>alert(faceSelected), 1000); 

  //     // alert(faceSelected.faceData);


  //     // if(JSON.parse(faceSelected)){
  //     //   alert(faceSelected);
  //     // }
  //     // if (Object.keys(faceSelected).faceData) {
  //     //   alert(Object.keys(faceSelected).faceData);

  //     // }
  //     try {
  //     //   alert(JSON.parse(faceSelected).faceData+'')



  //     if (faceSelected !== null && faceSelected !== "" && faceSelected.faceData !== 0) {
  //       alert(faceSelected.length);
  //       setSelected(JSON.parse(faceSelected).faceData);
  //       setEmojiData(JSON.parse(faceSelected));
  //     }

  //     }catch(e){
  //       alert('error');

  //     }

  //     // alert(faceSelected);
  //     // const navFocusListener = props.navigation.addListener('didFocus', () => {
  //     //   // do some API calls here
  //     //   console.log('hooooks');
  //     // });
  //     // console.log('vvvvvvvvvvvvvvv');
  //     // console.log(props.face_type);


  //   }, []);
  return (

    <Container
      containerStyle={{ flex: 1 }}
      scrollEnabled>
      <Slider items={BrandsData} />
      <CategorySlider items={CategorysliderData} />
      <ProductList items={Products} />
    </Container>



  );
  {/* <BrandsList items={section} />
<CategorySlider items={section.list} />
<ProductList items={section} /> */}

  // return (
  //   <Container
  //     error={error}
  //     isLoading={isLoading}
  //     reFetch={reFetch}
  //     scrollEnabled>
  //     {Array.isArray(data)
  //       ? data.map((section) => (
  //           <SectionFactory section={section} key={section.title} />
  //         ))
  //       : null}
  //   </Container>
  // );
};

export default Home;
