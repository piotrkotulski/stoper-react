import React, { useState, useEffect } from 'react';
import Timer from "./components/Timer/Timer";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import Box from "./components/Box/Box";


const App = () => {
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(null);

    const startTimer = () => {
        if (!timer) {
            setTimer(setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1));
        }
    };

    const stopTimer = () => {
        if (timer) {
            clearInterval(timer);
            setTimer(null);
        }
    };

    const resetTimer = () => {
        clearInterval(timer);
        setTimer(null);
        setTime(0);
    };

    useEffect(() => {
        return () => {
            clearInterval(timer);
        };
    }, [timer]);

    return (
        <Container>
            <Box>
                <Timer milliseconds={time}/>
                <div>
                <Button onClick={startTimer}>Start</Button>
                <Button onClick={stopTimer}>Stop</Button>
                <Button onClick={resetTimer}>Reset</Button>
                </div>
            </Box>
        </Container>
    );
}

export default App;
