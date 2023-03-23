import { useEffect, useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { Alert, Card } from "react-bootstrap";
import "../../styles/cards.css";

export const Card2 = () => {
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
      <Card className={`image-uploader${dragging ? " dragging" : ""}`}>
        <span className="img-title">Image</span>
        <Card.Body>
          <div
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="image-dropzone"
          >
            <div className="upload-icon">
              <BsCloudUpload size={50} />
            </div>
            <div className="text">
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
          <small className="small">
            (Only JPG, PNG files are allowed. Image must be less than 2 MB)
          </small>
        </Card.Body>
      </Card>
    </>
  );
};
