import React from 'react';
import styled from 'styled-components';
import { PageHero, StripeCheckout } from '../components';
// extra imports
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="checkout" />
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h1>The cart is empty</h1>
            <Link to="/products" className="btn">
              Fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
