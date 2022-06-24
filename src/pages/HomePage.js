import React from 'react';
import { Helmet } from 'react-helmet-async';

import { FeaturedProducts, Hero, Services, Contact } from '../components';

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Clothing Store</title>
      </Helmet>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
