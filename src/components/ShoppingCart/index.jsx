// ShoppingCart.jsx
import React from 'react';
import { ReactComponent as CartIcon } from "../../media/CartIcon.svg"
import { Link } from 'react-router-dom';
import useCartStore from '../../zustand/store';

const ShoppingCart = () => {
    const totalQuantity = useCartStore(state => state.totalQuantity); // Get the total quantity from the Zustand store

    return (
      <div>
        <Link to="/cart">
          <CartIcon />
          <span>{totalQuantity}</span>
        </Link>
      </div>
    );
};

export default ShoppingCart;
