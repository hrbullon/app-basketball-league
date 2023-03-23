
import config from "../config/config.json";
const URL_API = config.API_URL;

export const getGame = async (id) => {
    return await fetch(`${ URL_API }/game/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => { return data })
    .catch(error => {
        console.error('Ha ocurrido un error', error);
    });
}

export const updateScore = async (id, data) => {
    return await fetch(`${ URL_API }/game/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => { return data })
    .catch(error => {
        console.error('Ha ocurrido un error', error);
    });
}