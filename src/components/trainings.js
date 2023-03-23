import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "../styles/trainings.css";
import { Card2 } from "./cards/card2";
import { Card3 } from "./cards/card3";
import { Card1 } from "./cards/card1";
import { QuizCard } from "./cards/quizCard";
import { LastCards } from "./cards/lastCards";

export const Trainings = () => {
  return (
    <div className="trainings-container">
      <div className="header-container">
        <h5 className="title">Edit Training "Working At Height"</h5>
        <div className="right-btn">
          <Button className="cancel-btn">Cancel</Button>
          <Button className="update-btn">Update & Save</Button>
        </div>
      </div>
      <Row className="row">
        <Col className="first-cards" xl={6} lg={6} md={6} sm={12} xs={12}>
          <Card1 />
        </Col>
        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
          <div className="first-cards">
            <Card2 />
          </div>
        </Col>
        <Col xl={2} lg={2} md={2} sm={6} xs={12}>
          <div className="first-cards">
            <Card3 />
          </div>
        </Col>
      </Row>
      <Row className="row">
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="first-cards">
            <QuizCard />
          </div>
        </Col>
      </Row>
      <Row className="row">
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="first-cards">
            <LastCards />
          </div>
        </Col>
      </Row>
    </div>
  );
};
