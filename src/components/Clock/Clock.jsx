import React, { useEffect, useState } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        // on component mount.
        let timerID = setInterval(() => tick(), 1000);
        return () => {
            // on component unmount.
            clearInterval(timerID);
        };
    });

    const tick = () => {
        setDate(new Date());
    };

    return (
        <span>
            {date.toLocaleTimeString()}
        </span>
    );
};

export default Clock;
