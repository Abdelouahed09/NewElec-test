import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "../../styles/cards.css";
import CountdownSeconds from "../last-cards/countdownSeconds";
import RangeNumber from "../last-cards/rangeNumber";
import ToggleSwitch from "../last-cards/toggleSwitch";
import PercentageScore from "../last-cards/percentageScore";
import CountdownTimer from "../last-cards/countdownTimer";
import NumberOfAttempts from "../last-cards/attemptsNumber";

export const LastCards = () => {
  return (
    <div className="cards-container">
      <Row className="row">
        <Col xl={2} lg={2} md={4} sm={4} xs={6}>
          <Card className="card-container">
            <Card.Body>
              <RangeNumber defaultValue={10} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={2} lg={2} md={4} sm={4} xs={6}>
          <Card className="card-container">
            <Card.Body>
              <CountdownSeconds initialDuration={60} />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={2} lg={2} md={4} sm={4} xs={6}>
          <Card className="card-container">
            <Card.Body>
              <PercentageScore defaultValue={80} />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={2} lg={2} md={4} sm={4} xs={6}>
          <Card className="card-container">
            <Card.Body>
              <ToggleSwitch defaultOn />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={2} lg={2} md={4} sm={4} xs={6}>
          <Card className="card-container">
            <Card.Body>
              <CountdownTimer initialDuration={30} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={2} lg={2} md={4} sm={4} xs={6}>
          <Card className="card-container">
            <Card.Body>
              <NumberOfAttempts defaultValue={3} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
