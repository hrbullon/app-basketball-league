const db = require("../database/db.js")

const { DataTypes } = require("sequelize");

let GameTeamsModel = db.define('GameTeams', {
  game_id: DataTypes.INTEGER,
  team_id: DataTypes.INTEGER,
  quarter: DataTypes.TINYINT,
  score: DataTypes.TINYINT,
  fouls: DataTypes.TINYINT
},{
    tableName: 'game_teams',
});

module.exports = GameTeamsModel