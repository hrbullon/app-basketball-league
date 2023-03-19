import React, { Fragment, useState, useEffect } from 'react'


export const ScoreBoardClientScreen = () => {

    const [duration, setDuration] = useState(600); // 10-minute duration in seconds
    const [timerID, setTimerID] = useState(null);

    const [game, setGame] = useState(
        {
            description: 'Fase de grupo - Caimanes vs Cocodrilos',
            team_a: {
                id: 1,
                description: 'Caimanes',
                score: 22,
                fouls: 2,
            },
            team_b: {
                id: 2,
                description: 'Cocodrilos',
                score: 32,
                fouls: 3,
            },
        }
    );
    
    useEffect(() => {
        setTimerID(setInterval(() => {
        setDuration(prevDuration => prevDuration - 1);
        }, 1000));
        
        return () => clearInterval(timerID);
    }, []);

    const handlePause = () => {
        clearInterval(timerID);
        setTimerID(null);
    }

    const handleResume = () => {
        setTimerID(setInterval(() => {
        setDuration(prevDuration => prevDuration - 1);
        }, 1000));
    }

    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;

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
                    <p>{minutes < 10 ? '0' :'' }{minutes}:{seconds  < 10 ? '0' : ''}{seconds}</p>
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
        {timerID ? (
            <button onClick={handlePause}>Pause</button>
          ) : (
            <button onClick={handleResume}>Resume</button>
          )}
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
