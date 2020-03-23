/* eslint-disable no-console */
/* eslint-disable camelcase */
const mysql = require('mysql');
const Sequelize = require('sequelize');
const { userSampleData } = require('./mockData.js');
const { locationSampleData } = require('./mockData.js');
const { reviewSampleData } = require('./mockData.js');
const connect = mysql.createConnection({
  user: 'root',
  password: 'password',
  insecureAuth: true
});

connect.connect(err => {
  if (err) throw err;
  console.log('Connected');
  connect.query('CREATE DATABASE IF NOT EXISTS StayKay', error => {
    if (error) throw error;
    console.log('Database Created');
    connect.end();
  });
});

const sequelize = new Sequelize('StayKay', 'root', 'password', {
  dialect: 'mysql'
});

// User model
const User = sequelize.define('users', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  first_name: { type: Sequelize.STRING },
  profile_picture: { type: Sequelize.STRING },
  join_date: { type: Sequelize.STRING },
  is_host: { type: Sequelize.BOOLEAN },
  is_superhost: { type: Sequelize.BOOLEAN, allowNull: true },
  response_rate: { type: Sequelize.INTEGER, allowNull: true },
  response_time: { type: Sequelize.STRING, allowNull: true },
  accommodation_bio: { type: Sequelize.STRING, allowNull: true }
});

// Location model
const Location = sequelize.define('locations', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  location_name: { type: Sequelize.STRING },
  star_average: { type: Sequelize.INTEGER },
  userId: { type: Sequelize.INTEGER }
});

// review model
const Review = sequelize.define('reviews', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  review_date: { type: Sequelize.STRING },
  review_body: { type: Sequelize.TEXT },
  overall_star_rating: { type: Sequelize.INTEGER },
  cleanliness_rating: { type: Sequelize.INTEGER },
  communication_rating: { type: Sequelize.INTEGER },
  check_in_rating: { type: Sequelize.INTEGER },
  accuracy_rating: { type: Sequelize.INTEGER },
  location_rating: { type: Sequelize.INTEGER },
  value_rating: { type: Sequelize.INTEGER },
  userId: { type: Sequelize.INTEGER },
  locationId: { type: Sequelize.INTEGER }
});

User.sync({ force: true })
  .then(() => {
    User.bulkCreate(userSampleData);
  })
  .then(() => {
    Location.sync({ force: true })
      .then(() => {
        Location.bulkCreate(locationSampleData);
      })
      .then(() => {
        Review.sync({ force: true })
          .then(() => {
            Review.bulkCreate(reviewSampleData);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.log(err);
  });

// Location.sync({ force: true })
//   .then(() => {
//     Location.bulkCreate(locationSampleData);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Review.sync({ force: true })
//   .then(() => {
//     Review.bulkCreate(reviewSampleData);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// User.belongsTo(Review);
// Location.belongsTo(Review);
// User.hasMany(Location);
