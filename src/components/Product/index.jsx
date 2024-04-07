import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import useCartStore from '../../zustand/store';
import styles from "./index.module.css";
import { OnSale } from "../OnSale";

export default function Product() {
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { id } = useParams();
    const addToCart = useCartStore(state => state.addItem);

    useEffect(() => {
        async function getProductData(url) {
            try {
                setIsLoading(true);
                setIsError(false);

                const response = await fetch(url);
                const json = await response.json();

                setProduct(json.data);
                setReviews(json.data.reviews); 
            } catch (error) {
                console.error(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        if (id) {
            getProductData(`https://v2.api.noroff.dev/online-shop/${id}`);
        }

    }, [id]);

    const handleAddToCart = () => {
        addToCart(product);
    };

    if (isLoading || !product) {
        return <div>Loading...</div>; 
    }

    if (isError) {
        return <div>Error fetching product data</div>;
    }

    return (
        <div className={styles.contentContainer}>
        <div className={styles.productContainer}>
            <div className={styles.productDetails}>
                <div className={styles.productImage}>
                    <img src={product.image.url} alt={product.title} />
                </div>
                <div className={styles.productInfo}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.discountedPrice} <OnSale product={product} /></p>
                    <button className={styles.addToCartButton} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
            {reviews.length > 0 ? (
                <div className={styles.reviewsSection}>
                    <h3>Reviews</h3>
                    {reviews.map(review => (
                        <div key={review.id} className={styles.reviewCard}>
                            <p className={styles.ReviewRating}>Rating: {review.rating}</p>
                            <p>{review.username}</p>
                            <p>{review.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.noReviewsMessage}>
                    There are no reviews for this product yet.
                </div>
            )}
        </div></div>
    );
}