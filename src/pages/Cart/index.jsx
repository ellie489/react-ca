import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../zustand/store';
import styles from "./index.module.css";

const ShoppingCartPage = () => {
    const cartItems = useCartStore(state => state.items); 
    const clearCart = useCartStore(state => state.clearCart); 
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((total, item) => {
        const itemTotal = item.discountedPrice * item.quantity;
        return total + itemTotal;
    }, 0);

    const handleCheckout = () => {
        navigate('/checkout');
    };

    const handleGoShopping = () => {
        navigate('/');
    };

    return (
        <div>
            <h1 className="centered-heading">Your Cart</h1>
            {cartItems.length === 0 ? (
                <div className={styles.CenteredContainer}> 
                    <p>Your cart is empty.</p>
                    <button className={styles.CheckoutButton} onClick={handleGoShopping}>Go Shopping</button> 
                </div>
            ) : (
                <div className={styles.CenteredContainer}> 
                    {cartItems.map(item => (
                        <div className={styles.CartItem} key={item.id}> 
                            <img src={item.image.url} alt={item.title} />
                            <div className={styles.CartItemDetails}>
                                <h3>{item.title}</h3>
                                <p>Price: ${item.discountedPrice}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Subtotal: ${item.discountedPrice * item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {cartItems.length > 0 && (
                <div className={styles.CenteredContainer}> 
                    <p className={styles.Total}>Total Price: ${totalPrice.toFixed(2)}</p>
                    <button className={styles.CheckoutButton} onClick={handleCheckout}>Checkout</button>
                    <button className={styles.ClearButton} onClick={clearCart}>Clear Cart</button>
                </div>
            )}
        </div>
    );
};

export default ShoppingCartPage;
