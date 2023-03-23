import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navbar.css";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  NavDropdown,
  Dropdown,
  Badge,
  Image,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrLogout } from "react-icons/gr";
import { MdOutlinePolicy } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import Eng from "../assets/flags/uk.png";
import Sp from "../assets/flags/spain.png";
import Fr from "../assets/flags/france.png";
import Nt from "../assets/flags/netherlands.png";
import Gr from "../assets/flags/german.png";
import UserImage from "../assets/me01.jpg";

const languages = [
  { name: "English", flag: Eng },
  { name: "Deutsch", flag: Gr },
  { name: "Français", flag: Fr },
  { name: "Español", flag: Sp },
  { name: "Netherlands", flag: Nt },
];
export const TopNavbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
  };

  return (
    <Navbar className="navbar" bg="white">
      <Container fluid>
        <Navbar.Brand className="logo" href="#">
          Newelec
        </Navbar.Brand>
        <Form className="form">
          <InputGroup>
            <Button className="search-btn" id="button-addon1">
              <BsSearch className="search-icon" />
            </Button>
            <FormControl
              className="search-form"
              type="search"
              placeholder="Quick search ..."
              aria-label="Search"
            />
          </InputGroup>
        </Form>
        <Navbar.Toggle className="navs" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav" navbarScroll>
            <Nav.Link href="#action1" className="nav-link">
              Dashboard
            </Nav.Link>
            <Nav.Link className="nav-link" href="#action2" active>
              Trainings
            </Nav.Link>
            <Nav.Link className="nav-link" href="#action7">
              Users
            </Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button className="notif-btn">
          <IoMdNotificationsOutline className="notif-icon" size={24} />
        </Button>

        <Dropdown>
          <Dropdown.Toggle className="language-dropdown">
            <img
              src={selectedLanguage.flag}
              alt="US Flag"
              className="language-icon"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {languages.map((lang, index) => (
              <Dropdown.Item
                onClick={() => handleLanguageSelect(lang)}
                key={index}
              >
                <img
                  src={lang.flag}
                  alt={lang.name + " Flag"}
                  className="language-icon"
                />
                {lang.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="user-dropdown" align="end">
          <Dropdown.Toggle variant="link" className="dropdown-toggle">
            <Image src={UserImage} roundedCircle />
            <span>John Doe</span>
          </Dropdown.Toggle>

          <Dropdown.Menu className="user-menu">
            <h6>BESIX Group</h6>
            <p>besix.group@besix.be</p>
            <Dropdown.Divider />
            <Dropdown.Item>
              <FiSettings className="me-2" />
              Profile Settings
            </Dropdown.Item>
            <Dropdown.Item>
              <MdOutlinePolicy className="me-2" />
              Our Policies
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <GrLogout className="me-2" />
              <Badge bg="danger">Log Out</Badge>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};
