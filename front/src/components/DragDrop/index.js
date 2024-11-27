import React, { useRef, useState } from "react";
import Cloud from "../../assest/Cloud";
import Cross from "../../assest/Cross";

function DragAndDropFileUpload({ onFileUpload, label ,backLable}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null); // Reference to the hidden file input

  // Handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      onFileUpload(file); // Notify parent about the selected file
    }
  };

  // Trigger file input click when the paragraph is clicked
  const handleParagraphClick = () => {
    fileInputRef.current.click();
  };

  // Handle drag events
  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent default to allow drop
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault(); // Prevent default behavior (open file in browser)
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      onFileUpload(file); // Notify parent about the dropped file
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: isDragging ? "2px solid #4caf50" : "2px dashed #ccc",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "690px",
        marginTop: "33px",
        backgroundColor: "d5d5d5",
        transition: "background-color 0.3s",
        cursor: "pointer",
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleParagraphClick}
    >
      {/* Optional label */}
      {label && (
        <p style={{ fontWeight: "bold", marginBottom: "10px" }}>{label}</p>
      )}

      {/* Paragraph acts as the button */}
      {selectedFile ? (
        <div>
          <p
            style={{
              margin: "0",
              color: "#484848",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={handleParagraphClick}
          >
            Selected File: {selectedFile.name}
            <span
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current.value = "";
                setSelectedFile(null);
              }}
            >
              {" "}
              <Cross />
            </span>
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Cloud />

          <p
           
            style={{
              margin: "0",
              color: "#484848",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
           {backLable}
          </p>
        </div>
      )}

      {/* Hidden file input */}

      <input
        type="file"
        ref={fileInputRef}
        accept=".pdf, .pptx, .docx"
        style={{ display: "none" }}
        onChange={handleFileSelect}
      />
    </div>
  );
}

export default DragAndDropFileUpload;
