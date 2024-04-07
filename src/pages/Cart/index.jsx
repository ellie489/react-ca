import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../zustand/store';

const ShoppingCartPage = () => {
    const cartItems = useCartStore(state => state.items); 
    const clearCart = useCartStore(state => state.clearCart); 
    const navigate = useNavigate(); // Import useNavigate hook

    const totalPrice = cartItems.reduce((total, item) => {
        const itemTotal = item.discountedPrice * item.quantity;
        return total + itemTotal;
    }, 0);

    const handleCheckout = () => {
        // Navigate to the checkout page
        navigate('/checkout');
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cartItems.map(item => (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <p>Price: ${item.discountedPrice}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Subtotal: ${item.discountedPrice * item.quantity}</p>
                        </div>
                    ))}
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    <button onClick={handleCheckout}>Checkout</button>
                    <button onClick={clearCart}>Clear Cart</button>
                </>
            )}
        </div>
    );
};

export default ShoppingCartPage;
