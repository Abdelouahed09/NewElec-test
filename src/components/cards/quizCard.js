import { useEffect, useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Alert, Card, Row, Col, Form, Button } from "react-bootstrap";
import "../../styles/cards.css";

export const QuizCard = () => {
  const [dragging, setDragging] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    setDragging(false);
  }, []);

  function handleDragEnter(e) {
    e.preventDefault();
    setDragging(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    setDragging(false);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);

    const files = Array.from(e.dataTransfer.files);
    const validFiles = files.filter((file) => {
      return (
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/gif"
      );
    });
    if (validFiles.length > 0) {
      setSuccessMessage("File successfully uploaded!");
      console.log(validFiles);
    }
  }

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) =>
      ["image/jpeg", "image/png", "image/gif"].includes(file.type)
    );
    if (validFiles.length > 0) {
      setSuccessMessage("File successfully uploaded!");
      console.log(validFiles);
    }
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
  };

  const options = [
    { id: 1, text: "True", isRight: false },
    { id: 2, text: "False", isRight: true },
  ];

  return (
    <>
      <div className="success-alert">
        {successMessage && (
          <Alert
            variant="success"
            onClose={() => setSuccessMessage(null)}
            dismissible
          >
            {successMessage}
          </Alert>
        )}
      </div>
      <Card className="image-uploader3">
        <span className="quiz-title">Training quiz</span>
        <span className="quiz-text">
          Here you can manage the questions by clicking on the "Add Question"
          button and choose from the available types of question. You can add up
          to 100 questions.{" "}
        </span>
        <div class="quiz-line"></div>

        <Card.Body className="quiz-container">
          <Row className="quiz-row">
            <Col lg={9}>
              <div className="quiz-image-title">
                <h5 className="quiz-card-title">Question 1</h5>
                <Button className="x-btn">
                  <AiOutlineClose className="x-icon" size={25} />
                </Button>
              </div>
              <p className="quiz-card-question">
                Dust-filters respirators may be used for continuous protection
                while silica sand is used as the blasting abrasive.
              </p>
              {options.map((option) => (
                <div
                  key={option.id}
                  className={`quiz-card-option ${
                    option.isRight ? "right" : ""
                  } ${selectedOption === option.id ? "selected" : ""}`}
                  onClick={() => handleOptionClick(option.id)}
                >
                  {option.text}
                  <div
                    className={`checkbox ${
                      selectedOption === option.id ? "checked" : ""
                    }`}
                  >
                    {selectedOption === option.id && (
                      <BsCheck className="check-icon" />
                    )}
                  </div>
                  <div className="quiz-upload-icon">
                    <label htmlFor="fileInput">
                      <BsCloudUpload size={22} />
                    </label>
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      onClick={(event) => (event.target.value = null)}
                    />
                  </div>
                </div>
              ))}
            </Col>
            <Col lg={3}>
              <div className="quiz-image-title">
                <h6>Question Image</h6>
                <span>Optional</span>
              </div>
              <div
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="image-dropzone3"
              >
                <div className="upload-icon">
                  <BsCloudUpload className="optional-upload-icon" size={45} />
                </div>
                <div className="text3">
                  <p>Drag and drop your image here OR</p>
                  <label className="file-input-label">
                    browse files
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      onClick={(event) => (event.target.value = null)}
                    />
                  </label>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="quiz-row">
            <Col lg={9}>
              <div className="quiz-image-title">
                <h5 className="quiz-card-title">Question 1</h5>
                <Button className="x-btn">
                  <AiOutlineClose className="x-icon" size={25} />
                </Button>
              </div>
              <p className="quiz-card-question">
                Dust-filters respirators may be used for continuous protection
                while silica sand is used as the blasting abrasive.
              </p>
              {options.map((option) => (
                <div
                  key={option.id}
                  className={`quiz-card-option ${
                    option.isRight ? "right" : ""
                  } ${selectedOption === option.id ? "selected" : ""}`}
                  onClick={() => handleOptionClick(option.id)}
                >
                  {option.text}
                  <div
                    className={`checkbox ${
                      selectedOption === option.id ? "checked" : ""
                    }`}
                  >
                    {selectedOption === option.id && (
                      <BsCheck className="check-icon" />
                    )}
                  </div>
                  <div className="quiz-upload-icon">
                    <label htmlFor="fileInput">
                      <BsCloudUpload size={22} />
                    </label>
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      onClick={(event) => (event.target.value = null)}
                    />
                  </div>
                </div>
              ))}
            </Col>
            <Col lg={3}>
              <div className="quiz-image-title">
                <h6>Question Image</h6>
                <span>Optional</span>
              </div>
              <div
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="image-dropzone3"
              >
                <div className="upload-icon">
                  <BsCloudUpload className="optional-upload-icon" size={45} />
                </div>
                <div className="text3">
                  <p>Drag and drop your image here OR</p>
                  <label className="file-input-label">
                    browse files
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      onClick={(event) => (event.target.value = null)}
                    />
                  </label>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="add-quiz-btn">
            <Col lg={12}>
              <Button className="add-btn">Add Question +</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
