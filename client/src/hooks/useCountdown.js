import { useState, useEffect } from 'react';

export const useCountdown = (initialCountdown, flagTime) => {
    
    const [countdown, setCountdown] = useState(initialCountdown);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
        let intervalId;

        if (isActive) {
        intervalId = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown === 0) {
                    setIsActive(false);
                    clearInterval(intervalId);
                    return prevCountdown;
                }

                if(flagTime == "quarter"){
                    localStorage.setItem('quarter', prevCountdown);
                }

                if(flagTime == "seconds"){
                    localStorage.setItem('seconds', prevCountdown);
                }

                return prevCountdown - 1;
            });
        }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isActive]);
  
    const startCountdown = () => setIsActive(true);
    const stopCountdown = () => setIsActive(false);
    const resetCountdown = () => setCountdown(initialCountdown);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    return { countdown, setCountdown, startCountdown, stopCountdown, resetCountdown, formatTime };
}