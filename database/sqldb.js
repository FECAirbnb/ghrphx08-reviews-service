/* eslint-disable camelcase */
const Sequelize = require('sequelize');
const moment = require('moment');

const sequelize = new Sequelize('Airbnb', 'root', 'password', {
  dialect: 'mysql'
});

// user sample data

const userSampleData = [
  {
    first_name: 'Andrea',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2020, 2, 23),
    is_host: true,
    is_superhost: true,
    number_of_reviews: 10,
    response_rate: 90,
    response_time: 'hour',
    accommodation_bio: 'I will be happy to help guests plan their ideal vacation by phone or email.'
  },
  {
    first_name: 'Jose',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2020, 3, 1),
    is_host: true,
    is_superhost: false,
    number_of_reviews: 5,
    response_rate: 90,
    response_time: 'hour',
    accommodation_bio:
      'This listing even directly calls out who it’s best for, as well, a tactic we definitely recommend: “Particularly suitable for music lovers, with a guitar and a record player for guests to enjoy.'
  },
  {
    first_name: 'Isaac',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2019, 4, 3),
    is_host: false,
    is_superhost: null,
    number_of_reviews: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Mimi',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2020, 1, 3),
    is_host: false,
    is_superhost: null,
    number_of_reviews: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Willow',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2020, 3, 1),
    is_host: false,
    is_superhost: null,
    number_of_reviews: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Bella',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2020, 2, 14),
    is_host: true,
    is_superhost: false,
    number_of_reviews: 3,
    response_rate: 90,
    response_time: 'day',
    accommodation_bio:
      'I will be not as happy to help guests plan their ideal vacation by phone or email.'
  },
  {
    first_name: 'Alex',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2020, 3, 1),
    is_host: true,
    is_superhost: true,
    number_of_reviews: 10,
    response_rate: 90,
    response_time: 'day',
    accommodation_bio:
      'You know what you’re getting the moment this charming escape in the woods pops up in your search results, because the title tells you right away: “Cozy A-Frame Cabin in the Redwoods”. To-the-point, but at the same time ultra-descriptive.'
  },
  {
    first_name: 'Joe',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2019, 5, 2),
    is_host: true,
    is_superhost: true,
    number_of_reviews: 14,
    response_rate: 90,
    response_time: 'day',
    accommodation_bio: null
  },
  {
    first_name: 'Eric',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2019, 6, 4),
    is_host: false,
    is_superhost: null,
    number_of_reviews: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Esmeralda',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2016, 3, 25),
    is_host: false,
    is_superhost: null,
    number_of_reviews: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Maria',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2019, 6, 28),
    is_host: false,
    is_superhost: null,
    number_of_reviews: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Yolanda',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2020, 2, 12),
    is_host: false,
    is_superhost: null,
    number_of_reviews: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Guatalupe',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2019, 9, 12),
    is_host: false,
    is_superhost: null,
    number_of_reviews: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Nina',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2019, 11, 23),
    is_host: false,
    is_superhost: null,
    number_of_reviews: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Blanca',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2019, 10, 31),
    is_host: false,
    is_superhost: null,
    number_of_reviews: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Rebecca',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2019, 4, 2),
    is_host: true,
    is_superhost: true,
    number_of_reviews: 24,
    response_rate: 90,
    response_time: 'hour',
    accommodation_bio:
      'We live in the same building so we like to meet guests and give them recommendations'
  },
  {
    first_name: 'Trinidad',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2019, 5, 2),
    is_host: false,
    is_superhost: null,
    number_of_reviews: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Rosio',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2019, 2, 9),
    is_host: false,
    is_superhost: null,
    number_of_reviews: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Martin',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2019, 8, 19),
    is_host: false,
    is_superhost: null,
    number_of_reviews: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Miguel',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2019, 3, 27),
    is_host: false,
    is_superhost: null,
    number_of_reviews: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  }
];

const User = sequelize.define('users', {
  first_name: { type: Sequelize.STRING },
  profile_picture: { type: Sequelize.STRING },
  join_date: { type: Sequelize.DATEONLY },
  is_host: { type: Sequelize.BOOLEAN },
  super_is_host: { type: Sequelize.BOOLEAN, allowNull: true },
  number_reviews: { type: Sequelize.INTEGER, allowNull: true },
  response_rate: { type: Sequelize.INTEGER, allowNull: true },
  response_time: { type: Sequelize.STRING, allowNull: true },
  accommodation_bio: { type: Sequelize.STRING, allowNull: true }
});

// location sample data

const locationSampleData = [
  {
    locationName: 'Belize Private Island- Little Peter Oasis'
    // userName: 'Andrea',
    // starAverage: 5
  }
  // {
  //   locationName: 'Amazing view - Moderne apartment',
  //   userId: 3,
  //   userName: 'Jose',
  //   starAverage: 5
  // }
];

const Location = sequelize.define('locations', {
  locationName: { type: Sequelize.STRING }
});
User.belongsTo(Location, { foreignKey: 'firstName' });

User.sync({ force: true }).then(() => {
  userSampleData.forEach(person => {
    User.create(person);
  });
});

Location.sync({ force: true }).then(() => {
  locationSampleData.forEach(location => {
    Location.create(location);
  });
});
