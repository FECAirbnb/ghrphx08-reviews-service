import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Reviews from './components/Reviews.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      reviewToRender: null,
      locationId: 1
    };
    this.renderComponent = this.renderComponent.bind(this);
  }

  renderComponent(state) {
    if (this.state.reviewToRender === null) {
      return <div>No Reviews</div>;
    } else {
      return this.state.reviewToRender.map((review, idx) => {
        return <Reviews review={review} key={idx} />;
      });
    }
  }

  componentDidMount() {
    // $.ajax({
    //   type: 'GET',
    //   url: '/api/reviews/',
    //   ContentType: 'application/json',
    //   success: data => {
    //     this.setState(state => {
    //       state.allReviews = data;
    //     });
    //   },
    //   error: err => {
    //     console.log('Error! Ajax get request in componentDidMount failed', err);
    //   }
    // });

    // $.ajax({
    //   type: 'GET',
    //   url: '/api/reviews/1',
    //   ContentType: 'application/json',
    //   success: data => {
    //     this.setState({
    //       reviewToRender: data
    //     });
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });
    axios
      .get(`/api/reviews/${this.state.locationId}`)
      .then(result => {
        console.log(result);
        this.setState({ reviewToRender: result.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>App component </div>
        <div>{this.renderComponent()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
