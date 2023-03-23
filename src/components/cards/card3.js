import { useEffect, useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { Card, Form, Alert } from "react-bootstrap";
import "../../styles/cards.css";

export const Card3 = () => {
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
        file.type === "video/mp4" ||
        file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.presentationml.presentation"
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
      [
        "video/mp4",
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ].includes(file.type)
    );
    if (validFiles.length > 0) {
      setSuccessMessage("File successfully uploaded!");
      console.log(validFiles);
    }
  };

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
      <Card className={`image-uploader2${dragging ? " dragging" : ""}`}>
        <span className="img-title">Training File</span>
        <Card.Body>
          <div
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="image-dropzone2"
          >
            <div className="upload-icon2">
              <BsCloudUpload size={35} />
            </div>
            <div className="text2">
              <p>Drag and drop your file here OR</p>
              <label className="file-input-label">
                browse files
                <input
                  type="file"
                  accept="video/mp4,video/mov,video/avi,application/pdf"
                  onChange={handleFileInputChange}
                  onClick={(event) => (event.target.value = null)}
                />
              </label>
            </div>
          </div>
          <small className="small2">
            (Only Video, PDF and SlideShow files are allowed.)
          </small>
          <div class="line-container">
            <div class="line"></div>
            <span class="or">OR</span>
            <div class="line"></div>
          </div>
          <Form.Group controlId="ControlInput1">
            <Form.Label className="url-label">Media URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://youtu.be/KLDZiwIFhEc"
            />
          </Form.Group>
        </Card.Body>
      </Card>
    </>
  );
};
