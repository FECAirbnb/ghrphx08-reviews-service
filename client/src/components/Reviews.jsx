/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

const Reviews = ({ review }) => {
  return (
    <div className="single-review">
      <div className="user-info">
        <img className="user-picture" src={review.profile_picture} width="50" height="50" />
        <div className="user-name">
          {review.first_name}
          <div className="review-date">{review.review_date}</div>
        </div>
      </div>
      <div className="review-info">
        <div className="review-body">
          <div>{review.review_body}</div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
