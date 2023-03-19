const { Sequelize } = require('sequelize')
require('dotenv').config();

const { DB_DATABASE, DB_USER, DB_PASS, DB_HOSTNAME } = process.env

const db = new Sequelize(DB_DATABASE,DB_USER, DB_PASS,{
    host: DB_HOSTNAME,
    dialect:'mysql'
})

module.exports = db