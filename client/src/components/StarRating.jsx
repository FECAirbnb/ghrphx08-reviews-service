/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';
import styles from './component.css';

const StarRating = ({
  ratings: { overall, cleanliness, communication, checkin, accuracy, location, value },
  numberOfReviews
}) => {
  return (
    <div>
      <div id={styles['rating-average']}>
        <span>
          <img
            id={styles['star-image']}
            src="https://pngimage.net/wp-content/uploads/2018/06/pink-star-png-1.png"
            width="20px"
            height="20px"
            alt="not loaded"
          />
          {overall} ({numberOfReviews} reviews)
        </span>
      </div>
      <div id={styles['star-rating-bars']}>
        <div className={styles['rating-bar']}>
          <span className={styles['rating-titles']}>Cleanliness</span>
          <span className={styles['rating-value']}>{cleanliness}</span>
          <div className={styles['progress-bar']}>
            <div style={{ width: `${cleanliness * 2}em` }} />
          </div>
        </div>
        <div className={styles['rating-bar']}>
          <span className={styles['rating-titles']}>Accuracy</span>
          <span className={styles['rating-value']}>{accuracy}</span>
          <div className={styles['progress-bar']}>
            <div style={{ width: `${accuracy * 2}em` }} />
          </div>
        </div>
        <div className={styles['rating-bar']}>
          <span className={styles['rating-titles']}>Communication</span>
          <span className={styles['rating-value']}>{communication}</span>
          <div className={styles['progress-bar']}>
            <div style={{ width: `${communication * 2}em` }} />
          </div>
        </div>
        <div className={styles['rating-bar']}>
          <span className={styles['rating-titles']}>Location</span>
          <span className={styles['rating-value']}>{location}</span>
          <div className={styles['progress-bar']}>
            <div style={{ width: `${location * 2}em` }} />
          </div>
        </div>
        <div className={styles['rating-bar']}>
          <span className={styles['rating-titles']}>Check-in</span>
          <span className={styles['rating-value']}>{checkin}</span>
          <div className={styles['progress-bar']}>
            <div style={{ width: `${checkin * 2}em` }} />
          </div>
        </div>
        <div className={styles['rating-bar']}>
          <span className={styles['rating-titles']}>Value</span>
          <span className={styles['rating-value']}>{value}</span>
          <div className={styles['progress-bar']}>
            <div style={{ width: `${value * 2}em` }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarRating;
