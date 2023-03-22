const GameModel = require("../../models/GameModel");
const GameTeamsModel  = require("../../models/GameTeamsModel");
const PlayerModel = require("../../models/PlayerModel");
const TeamModel = require("../../models/TeamModel");
const TeamPlayerModel = require("../../models/TeamPlayersModel");


const getRelationWithGame = () => {

    TeamModel.hasMany(TeamPlayerModel, { foreignKey: 'team_id' });
    TeamPlayerModel.belongsTo(TeamModel,{ foreignKey: 'team_id' });
    PlayerModel.hasMany(TeamPlayerModel, { foreignKey: 'player_id' });
    TeamPlayerModel.belongsTo(PlayerModel,{ foreignKey: 'player_id' });
    GameModel.hasMany(TeamPlayerModel,{ foreignKey: 'game_id' });
    TeamPlayerModel.belongsTo(GameModel,{ foreignKey: 'game_id' });
    GameModel.hasMany(GameTeamsModel,{ foreignKey: 'game_id' });
    GameTeamsModel.belongsTo(TeamModel,{ foreignKey: 'team_id' });
    TeamModel.hasMany(GameTeamsModel, { foreignKey: 'team_id' });
}

const getDataGame = async (game_id) => {

    getRelationWithGame();

    return await GameModel.findOne({
        where:{ id: game_id },
        attributes:['description','date','hour'],
        include:[
            {
                model: TeamPlayerModel,
                attributes: ['team_id','score'],
                include:[ 
                    { model: PlayerModel, attributes: ['id','firstname','lastname','number'] } 
                ]
            },
            {
                model: GameTeamsModel,
                attributes: ['team_id','score','quarter','fouls','times'],
                include: { model: TeamModel, attributes: ['id','name'] }, 
            }
        ]
    })
}

module.exports = { getDataGame }