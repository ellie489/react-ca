import React from 'react';
import Layout from '../Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../../pages/Home';
import ProductPage from '../../pages/Product';
import ContactPage from '../../pages/Contact';
import CartPage from '../../pages/Cart';
import ProductDetails from '../Product';
import ShoppingCart from '../ShoppingCart';
import useCartStore from '../../zustand/store';
import CheckoutPage from '../../pages/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><HomePage /></Layout>,
  },
  {
    path: '/Product',
    element: <Layout><ProductPage /></Layout>,
  },
  {
    path: '/Contact',
    element: <Layout ><ContactPage /></Layout>, 
  },
  {
    path: '/Cart',
    element: <Layout ><CartPage /></Layout>, 
  },
  {
    path: '/product/:id',
    element: <Layout ><ProductDetails /></Layout>, 
  },
  {
    path: '/Checkout',
    element: <Layout ><CheckoutPage /></Layout>, 
  },
  {
    path: '*',
    element: <Layout ><NotFoundPage /></Layout>, 
  }
]);


function App() {

  const cartItems = useCartStore((state) => state.items);

  return (
    <RouterProvider router={router}>
      <div>
        <ShoppingCart cartItems={cartItems} />

        <h1>Welcome to My App</h1>
      </div>
    </RouterProvider>
  );
}

export default App;
