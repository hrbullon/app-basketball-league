import React from 'react'
import { updateScore } from '../requests/gameRequest';

export const ScorePlayer = ({ game, team, setGame, players }) => {

    const updateScoreRequest = async (game, player, scoreSum) => {
        
        const { Player } = player;
        
        const data = {
            game_id: game.id,
            team_id: player.team_id,
            player_id: Player.id,
            quarter:1,
            score: scoreSum,
            foul: 0
        }

        const res = await updateScore(1, data);

        if(team == "a"){
            setGame(prevGame => {
                return {
                  ...prevGame,
                  team_a: {
                    ...prevGame.team_a,
                    score: (team == "a")? (scoreSum+game.team_a.score) : game.team_a.score
                  }
                };
            });
        }else if(team == "b"){
            setGame(prevGame => {
                return {
                  ...prevGame,
                  team_b: {
                    ...prevGame.team_b,
                    score: (team == "b")? (scoreSum+game.team_b.score) : game.team_b.score
                  }
                };
            });
        }
    }

    return (
    <div className="card">
        <div className="card-body">
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>                            
                        <th>Jugador</th>                            
                        <th>Nro.</th>
                        <th className='no-print'>Ptos</th> 
                        <th>Total</th>                           
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map( (item, i) => {
                            return  <tr key={ item.Player.number} >
                                        <td>{ (i+1) }</td>
                                        <td>{ `${item.Player.firstname} ${item.Player.lastname}` }</td>
                                        <td>{ item.Player.number }</td>
                                        <td className='no-print'>
                                            <button type="button" className="btn btn-sm m-1 btn-primary" onClick={ (e) => updateScoreRequest(game,item,1)} >+1</button>
                                            <button type="button" className="btn btn-sm m-1 btn-primary" onClick={ (e) => updateScoreRequest(game,item,2)}>+2</button>
                                            <button type="button" className="btn btn-sm m-1 btn-primary" onClick={ (e) => updateScoreRequest(game,item,3)}>+3</button>
                                        </td>
                                        <td>{ item.score == null ? 0 : item.score }</td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
