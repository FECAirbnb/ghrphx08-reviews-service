# StayKay

> Project description

## Related Projects

- https://github.com/StayKay/proxy-server
- https://github.com/StayKay/photo-gallery
- https://github.com/StayKay/availability-service
- https://github.com/StayKay/reviews-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Getting Started

From within the root directory, in your terminal run the following commands in order.

- [ ] `npm install`
- [ ] `npm run db:setup` twice (if there is an error refer to database initialization below)
- [ ] `npm run react-dev`
- [ ] `npm start`

Go to http://localhost:3000

## Database initialization

- [ ] open mysql in the terminal
- [ ] use StayKay
- [ ] show tables
- If there are less than 3 tables, drop all tables with the command 'drop tables <tablename>, <tablename>....
- [ ] Drop the database using 'drop database <database name>
- [ ] Try the npm run db:setup again in your terminal.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- MySQL
- Sequelize
- Express
- Axios
- React

## Development

The reviews microservice displays the reviews of users on the the profile page of a housing option is displayed, similar to Airbnb.

The client will need to obtain reviews of a location by location id. Each review element on the display page includes the first name of the user who posted the review, their join date, user profile picture, and the review body itself.

The database chosen for this project is MySQLused with an ORM, Sequelize. Sequelize was chosen to minimize development time needed to create a reusable model interface. This service uses a SQL database because the service of reviews is relational to user information and location information and MySQL guarantees of referential integrity between different tables with minimal development overhead.

[Review database schema](./dbschema.png)

GET /api/reviews/:locationname => Retrieve reviews related to the location name, if successful, will send a 200 header, Content type of the response is text/plain.
