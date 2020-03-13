import React from 'react';

const Reviews = ({ review }) => {
  return (
    <div>
      <div className="review-date">
        <div>{review.review_date}</div>
      </div>
      <div className="review-body">
        <div>{review.review_body}</div>
      </div>
    </div>
  );
};

export default Reviews;
