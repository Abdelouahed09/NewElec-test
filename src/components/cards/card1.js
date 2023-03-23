import React from "react";
import { Button, Row, Col, Card, Form, InputGroup } from "react-bootstrap";
import "../../styles/trainings.css";
import { AiOutlineSafety } from "react-icons/ai";
import { BsFillPersonVcardFill } from "react-icons/bs";

export const Card1 = () => {
  return (
    <Card className="first-cards">
      <Card.Body>
        <Row>
          <Col md={4}>
            <span className="dpd-title">Category</span>
            <Button className="btn-new" variant="outline-primary" size="sm">
              Add new +
            </Button>
            <InputGroup>
              <InputGroup.Text className="icon">
                <AiOutlineSafety size={20} />
              </InputGroup.Text>
              <Form.Select className="dpd-btn">
                <option>Safety</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </InputGroup>
          </Col>
          <Col md={4}>
            <span className="dpd-title">Topic</span>
            <Button className="btn-new" variant="outline-primary" size="sm">
              Add new +
            </Button>

            <InputGroup>
              <InputGroup.Text className="icon">
                <BsFillPersonVcardFill size={20} />
              </InputGroup.Text>
              <Form.Select className="dpd-btn">
                <option>VCA</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </InputGroup>
          </Col>
          <Col md={4}>
            <span className="dpd-title">Valid for</span>
            <Button className="btn-new" variant="outline-primary" size="sm">
              Add new +
            </Button>
            <InputGroup>
              <Form.Select className="dpd-btn2">
                <option>1 year</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <span className="dpd-title">Training</span>
            <InputGroup>
              <Form.Select className="dpd-btn1">
                <option>Working at Height</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>{" "}
              <InputGroup.Text className="icon1">
                <BsFillPersonVcardFill size={20} />
              </InputGroup.Text>
            </InputGroup>
          </Col>
          <Col md={4}>
            <span className="dpd-title">Assign To</span>
            <Form.Select className="dpd-btn2">
              <BsFillPersonVcardFill size={20} className="icon" />
              <option>Internal Workers</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <span className="dpd-title">Departements</span>
            <Form.Select className="dpd-btn2">
              <option disabled>Select a Departement</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <span className="dpd-title">Functions</span>
            <Form.Select className="dpd-btn2">
              <option disabled>Select a Function</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col md={8}>
            <span className="dpd-title">Description</span>
            <Form className="textarea">
              <Form.Control placeholder="Type Here .." as="textarea" rows={4} />
            </Form>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
