import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../../zustand/store';

const CheckoutPage = () => {
    const clearCart = useCartStore(state => state.clearCart); 

    // Clear the cart when the component mounts
    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <div>
            <h1>Thank you! Your order has been placed.</h1>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default CheckoutPage;
