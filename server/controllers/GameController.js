const { getDataGame } = require("../database/queries/gameQueries");
const { getInfoGameFormat } = require("../formats/gameFormats");

const GameModel = require("../models/GameModel");
const GameScoreBoardModel = require("../models/GameScoreBoardModel");

const getInfoGame = async (game_id) => {
    const game = await getDataGame(game_id);
    const info = getInfoGameFormat(game);
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
