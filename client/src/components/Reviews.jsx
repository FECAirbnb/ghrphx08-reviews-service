/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './component.css';

const Reviews = ({ review }) => {
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
      return <div className={styles['review-text']}>{review.review_body}</div>;
    }
    return (
      <div className={styles['review-text']}>
        {reviewDisplay}
        <a
          href=""
          className={styles['read-more-btn']}
          style={{ display: 'inline-block' }}
          onClick={e => readMoreHandler(e)}
        >
          {' '}
          ... read more
        </a>
      </div>
    );
  };

  return (
    <div className={styles['single-review']}>
      <div className={styles['user-info']}>
        <img
          className={styles['user-picture']}
          src={review.profile_picture}
          width="50"
          height="50"
        />
        <div className={styles['user-name']}>
          {review.first_name}
          <div className={styles['review-date']}>{review.review_date}</div>
        </div>
      </div>
      <div className={styles['review-info']}>
        <div className={styles['review-body']}>
          <div>{renderer()}</div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
// class Reviews extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       limitedReviewGreaterThan150Chars: `${this.props.review.review_body.slice(0, 150)} ... `
//     };
//   }

//   readMoreHandler(e) {
//     e.preventDefault();
//     const wholeReview = this.props.review.review_body;
//     this.setState({ limitedReviewGreaterThan150Chars: wholeReview });

//     if (e.target) {
//       e.target.style.display = 'none';
//     }
//   }

//   renderer() {
//     if (this.props.review.review_body.length <= 150) {
//       return <div className={styles['review-text']}>{this.props.review.review_body}</div>;
//     }
//     return (
//       <div className={styles['review-text']}>
//         {this.state.limitedReviewGreaterThan150Chars}
//         <a
//           href=""
//           className={styles['read-more-btn']}
//           style={{ display: 'inline-block' }}
//           onClick={e => this.readMoreHandler(e)}
//         >
//           read more
//         </a>
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div className={styles['single-review']}>
//         <div className={styles['user-info']}>
//           <img
//             className={styles['user-picture']}
//             src={this.props.review.profile_picture}
//             width="50"
//             height="50"
//           />
//           <div className={styles['user-name']}>
//             {this.props.review.first_name}
//             <div className={styles['review-date']}>{this.props.review.review_date}</div>
//           </div>
//         </div>
//         <div className={styles['review-info']}>
//           <div className={styles['review-body']}>
//             <div>{this.renderer()}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Reviews;
