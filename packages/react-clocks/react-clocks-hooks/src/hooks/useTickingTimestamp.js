import { useState, useEffect } from "react";

/*
  returns a (ticking) timestamp every interval
*/
const useTickingTimestamp = ({
  timestamp = Date.now(),
  interval = 1000,
} = {}) => {
  const [tickingTimestamp, setTickingTimestamp] = useState(timestamp);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTickingTimestamp(
        (currentTickingTimestamp) => currentTickingTimestamp + interval
      );
    }, interval);
    return () => clearInterval(intervalId);
  }, []);

  return tickingTimestamp;
};

export default useTickingTimestamp;
