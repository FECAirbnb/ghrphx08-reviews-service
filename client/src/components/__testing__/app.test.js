/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from '../../enzyme';

import App from '../../app';

describe('App component', () => {
  it('renders the app component', () => {
    const test = shallow(<App />);
  });

  const wrapper = shallow(<App />);
  beforeEach(() => {
    wrapper.setState({ locationId: 5 });
    wrapper.setState({
      reviewToRender: [
        {
          id: 17,
          review_date: 'June 2019',
          review_body:
            'Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Aut possimus sint sed sit earum. Quos excepturi quaerat voluptas et. Excepturi eum odit quis voluptates aperiam incidunt accusamus quo necessitatibus. Iste facilis incidunt sapiente sequi voluptate. Amet deleniti corrupti qui repellat ducimus ullam eius et.',
          overall_star_rating: 1,
          cleanliness_rating: 3,
          communication_rating: 5,
          check_in_rating: 4,
          accuracy_rating: 2,
          location_rating: 1,
          value_rating: 3,
          userId: 17,
          locationId: 5,
          createdAt: '2020-03-17T04:09:01.000Z',
          updatedAt: '2020-03-17T04:09:01.000Z',
          first_name: 'Trinidad',
          profile_picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/xilantra/128.jpg',
          join_date: '2019-06-02 07:00:00',
          is_host: 0,
          is_superhost: null,
          response_rate: null,
          response_time: null,
          accommodation_bio: null
        },
        {
          id: 45,
          review_date: 'January 2019',
          review_body:
            'Sed repellat at pariatur impedit consectetur est eum odio. Earum quos qui sit iste ad. Magni neque quia quia ut unde quibusdam autem dolor. Quam saepe blanditiis quae.',
          overall_star_rating: 3,
          cleanliness_rating: 4,
          communication_rating: 1,
          check_in_rating: 2,
          accuracy_rating: 3,
          location_rating: 4,
          value_rating: 2,
          userId: 45,
          locationId: 5,
          createdAt: '2020-03-17T04:09:01.000Z',
          updatedAt: '2020-03-17T04:09:01.000Z',
          first_name: 'Angel',
          profile_picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/wake_gs/128.jpg',
          join_date: '2019-11-02 06:40:33',
          is_host: 0,
          is_superhost: null,
          response_rate: null,
          response_time: null,
          accommodation_bio: null
        },
        {
          id: 35,
          review_date: 'July 2020',
          review_body:
            'Qui soluta in nisi beatae fugit quisquam deserunt. Dolor suscipit itaque quia quos tenetur. Itaque beatae at minima. Corporis adipisci minima modi facere minima tempora aspernatur et.',
          overall_star_rating: 5,
          cleanliness_rating: 1,
          communication_rating: 1,
          check_in_rating: 1,
          accuracy_rating: 5,
          location_rating: 2,
          value_rating: 1,
          userId: 35,
          locationId: 5,
          createdAt: '2020-03-17T04:09:01.000Z',
          updatedAt: '2020-03-17T04:09:01.000Z',
          first_name: 'Axel',
          profile_picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/victorerixon/128.jpg',
          join_date: '2019-10-10 07:55:08',
          is_host: 0,
          is_superhost: null,
          response_rate: null,
          response_time: null,
          accommodation_bio: null
        },
        {
          id: 32,
          review_date: 'August 2020',
          review_body:
            'Unde architecto excepturi temporibus. Exercitationem officiis nesciunt nobis est. Consectetur quis in provident.',
          overall_star_rating: 5,
          cleanliness_rating: 1,
          communication_rating: 4,
          check_in_rating: 2,
          accuracy_rating: 1,
          location_rating: 2,
          value_rating: 5,
          userId: 32,
          locationId: 5,
          createdAt: '2020-03-17T04:09:01.000Z',
          updatedAt: '2020-03-17T04:09:01.000Z',
          first_name: 'Sarai',
          profile_picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/kapaluccio/128.jpg',
          join_date: '2020-03-21 06:35:40',
          is_host: 0,
          is_superhost: null,
          response_rate: null,
          response_time: null,
          accommodation_bio: null
        },
        {
          id: 35,
          review_date: 'March 2019',
          review_body:
            'Asperiores praesentium odit qui rerum in. Architecto id tenetur id delectus consequatur. Ratione officiis sit. Dolores exercitationem architecto reprehenderit. Qui nesciunt unde delectus eligendi voluptas asperiores fugiat.',
          overall_star_rating: 3,
          cleanliness_rating: 3,
          communication_rating: 5,
          check_in_rating: 3,
          accuracy_rating: 3,
          location_rating: 5,
          value_rating: 4,
          userId: 35,
          locationId: 5,
          createdAt: '2020-03-17T04:09:01.000Z',
          updatedAt: '2020-03-17T04:09:01.000Z',
          first_name: 'Axel',
          profile_picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/victorerixon/128.jpg',
          join_date: '2019-10-10 07:55:08',
          is_host: 0,
          is_superhost: null,
          response_rate: null,
          response_time: null,
          accommodation_bio: null
        },
        {
          id: 26,
          review_date: 'July 2019',
          review_body:
            'Sapiente commodi quia. Aut nihil voluptatem reiciendis eius doloremque illum saepe autem. Occaecati et quas.',
          overall_star_rating: 1,
          cleanliness_rating: 4,
          communication_rating: 1,
          check_in_rating: 3,
          accuracy_rating: 5,
          location_rating: 3,
          value_rating: 5,
          userId: 26,
          locationId: 5,
          createdAt: '2020-03-17T04:09:01.000Z',
          updatedAt: '2020-03-17T04:09:01.000Z',
          first_name: 'Keaton',
          profile_picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/emileboudeling/128.jpg',
          join_date: '2019-12-17 14:53:30',
          is_host: 0,
          is_superhost: null,
          response_rate: null,
          response_time: null,
          accommodation_bio: null
        },
        {
          id: 34,
          review_date: 'September 2019',
          review_body:
            'Est rem quia. Minus et illum ullam qui in ratione. Nisi laboriosam non eos ab debitis.',
          overall_star_rating: 4,
          cleanliness_rating: 2,
          communication_rating: 5,
          check_in_rating: 5,
          accuracy_rating: 2,
          location_rating: 1,
          value_rating: 1,
          userId: 34,
          locationId: 5,
          createdAt: '2020-03-17T04:09:01.000Z',
          updatedAt: '2020-03-17T04:09:01.000Z',
          first_name: 'Abbigail',
          profile_picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/javorszky/128.jpg',
          join_date: '2020-02-16 23:28:26',
          is_host: 0,
          is_superhost: null,
          response_rate: null,
          response_time: null,
          accommodation_bio: null
        }
      ]
    });
    wrapper.setState({ showAllReviews: false });
  });

  it('should have a location number as a state', () => {
    expect(wrapper.state('locationId')).toEqual(5);
  });

  it('should have reveiws in the reviews to render state', () => {
    expect(wrapper.state('reviewToRender')).toHaveLength(7);
  });

  it('should have a show all reviews button', () => {
    wrapper.find('button').text('Show all 7 reviews');
  });

  it('should change the state of showAllReviews on click of the show all button', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.state('showAllReviews')).toBeTruthy();
    wrapper.find('button').simulate('click');
    expect(wrapper.state('showAllReviews')).toBeFalsy();
  });

  it('should have 6 reviews under the reviews component that are rendered', () => {
    expect(wrapper.find('#reviews').children().length).toBe(6);
  });
});
