import React, { Fragment, useState, useEffect } from 'react'

import { GameInfo } from '../../components/GameInfo';
import { ScoreGame } from '../../components/ScoreGame';

import { ScorePlayer } from '../../components/ScorePlayer';
import { getGame } from '../../requests/gameRequest';

export const ScoreBoardAdminScreen = () => {
    
    const picture = "https://placehold.co/128x128";

    const [game, setGame] = useState(
        {
            id: 0,
            description: '',
            date: '',
            hour: '',
            quarter: 0,
            team_a: {
                id: 0,
                description: '',
                score: 0,
                fouls: 0,
                players:[]
            },
            team_b: {
                id: 0,
                description: '',
                score: 0,
                fouls: 0,
                players:[]
            },
        }
    );

    useEffect( () => {
        getDataGame(1);
    }, [])

    const getDataGame = async (id) => {
        getGame(id).then( data => {
            setGame(data.game);
        });
    }


    return (
    <Fragment>
        <div className="row mb-2">
            <div className="col-12 mt-4">
                <GameInfo game={ game }/>
            </div>
        </div>
        <div className='row'>
            <ScoreGame team={ game.team_a.description } score={ game.team_a.score } />
            <ScoreGame team={ game.team_b.description } score={ game.team_b.score } />
        </div>
        <div className="row">
            <div className='col-6'>
                <ScorePlayer game={ game } team="a" setGame={setGame} players={ game.team_a.players }/>
            </div>        
            <div className='col-6'>
                <ScorePlayer game={ game } team="b" setGame={setGame} players={ game.team_b.players }/>
            </div>        
        </div>
    </Fragment>
  )
}
