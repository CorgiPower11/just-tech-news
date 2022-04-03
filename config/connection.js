// import the Sequelize constructor from the library
const mysql = require('mysql2');
const Sequelize = require('sequelize');

require(`dotenv`).config();

// create connection to our database, pass in your MySQL information for usename and password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'r#SG1&mL_50m', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

  module.exports = sequelize;