const db = require("../database/db.js")

const { DataTypes } = require("sequelize");

const TeamPlayerModel = db.define('TeamPlayer', {
    team_id: DataTypes.INTEGER,
    player_id: DataTypes.INTEGER,
    captain: DataTypes.ENUM("yes","no"),
},{
    tableName: 'teams_players'
});

module.exports = TeamPlayerModel