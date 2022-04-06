import React, {useEffect} from "react";

type Props = {
    interval?: number;
    timezone: string;
    city: string;
}

const Timer: React.FC<Props> = ({interval, city, timezone}) => {
    const [time, setTime] = React.useState(new Date());
    function tic():void {
        setTime(new Date());
    }

    useEffect(() => {
        setInterval(tic, interval || 1000);
    });

    return (
        <>
        <div>
            <h3>{city}</h3>
            <label>{time.toLocaleTimeString('en-GB', {timeZone: timezone})}</label>
        </div>
        </>
    )
}

export default Timer;
