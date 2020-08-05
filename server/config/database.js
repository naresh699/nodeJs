const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('travelagency', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});