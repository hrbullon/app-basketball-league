const db = require("../database/db.js")

const { DataTypes } = require("sequelize");

const GameModel = db.define('Game', {
  description: DataTypes.STRING,
  competition_id: DataTypes.INTEGER,
  winner: DataTypes.TINYINT,
  loser: DataTypes.TINYINT,
  date: DataTypes.DATE,
  hour: DataTypes.TIME
},{
    tableName: 'games'
});

module.exports = GameModel