import React from 'react'

export const GameInfo = () => {
  return (
    <div class="card">
        <div class="card-body">
            <table class="table">
                <tbody>
                    <tr>
                        <th>Equipo A: Caimanes</th>
                        <th>Equipo B: Cocodrilos</th>
                    </tr>
                    <tr>
                        <td>
                            <b>Competición:</b> Torneo - 3x3 La Batea
                        </td>
                        <td>
                            <b>Fecha:</b> 18/03/2023
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Partido:</b> Fase de grupo - Caimanes vs Cocodrilos
                        </td>
                        <td>
                            <b>Hora:</b> 5:00 pm
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <b>Cancha:</b> Nilo Center
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
