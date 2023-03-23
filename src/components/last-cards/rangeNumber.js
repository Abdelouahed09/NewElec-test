import { useState } from "react";
import { Form } from "react-bootstrap";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import "../../styles/cards.css";

function RangeNumber({ defaultValue }) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue((prevTime) => prevTime - 1);
    }
  };

  const handleIncrement = () => {
    setValue((prevTime) => prevTime + 1);
  };

  return (
    <Form.Group>
      <div className="last-cards-container">
        <GiPerspectiveDiceSixFacesRandom size={50} className="clock-icon" />
        <div className="time-title">
          <span>Random Questions</span>
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

export default RangeNumber;
