import React from 'react';
import styles from "./index.module.css";
import ProductItem from './items';

const ProductList = ({ products }) => {
    return (
        <div className={styles.CardContainer}>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
