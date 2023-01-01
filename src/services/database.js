const Sequelize = require('sequelize');

const sequelize =
  process.env.NODE_ENV === 'dev'
    ? new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      dialect: 'postgres',
      host: process.env.DB_HOST,
      logging: false,
    })
    : new Sequelize(process.env.TEST_DB_NAME, process.env.TEST_DB_USER, process.env.TEST_DB_PASS, {
      dialect: 'postgres',
      host: process.env.TEST_DB_HOST,
      logging: false
    });

module.exports = sequelize;