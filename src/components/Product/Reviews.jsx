import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Reviews = ({ reviews }) => {
    return (
        <div className={styles.reviewsSection}>
            <h3>Reviews</h3>
            {reviews.map(review => (
                <div className={styles.reviewCard} key={review.id}>
                    <p>Rating: {review.rating}</p>
                    <p>{review.username}</p>
                    <p>{review.description}</p>
                </div>
            ))}
        </div>
    );
};

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Reviews;
