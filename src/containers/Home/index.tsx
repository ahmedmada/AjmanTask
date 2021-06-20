import React from 'react';
import { Container, Emoji } from '../../components';
import CategorySlider from '../../components/CategorySlider';
import ProductList from '../../components/ProductList';
import Slider from '../../components/Slider';

import Products from '../../FakeData/Products';
import BrandsData from '../../FakeData/BrandsList';
import CategorysliderData from '../../FakeData/CategorySliderItems';



const Home = () => {
 
  return (

    <Container
      containerStyle={{ flex: 1 }}
      scrollEnabled>
      <Slider items={BrandsData} />
      <CategorySlider items={CategorysliderData} />
      <ProductList items={Products} />
    </Container>



  );
 
};

export default Home;
