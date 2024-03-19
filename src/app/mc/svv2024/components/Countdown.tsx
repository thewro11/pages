import { useEffect, useState } from "react"

export default function Countdown(countdownProps: {
  endDate: Date
}) {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(new Date(countdownProps.endDate).getTime() - new Date().getTime());
      getReturnValues(countdown);
    }, 100);

    return () => clearInterval(interval);
  }, [countdown]);

  const getReturnValues = (countdown: number) => {
    // calculate time left
    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    setDays(days);

    const hours = Math.floor(
      (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    setHours(hours);

    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    setMinutes(minutes);

    const seconds = Math.floor((countdown % (1000 * 60)) / 1000);
    setSeconds(seconds);
    
  };
  

  return (
    <>
      {days.toString().padStart(2, "0")} : {hours.toString().padStart(2, "0")} : {minutes.toString().padStart(2, "0")} : {seconds.toString().padStart(2, "0")}
    </>
  )

}
