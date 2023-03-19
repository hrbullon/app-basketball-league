import React, { Fragment } from 'react'
import { CardPlayer } from '../../components/CardPlayer';

export const TeamScreen = () => {

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
        <div className='row justify-content-center'>
            <div className='col-6'>
                <form>
                    <div class="form-group">
                        <label for="nombre">Nombre:</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" required />
                    </div>
                    <div class="form-group">
                        <label for="apellido">Apellido:</label>
                        <input type="text" class="form-control" id="apellido" name="apellido" required/>
                    </div>
                    <div class="form-group">
                        <label for="cedula">Cédula:</label>
                        <input type="number" class="form-control" id="cedula" name="cedula" required/>
                    </div>
                    <div class="form-group">
                        <label for="numero">Número:</label>
                        <input type="number" class="form-control" id="numero" name="numero" required/>
                    </div>
                    <div class="form-group">
                        <label for="foto">Foto:</label>
                        <input type="file" class="form-control-file" id="foto" name="foto" required/>
                    </div>
                    <button type="button" class="btn btn-primary mt-4">Registrar</button>
                </form>
            </div>
            <div className='col-2 mt-4'>
                <div class="card">
                    <img src={ picture } class="card-img-top" alt="..."/>
                </div>
            </div>
        </div>
        <div className='row mt-4 justify-content-center'>
            {
                players.map( player => {
                    return <CardPlayer player={ player }/>
                })
            }
        </div>  
    
    </Fragment>
  )
}
