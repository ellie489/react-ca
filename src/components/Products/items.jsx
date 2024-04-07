import React from 'react';
import styles from "./index.module.css";
import { Link } from 'react-router-dom';
import useCartStore from '../../zustand/store';
import { OnSale } from '../OnSale';

const ProductItem = ({ product }) => {
    const addToCart = useCartStore(state => state.addItem); 

    const handleAddToCart = () => {
        addToCart(product);
        console.log('Item added to cart:', product); 
    };
  
    return (
        <div className={styles.Card}>
            <Link to={`/product/${product.id}`}>
                <h3 className={styles.Title}>{product.title}</h3>
                <div>
                    <img className={styles.Image} src={product.image.url} alt="" />
                </div>
                <p className={styles.Description}>{product.description}</p>
                <p className={styles.Price}>{product.discountedPrice},- <OnSale product={product} /></p>
            </Link> 
            <div className={styles.ButtonContainer}>
            <Link to={`/product/${product.id}`}><button className={styles.ViewProductButton}>View Product</button></Link> 
                    <button className={styles.AddToCartButton} onClick={handleAddToCart}>Add to Cart</button>
                </div>
        </div> 
    );
};

export default ProductItem;
