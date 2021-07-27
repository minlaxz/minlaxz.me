import React, { useEffect, useState, useCallback } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date())

    const tick = useCallback(()=> {
        setDate(new Date());
    },[])

    useEffect(() => {
        // on component mount.
        let timerID = setInterval(() => tick(), 1000);
        return () => {
            // on component unmount.
            clearInterval(timerID);
        };
    }, [tick]);

    return (
        <span>
            {date.toLocaleTimeString()}
        </span>
    );
};

export default Clock;
