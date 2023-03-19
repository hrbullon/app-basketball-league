const GameModel = require("../models/GameModel");
const GameScoreBoardModel = require("../models/GameScoreBoardModel");
const  GameTeamsModel  = require("../models/GameTeamsModel");
const TeamModel = require("../models/TeamModel");

const getInfoGame = async (game_id) => {

    const game = await GameModel.findByPk(game_id);
    const teams = await GameTeamsModel.findAll({
        where: {
            game_id: game_id
        }
    });

    const team_a = await TeamModel.findByPk(teams[0].team_id);
    const team_b = await TeamModel.findByPk(teams[1].team_id);

    const info = {
        game_id: game.id,
        description: game.description,
        date: game.date,
        hour: game.hour,
        quarter: teams[1].quarter,
        team_a: {
            id: teams[0].team_id,
            description: team_a.name,
            score: teams[0].score,
            fouls: teams[0].fouls,
        },
        team_b: {
            id: teams[1].team_id,
            description: team_b.name,
            score: teams[1].score,
            fouls: teams[1].fouls,
        }
    }

    return info;
}

const getGame = async (req, res) => {
    try {
        const game = await getInfoGame(req.params.id);
        res.json({ message: "Ok", game });
    } catch (error) {
        res.json({ message: error.message });
    }
} 

const createGame = async (req, res) => {
    try {
        const created = await GameModel.create(req.body);
        res.json({ message: "Ok", created });
    } catch (error) {
        res.json({ message: error.message });
    }
}

const updateScore = async (req, res) => {
    
    const io = req.app.get('socketio');
    const { game_id, team_id, player_id, quarter, score, foul  } = req.body;

    try {
        const gameModel = await GameModel.findByPk(game_id);

        if(gameModel){

            const scoreBoard = await GameScoreBoardModel.create({
                game_id: game_id,
                team_id: team_id,
                player_id: player_id,
                quarter: quarter,
                score: score,
                foul: foul,
            })

           const gameUpdated = await getInfoGame(game_id);

           io.emit("evt_game_scoreboard_inserted", gameUpdated);
           res.json({ message: "Ok", gameModel });
   
        }

    }catch (error) {
        res.json({ message: error.message });
    }

}

module.exports = {
    getGame,
    createGame,
    updateScore
}
