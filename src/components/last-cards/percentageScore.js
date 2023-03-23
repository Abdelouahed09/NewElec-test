import { useState } from "react";
import { Form } from "react-bootstrap";
import { VscPassFilled } from "react-icons/vsc";
import "../../styles/cards.css";

function RangeNumber({ defaultValue }) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <Form.Group>
      <div className="last-cards-container">
        <VscPassFilled size={50} className="score-icon" />
        <div className="time-title">
          <span>Passing Score</span>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-primary" onClick={handleDecrement}>
            -
          </button>
          <Form.Control
            type="number"
            value={value}
            className="form-control mx-2"
            readOnly
            onChange={handleChange}
          />
          <button className="btn btn-outline-primary" onClick={handleIncrement}>
            +
          </button>
        </div>
        {/* <div className="percentage">
          {value >= 60 ? (
            <p style={{ color: "green" }}>
              Passed: {value}%{" "}
              <span style={{ marginLeft: "10px" }}>&#x2714;</span>
            </p>
          ) : (
            <p style={{ color: "red" }}>Failed: {value}%</p>
          )}
        </div> */}
      </div>
    </Form.Group>
  );
}

export default RangeNumber;
