import React from 'react';
import { Helmet } from 'react-helmet-async';

import { FeaturedProducts, Hero, Services, Contact } from '../components';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Clothing Store</title>
      </Helmet>
    </>
  );
};

export default HomePage;
