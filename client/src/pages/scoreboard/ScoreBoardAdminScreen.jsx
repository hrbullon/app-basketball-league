import React, { Fragment } from 'react'

import { GameInfo } from '../../components/GameInfo';
import { ScoreGame } from '../../components/ScoreGame';

import { ScorePlayer } from '../../components/ScorePlayer';

export const ScoreBoardAdminScreen = () => {
    
    const picture = "https://placehold.co/128x128";

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

    return (
    <Fragment>
        <div class="row mb-2">
            <div class="col-12 mt-4">
                <GameInfo />
            </div>
        </div>
        <div className='row'>
            <ScoreGame team="Caimanes" score={25} />
            <ScoreGame team="Cocodrilos" score={23} />
        </div>
        <div class="row">
            <div className='col-6'>
                <ScorePlayer team="Caimanes" players={ players }/>
            </div>        
            <div className='col-6'>
                <ScorePlayer team="Cocodrilos" players={ players }/>
            </div>        
        </div>
    </Fragment>
  )
}
