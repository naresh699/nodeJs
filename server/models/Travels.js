const Sequalize = require('sequelize');
const db = require('../config/database');

const Travels = db.define('travels', {
    title: {
        type: Sequalize.STRING
    },
    price: {
        type: Sequalize.STRING
    },
    departure_date: {
        type: Sequalize.DATE
    },
    return_date: {
        type: Sequalize.DATE
    },
    image: {
        type: Sequalize.STRING
    },
    description: {
        type: Sequalize.STRING
    },
    available: {
        type: Sequalize.STRING
    }
})

module.exports = Travels;