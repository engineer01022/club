import React from 'react';
import Slider from '../components/slider';
import Cad from '../components/Cad';
import Products from '../components/products';
import Topic from '../components/Topic';
import Offer from '../components/offer';
import Title from '../components/Title';
const Home = () => {
  return (
    <div>
    <Slider />
    <Topic />
    <Title title=" الاشتراكات"/>
    <Products />
    <Title title=" العروض"/>

    <Offer />
    </div>
  );
};

export default Home;