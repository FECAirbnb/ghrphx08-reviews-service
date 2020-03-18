/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow, mount } from '../../enzyme';
import Popup from '../Popup';
import AllReviewsStar from '../AllReviewsStars';

const sampleReviewData = [
  {
    id: 17,
    review_date: 'June 2019',
    review_body:
      'Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit.Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit.Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit . Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit.',
    first_name: 'Trinidad',
    profile_picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/xilantra/128.jpg'
  }
];

describe('Popup component is rendered', () => {
  it('should render', () => {
    const test = shallow(<Popup reviewToRender={sampleReviewData} />);
  });

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Popup reviewToRender={sampleReviewData} />);
  });

  it('should have the correct elements', () => {
    expect(wrapper.exists('.popup')).toBe(true);
    expect(wrapper.exists('.inner-popup')).toBe(true);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.exists('#close-all-reviews')).toBe(true);
    expect(wrapper.exists('.star-ratings')).toBe(true);
    expect(wrapper.exists('.star-ratings-column')).toBe(true);
    expect(wrapper.exists('.reviews')).toBe(true);
  });
});

// button click tested in the app.test.jsx
