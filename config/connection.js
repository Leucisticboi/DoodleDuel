const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  // If JAWSDB_URL is set, use that for the connection
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Use separate environment variables
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: process.env.DB_PORT
    }
  );
}

module.exports = sequelize;
