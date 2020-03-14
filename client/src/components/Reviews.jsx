/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

// const Reviews = ({ review }) => {
//   return (
//     <div className="single-review">
//       <div className="user-info">
//         <img className="user-picture" src={review.profile_picture} width="50" height="50" />
//         <div className="user-name">
//           {review.first_name}
//           <div className="review-date">{review.review_date}</div>
//         </div>
//       </div>
//       <div className="review-info">
//         <div className="review-body">
//           <div>{review.review_body}</div>
//           <a onClick={}>read more</a>
//         </div>
//       </div>
//     </div>
//   );
// };

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limitedReview: `${this.props.review.review_body.slice(0, 140)}...`
    };
    // this.readMoreHandler = this.readMoreHandler.bind(this);
  }

  readMoreHandler(e) {
    e.preventDefault();
    const wholeReview = this.props.review.review_body;
    this.setState({ limitedReview: wholeReview });
    e.target.style.display = 'none';
  }

  render() {
    return (
      <div className="single-review">
        <div className="user-info">
          <img
            className="user-picture"
            src={this.props.review.profile_picture}
            width="50"
            height="50"
          />
          <div className="user-name">
            {this.props.review.first_name}
            <div className="review-date">{this.props.review.review_date}</div>
          </div>
        </div>
        <div className="review-info">
          <div className="review-body">
            <div>
              {this.state.limitedReview}{' '}
              <a
                href=""
                className="read-more-btn"
                style={{ display: 'inline-block' }}
                onClick={e => this.readMoreHandler(e)}
              >
                read more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
