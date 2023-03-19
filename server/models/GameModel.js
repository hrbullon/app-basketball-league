const db = require("../database/db.js")

const { DataTypes } = require("sequelize")

const GameModel = db.define('Game', {
  description: DataTypes.STRING,
  team_a_id: DataTypes.INTEGER,
  team_a_score: DataTypes.INTEGER,
  team_b_id: DataTypes.INTEGER,
  team_b_score: DataTypes.INTEGER,
  winner: DataTypes.TINYINT,
  date: DataTypes.DATE,
  hour: DataTypes.TIME
},{
    tableName: 'games'
});

module.exports = GameModel