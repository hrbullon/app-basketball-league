const GameModel = require("../models/GameModel");
const GameScoreBoardModel = require("../models/GameScoreBoardModel");

const getGame = async (req, res) => {
    try {
        const game = await GameModel.findByPk(req.params.id);
        res.json({ game })
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
    
    const { game_id, score, team_a_id } = req.body;

    try {
        const game = await GameModel.findByPk(game_id);

        if(game){

            let updateModel = {}

            const scoreBoard = await GameScoreBoardModel.create({
                game_id: req.body.game_id,
                team_id: req.body.team_id,
                player_id: req.body.player_id,
                score: req.body.score,
                foul: req.body.foul,
            });

            if(team_a_id > 0){
                updateModel = { team_a_score: (parseInt(game.team_a_score)+parseInt(score)) };
            }else{
                updateModel = { team_b_score: (parseInt(game.team_b_score)+parseInt(score)) };
            }
            
            GameModel.update( updateModel, { where: { id: game_id} })
            .then(game => {
                res.json({ message: "Ok", game });
            })
            .catch(err => {
                res.json({ message: "Error" });
            });

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
