const db = require("../database/db.js")

const { DataTypes } = require("sequelize")

const GameScoreBoardModel = db.define('GameScoreBoard', {
  game_id: DataTypes.INTEGER,
  team_id: DataTypes.INTEGER,
  player_id: DataTypes.INTEGER,
  score: DataTypes.TINYINT,
  foul: DataTypes.TINYINT
},{
    tableName: 'game_scoreboard'
});

module.exports = GameScoreBoardModel