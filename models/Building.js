const db = require('../database/connection');

const Building = {};

Building.all = () => {
  return db.any('Select * from buildings')
};

module.exports = Building;