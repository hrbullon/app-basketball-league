import React, { Fragment, useState, useEffect } from 'react'
import { getGame } from '../../requests/gameRequest';

//****SockET Connection****/
import { socket } from "../../sockets/SocketClient";

export const ScoreBoardClientScreen = () => {
    
    const [seconds, setSeconds] = useState(10 * 60);
    const [isActive, setIsActive] = useState(false);
    const [game, setGame] = useState(
        {
            description: '',
            date:'',
            hour:'',
            team_a: {
                id: 0,
                description: '',
                score: 0,
                fouls: 0,
                players:[]
            },
            team_b: {
                id: 0,
                description: '',
                score: 0,
                fouls: 0,
                players:[]
            },
        }
    );
      
    useEffect( () => {
        getDataGame(1);
    }, [])

    const getDataGame = async (id) => {
        getGame(id).then( data => {
            setGame(data.game);
        });
    }

    useEffect(() => {
        socket.on("evt_game_scoreboard_inserted", (model) => {
            console.log(model)
            setIsActive(false);
            setGame(model)
        })

        socket.on("evt_start_time", (model) => {
            setIsActive(true);
        })
        
        socket.on("evt_stop_time", (model) => {
            setIsActive(false);
        })
    }, [])
    
    useEffect(() => {
        
        let interval = null;
        
        if (isActive) {
            
            interval = setInterval(() => {
            setSeconds((seconds) => seconds - 1);

            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);

    }, [isActive, seconds]);
    
    const handleStart = () => {
        setIsActive(true);
    };

    const handlePause = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setSeconds(10 * 60);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
    <Fragment>
        <section className="timer-gray">
            <div className="row">
                <div className="col">
                    <p>00:00</p>
                </div>
            </div>
        </section>
        <section className="timer">
            <div className="row">
                <div className="col">
                    <p>{formatTime(seconds)}</p>
                    {/*<p>{minutes < 10 ? '0' :'' }{minutes}:{seconds  < 10 ? '0' : ''}{seconds}</p>*/}
                </div>
            </div>
        </section>

        <section className="teams text-center">
            <div className="row">
                <div className="col-1 info foul">{`F${game.team_a.fouls}`}</div>
                <div className="col-1 info time">T0</div>
                <div className="col-3 name mt-3">{ game.team_a.description }</div>
                <div className="col-2 period">1er {">"} </div>
                <div className="col-3 name mt-3">{ game.team_b.description }</div>
                <div className="col-1 info time">T0</div>
                <div className="col-1 info foul">{`F${game.team_b.fouls}`}</div>
            </div>
        </section>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
        <section className="score">
            <div className="row">
                <div className="col-4">{ game.team_a.score }</div>
                <div className="col-4">
                    <p id="timeShot"></p>
                </div>
                <div className="col-4">{ game.team_b.score }</div>
            </div>
        </section>

    </Fragment>
  )
}
