import React from 'react';
import FetchProducts from '../../components/Products/fetch';

const HomePage = ({ addToCart }) => {
    return (
        <div>
            <h1>Home page</h1> 
            <FetchProducts addToCart={addToCart} />
        </div>
    );
}

export default HomePage;
