import { useState } from "react";
import { Form } from "react-bootstrap";
import { FcWebcam } from "react-icons/fc";
import "../../styles/cards.css";

function ToggleSwitch({ defaultOn }) {
  const [isOn, setIsOn] = useState(defaultOn);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <Form.Group>
      <div className="last-cards-container">
        <FcWebcam size={50} />
        <div className="time-title">
          <span>Toggle Switch</span>
        </div>
        <div className="toggle-switch-container">
          <Form.Check
            type="switch"
            id={`toggle-switch-${Math.random()}`}
            label=""
            checked={isOn}
            onChange={handleClick}
            className="toggle-switch-checkbox"
          />
        </div>
      </div>
    </Form.Group>
  );
}

export default ToggleSwitch;
