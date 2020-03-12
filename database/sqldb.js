/* eslint-disable camelcase */
const Sequelize = require('sequelize');
const { userSampleData } = require('./mockData.js');
const { locationSampleData } = require('./mockData.js');
const { reviewSampleData } = require('./mockData.js');

const sequelize = new Sequelize('Airbnb', 'root', 'password', {
  dialect: 'mysql'
});

// user sample data

// User model
const User = sequelize.define('users', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  first_name: { type: Sequelize.STRING },
  profile_picture: { type: Sequelize.STRING },
  join_date: { type: Sequelize.DATEONLY },
  is_host: { type: Sequelize.BOOLEAN },
  is_superhost: { type: Sequelize.BOOLEAN, allowNull: true },
  response_rate: { type: Sequelize.INTEGER, allowNull: true },
  response_time: { type: Sequelize.STRING, allowNull: true },
  accommodation_bio: { type: Sequelize.STRING, allowNull: true }
});

// location sample data

// Location model
const Location = sequelize.define('locations', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  location_name: { type: Sequelize.STRING },
  star_average: { type: Sequelize.INTEGER },
  userId: { type: Sequelize.INTEGER }
});

// reviews sample data

// review model
const Review = sequelize.define('reviews', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  review_date: { type: Sequelize.DATEONLY },
  review_body: { type: Sequelize.TEXT },
  userId: { type: Sequelize.INTEGER },
  locationId: { type: Sequelize.INTEGER }
  // location_id: { type: Sequelize.INTEGER },
  // userId
});

User.hasMany(Location);

User.sync({ force: true }).then(() => {
  User.bulkCreate(userSampleData);
});

Location.sync({ force: true }).then(() => {
  Location.bulkCreate(locationSampleData);
});

User.belongsTo(Review);
Location.belongsTo(Review);

Review.sync({ force: true }).then(() => {
  Review.bulkCreate(reviewSampleData);
});

// User.sync({ force: true }).then(() => {
//   userSampleData.map(async person => {
//     User.create(person);
//   });
// });

// Location.sync({ force: true }).then(() => {
//   locationSampleData.map(async location => {
//     await Location.create(location);
//   });
// });

// Review.sync({ force: true }).then(() => {
//   reviewSampleData.map(async review => {
//     await Review.create(review);
//   });
// });
