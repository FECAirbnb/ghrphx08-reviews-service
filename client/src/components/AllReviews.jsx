/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './component.css';

const AllReviews = ({ review }) => {
  const [reviewDisplay, setReviewDisplay] = useState(review.review_body.slice(0, 150));
  const readMoreHandler = e => {
    e.preventDefault();
    const wholeReview = review.review_body;
    setReviewDisplay(wholeReview);
    if (e.target) {
      e.target.style.display = 'none';
    }
  };

  const renderer = () => {
    if (review.review_body.length <= 150) {
      return <div>{reviewDisplay}</div>;
    }
    return (
      <div>
        {reviewDisplay}
        <a href="" className={styles['read-more-btn']} onClick={e => readMoreHandler(e)}>
          read more
        </a>
      </div>
    );
  };

  return (
    <div className={styles['all-reviews-display']}>
      <div className={styles['user-info']}>
        <img className={styles['user-picture']} src={review.profile_picture} />
        <div className={styles['user-name']}>
          {review.first_name}
          <div className={styles['review-date']}>{review.review_date}</div>
        </div>
      </div>
      <div className={styles['review-info']}>
        <div className={styles['all-review-body']}>
          <div>{renderer()}</div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
