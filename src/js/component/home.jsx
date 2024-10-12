import React, { useState, useEffect } from 'react';
import SecondsCounter from './SecondsCounter.jsx';

const Home = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-center">
            <SecondsCounter seconds={seconds} />
        </div>
    );
};

export default Home;

