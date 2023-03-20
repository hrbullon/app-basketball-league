import React from 'react'

export const GameInfo = ({ game }) => {
  return (
    <div className="card">
        <div className="card-body">
            <table className="table">
                <tbody>
                    <tr>
                        <th>Equipo A: { game.team_a.description }</th>
                        <th>Equipo B: { game.team_b.description }</th>
                    </tr>
                    <tr>
                        <td>
                            <b>Competición:</b> Torneo - 3x3 La Batea
                        </td>
                        <td>
                            <b>Fecha:</b> { game.date }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Partido:</b> { game.description }
                        </td>
                        <td>
                            <b>Hora:</b> { game.hour }
                        </td>
                    </tr>
                    {/*<tr>
                        <td colSpan="2">
                            <b>Cancha:</b> Nilo Center
                        </td>
                    </tr>*/}
                </tbody>
            </table>
        </div>
    </div>
  )
}
