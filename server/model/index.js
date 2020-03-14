const db = require('../dbConnection.js');

module.exports = {
  reviews: {
    getAll: () => {
      return new Promise((resolve, reject) => {
        const queryString = 'SELECT * FROM reviews';
        db.query(queryString, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    },
    getOne: locationId => {
      return new Promise((resolve, reject) => {
        const queryString = `SELECT * FROM reviews, users WHERE reviews.locationId = ${locationId} AND reviews.userId = users.id`;
        db.query(queryString, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }
};
