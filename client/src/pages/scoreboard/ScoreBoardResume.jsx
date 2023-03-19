import React, { Fragment } from 'react'
import { GameInfo } from '../../components/GameInfo'
import { ResultsTable } from '../../components/ResultsTable'

export const ScoreBoardResume = () => {
  return (
    <Fragment>
        <div class="row">
            <div class="col-12 mb-2">
                <GameInfo />
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center" colspan="4">Equipo A</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiempo Muerto</td>
                                    <td class="text-center" colspan="3">
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="2" class="text-center">Jugadores</td>
                                    <td rowspan="2" class="text-center">No.</td>
                                    <td colspan="2" class="text-center">Antiportiva</td>
                                </tr>
                                <tr>
                                    <td  class="text-center">1</td>
                                    <td  class="text-center">2</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>    
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center" colspan="4">Equipo B</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiempo Muerto</td>
                                    <td class="text-center" colspan="3">
                                        Faltas Equipo 
                                        <div id="group-buttons-fouls">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="2" class="text-center">Jugadores</td>
                                    <td rowspan="2" class="text-center">No.</td>
                                    <td colspan="2" class="text-center">Antiportiva</td>
                                </tr>
                                <tr>
                                    <td  class="text-center">1</td>
                                    <td  class="text-center">2</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        Arbitro de mesa:
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        Cronometrador:
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        12'' Cronometrador:
                                    </td>
                                </tr>
                            </tbody>
                        </table>   
                    </div>
                </div> 
            </div>
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <ResultsTable />
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
