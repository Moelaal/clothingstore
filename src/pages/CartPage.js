import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';
import { Helmet } from 'react-helmet-async';

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    <Wrapper className="page-100">
      <h2>No cart items</h2>
      <Link to="/products">Fill it</Link>
    </Wrapper>;
  }
  return (
    <main>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
