import React from 'react';
import FetchProducts from '../../components/Products/fetch';

const HomePage = ({ addToCart }) => {
    return (
        <div>
            <h1 className="centered-heading">Welcome to the online shop!</h1>
            <FetchProducts addToCart={addToCart} />
        </div>
    );
}

export default HomePage;
