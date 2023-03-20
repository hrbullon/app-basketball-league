import React, { Fragment, useState, useEffect } from 'react'

import { GameInfo } from '../../components/GameInfo';
import { ScoreGame } from '../../components/ScoreGame';

import { ScorePlayer } from '../../components/ScorePlayer';
import { getGame } from '../../requests/gameRequest';

export const ScoreBoardAdminScreen = () => {
    
    const picture = "https://placehold.co/128x128";

    const [game, setGame] = useState(
        {
            description: '',
            team_a: {
                id: 0,
                description: '',
                score: 0,
                fouls: 0,
            },
            team_b: {
                id: 0,
                description: '',
                score: 0,
                fouls: 0,
            },
        }
    );

    const players = [
        {
            firstname:'Leo',
            lastname:'Broh',
            document:'213123',
            picture,
            number:'2',
            captain:'0'
        },
        {
            firstname:'Patrick',
            lastname:'Jhonson',
            document:'213434',
            picture,
            number:'22',
            captain:'1'
        },
        {
            firstname:'Charles',
            lastname:'Douglas',
            document:'12988989',
            picture,
            number:'32',
            captain:'0'
        },
        {
            firstname:'Bejamin',
            lastname:'Franklin',
            document:'9878922',
            picture,
            number:'23',
            captain:'0'
        },
    ]

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
                <ScorePlayer players={ players }/>
            </div>        
            <div className='col-6'>
                <ScorePlayer players={ players }/>
            </div>        
        </div>
    </Fragment>
  )
}
