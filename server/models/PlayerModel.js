const db = require("../database/db.js")

const { DataTypes } = require("sequelize");

const PlayerModel = db.define('Player', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    document: DataTypes.STRING,
    picture: DataTypes.STRING,
    number: DataTypes.TINYINT
},{
    tableName: 'players'
});


module.exports = PlayerModel