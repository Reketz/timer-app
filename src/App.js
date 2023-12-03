import { useState, useRef } from 'react';
import './App.css'

export default function Stopwatch() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    const style = {fontSize: "24px", margin: "12px"};

    return (
        <div className='App'>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button style={style} onClick={handleStart}>
                Start
            </button>
            <button style={style} onClick={handleStop}>
                Stop
            </button>
        </div>
    );
}