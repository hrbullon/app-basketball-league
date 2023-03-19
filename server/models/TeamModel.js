const db = require("../database/db.js")

const { DataTypes } = require("sequelize");
const GameTeamsModel = require("./GameTeamsModel.js");

const TeamModel = db.define('Team', {
  name: DataTypes.STRING,
  logo: DataTypes.STRING,
  state: DataTypes.TINYINT
},{
    tableName: 'teams'
});


module.exports = TeamModel