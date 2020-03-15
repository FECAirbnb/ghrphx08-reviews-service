import React from 'react';

class AllReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: true
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.allReviews = this.allReviews.bind(this);
  }

  render() {
    return <div>{this.state.placeHolder}</div>;
  }
}

export default AllReviews;
