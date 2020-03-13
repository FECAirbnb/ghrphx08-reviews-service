/* eslint-disable camelcase */
const fake = require('faker');

const userSampleData = [
  {
    first_name: 'Andrea',
    profile_picture: 'https://picsum.photos/200/',
    join_date: new Date(2020, 2, 23),
    is_host: true,
    is_superhost: true,
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
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Rosio',
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Martin',
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: 'Miguel',
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  },
  {
    first_name: fake.name.firstName(),
    profile_picture: 'https://picsum.photos/200/',
    join_date: fake.date.between('2019-01-01', '2020-05-01'),
    is_host: false,
    is_superhost: null,
    response_rate: null,
    response_time: null,
    accommodation_bio: null
  }
];

const locationSampleData = [
  {
    location_name: 'Belize Private Island- Little Peter Oasis',
    star_average: 5,
    userId: 1
  },
  {
    location_name: 'Modern Bed and breakfast w/ a Dryer + Gym',
    star_average: 3,
    userId: 2
  },
  {
    location_name: 'The Bad Place w/ washer',
    star_average: 5,
    userId: 6
  },
  {
    location_name: 'Family Size Cabin, At The Western Coast of Spain',
    star_average: 4,
    userId: 7
  },
  {
    location_name: 'Beautiful Modern Home near Disneyland',
    star_average: 5,
    userId: 8
  },
  {
    location_name: 'Hawaiian Coast Close to Beach Cabin!',
    star_average: 4,
    userId: 16
  }
];

const reviewSampleData = [
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body:
      'I am more then happy for having the possibility having Andrea as a host. The place was clean as if it hasn’t been touched. With ease, we made all arrangements and experienced no problems in communicating. Andrea was sensible, behaving with natural respect. I would be delighted to have the him as a host again any time.',
    locationId: 1,
    userId: 5
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body:
      'It was my pleasure staying here. I felt like it was my house, communication ran smoothly, and most importantly, they are friendly! I would gladly stay here him again.',
    locationId: 1,
    userId: 6
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 2,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 2,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 2,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 2,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 2,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 2,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 2,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 2,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 2,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 2,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 3,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 3,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 3,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 3,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 3,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 3,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 3,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 3,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 4,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 4,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 4,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 4,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 4,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 4,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 4,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 4,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 4,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 4,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 5,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 5,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 5,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 5,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 5,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 5,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 5,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 6,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 6,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 6,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 6,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 6,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 6,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 6,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 6,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  },
  {
    review_date: fake.date.between('2019-01-01', '2020-05-01'),
    review_body: fake.lorem.paragraph(),
    locationId: 1,
    userId: fake.random.number({ min: 17, max: 50 })
  }
];

module.exports = {
  userSampleData,
  locationSampleData,
  reviewSampleData
};
