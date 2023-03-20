import React from 'react'

export const ScorePlayer = ({ players }) => {
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
                        players.map( (player, i) => {
                            return  <tr key={ player.number} >
                                        <td>{ (i+1) }</td>
                                        <td>{ `${player.firstname} ${player.lastname}` }</td>
                                        <td>{ player.number }</td>
                                        <td className='no-print'>
                                            <button type="button" className="btn btn-sm m-1 btn-primary">+1</button>
                                            <button type="button" className="btn btn-sm m-1 btn-primary">+2</button>
                                            <button type="button" className="btn btn-sm m-1 btn-primary">+3</button>
                                        </td>
                                        <td>22</td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
