import React, { Fragment, useState, useEffect } from 'react'
import config from "../../config/config.json";

//****Custom hooks****/
import { useCountdown } from "../../hooks/useCountdown";
import { useFetch } from "../../hooks/useFetch";

//****SockET Connection****/
import { socket } from "../../sockets/SocketClient";

const URL_API = config.API_URL;

export const ScoreBoardClientScreen = () => {

    const { 
        countdown, 
        setCountdown, 
        startCountdown, 
        stopCountdown, 
        formatTime 
    } = useCountdown(600,"quarter");
    
    const { 
        countdown: seconds, 
        setCountdown: setSeconds, 
        startCountdown: startSeconds, 
        stopCountdown: stopSeconds, 
    } = useCountdown(12, "seconds");
    
    const { data, loading, error } = useFetch(`${ URL_API }/game/1`);

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

    useEffect(  ()  => {
        if(data){
            setGame(data.game)
        }
    }, [data])
    
      
    useEffect( () => {

        const quarter  = localStorage.getItem("quarter");
        const seconds  = localStorage.getItem("seconds");

        if(quarter && seconds){
            setCountdown(quarter-1);
            setSeconds(seconds-1);
        }

    }, [])

    const handleStartCountDown = () => {
        startCountdown();
        startSeconds();
    }
    
    const handleStopCountDown = () => {
        stopCountdown();
        stopSeconds();
    }

    useEffect(() => {
        socket.on("evt_game_scoreboard_inserted", (model) => {
            handleStopCountDown();
            setGame(model)
        })

        socket.on("evt_start_time", (model) => {
            handleStartCountDown();
        })
        
        socket.on("evt_stop_time", (model) => {
            handleStartCountDown();
        })
    }, [])
    
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
                    <p>{formatTime(countdown)}</p>
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

        <section className="score">
            <div className="row">
                <div className="col-4">{ game.team_a.score }</div>
                <div className="col-4">
                    <p id="timeShot">{seconds}</p>
                </div>
                <div className="col-4">{ game.team_b.score }</div>
            </div>
        </section>
    </Fragment>
  )
}
