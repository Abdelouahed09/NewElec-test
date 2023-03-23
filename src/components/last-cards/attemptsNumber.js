import { useState } from "react";
import { Form } from "react-bootstrap";
import { SlReload } from "react-icons/sl";
import "../../styles/cards.css";

function AttemptsNumber({ defaultValue }) {
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
        <SlReload size={50} />
        <div className="time-title">
          <span>Attemps</span>
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
      </div>
    </Form.Group>
  );
}

export default AttemptsNumber;
