import React from 'react'

export const ScoreGame = ({ team, score }) => {
  return (
    <div className='col-6'>
        <div className="card mb-2">
            <div className="card-body">
                <h2 className='text-center'>{ team }</h2>
                <h1 className='text-center'>{ score }</h1>
            </div>
        </div>
    </div>
  )
}
