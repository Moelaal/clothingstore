import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Filters, ProductList, Sort, PageHero } from '../components';

const ProductsPage = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Products page</title>
      </Helmet>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
