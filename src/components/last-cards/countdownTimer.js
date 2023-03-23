import { useEffect, useState } from "react";
import { TfiTimer } from "react-icons/tfi";
import "../../styles/cards.css";

function CountdownTimer({ initialDuration }) {
  const [remainingTime, setRemainingTime] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && remainingTime > 0) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 60000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, remainingTime]);

  const handleDecrement = () => {
    if (remainingTime > 0) {
      setRemainingTime((prevTime) => prevTime - 1);
      setIsRunning(true);
    }
  };

  const handleIncrement = () => {
    setRemainingTime((prevTime) => prevTime + 1);
    setIsRunning(true);
  };

  return (
    <div className="last-cards-container">
      <TfiTimer size={50} className="clock-icon" />
      <div className="time-title">
        <span>Time Expected</span>
      </div>
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-primary" onClick={handleDecrement}>
          -
        </button>
        <input
          type="number"
          value={remainingTime}
          className="form-control mx-2"
          readOnly
        />

        <button className="btn btn-outline-primary" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
}

export default CountdownTimer;
