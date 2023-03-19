import React from 'react'

export const CardPlayer = ({ player }) => {
  return (
    <div className='col-2'>
        <div class="card">
            <img class="card-img-top" src={ player.picture } alt="Title" />
            <div class="card-body">
                <h6 class="card-title">
                    { `${player.firstname} ${player.lastname}` }
                </h6>
                <p class="card-text">
                    Cedula: { player.document } <br/>
                    Nro#: { player.number } <br/>
                </p>
            </div>
        </div>
    </div>
  )
}
