const db = require("../database/db.js")

const { DataTypes } = require("sequelize");
const TeamPlayerModel = require("./TeamPlayersModel.js");

const PlayerModel = db.define('Player', {
    firsname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    document: DataTypes.STRING,
    picture: DataTypes.STRING,
    number: DataTypes.TINYINT
},{
    tableName: 'players'
});

PlayerModel.hasMany(TeamPlayerModel,{ foreignKey:'player_id' })

module.exports = PlayerModel