import React, { useEffect } from 'react';
import styles from "./Timer.module.scss"

const Timer = ({ milliseconds }) => {
    const formatTime = (time) => {
        const hours = Math.floor(time / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, '0');
        const millis = Math.floor((time % 1000)).toString().padStart(3, '0');
        return `${hours}:${minutes}:${seconds}.${millis}`;
    };

    useEffect(() => {
    }, [milliseconds]);

    return <div className={styles.stoper}>{formatTime(milliseconds)}</div>;
};

export default Timer;