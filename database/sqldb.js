const Sequelize = require('sequelize');
const moment = require('moment');

const sequelize = new Sequelize('Airbnb', 'root', 'password', {
  dialect: 'mysql'
});

const sampleData = [
  {
    firstName: 'Andrea',
    profilePicture: {''},
    joinDate: new Date(2020, 02, 23)
  },
  { firstName: 'Jake' },
  { firstName: 'Jose' },
  { firstName: 'Isaac' },
  { firstName: 'Mimi' },
  { firstName: 'Willow' },
  { firstName: 'Bella' }
];

const User = sequelize.define('users', {
  firstName: { type: Sequelize.STRING },
  profilePicture: { type: Sequelize.STRING },
  joinDate: { type: Sequelize.DATEONLY },
  host: { type: Sequelize.BOOLEAN },
  numberReviews: { type: Sequelize.NUMBER },
  superHost: { type: Sequelize.BOOLEAN },
  responseRate: { type: Sequelize.FLOAT },
  responseTime: { type: Sequelize.INTEGER },
  accommodationBio: { type: Sequelize.STRING }
});

User.sync({ force: true }).then(() => {
  sampleData.forEach(person => {
    User.create(person);
  });
});
