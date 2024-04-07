// import { useState, useEffect } from 'react';

// const useShoppingCart = () => {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         const storedCartItems = localStorage.getItem('cart');
//         if (storedCartItems) {
//             setCartItems(JSON.parse(storedCartItems));
//         }
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cartItems));
//     }, [cartItems]);

//     const addToCart = (item) => {
//         console.log("Item added to cart:", item);
//         const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
    
//         if (existingItemIndex !== -1) {
//             // If the item already exists in the cart, update its quantity
//             const updatedCartItems = [...cartItems];
//             updatedCartItems[existingItemIndex].quantity += 1;
//             console.log("Updated cart items:", updatedCartItems);
//             setCartItems(updatedCartItems);
//         } else {
//             // If the item does not exist, add it to the cart with quantity 1
//             setCartItems([...cartItems, { ...item, quantity: 1 }]);
//         }
//     };
    

//     const removeFromCart = (index) => {
//         const updatedCart = [...cartItems];
//         updatedCart.splice(index, 1);
//         setCartItems(updatedCart);
//     };

//     const clearCart = () => {
//         setCartItems([]);
//     };

//     return {
//         cartItems,
//         addToCart,
//         removeFromCart,
//         clearCart,
//     };
// };

// export default useShoppingCart;
