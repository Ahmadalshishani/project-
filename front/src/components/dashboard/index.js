import React, { useContext, useState } from "react";
import "./style.css";
import Logo from "../../pictures/Group 8.png";
import { AuthContext } from "../../contexts/authContent";
import DragDrop from "../DragDrop/index";

const Dashboard = () => {
  const { token } = useContext(AuthContext);

  // State to manage files
  const [originalFile, setOriginalFile] = useState(null);
  const [designFile, setDesignFile] = useState(null);

  // API endpoint
  const API_URL = "https://example.com/api/upload";

  // Handle file uploads
  const handleFileUpload = (file, type) => {
    if (type === "original") {
      setOriginalFile(file);
    } else if (type === "design") {
      setDesignFile(file);
    }
  };

  // Handle file submission
  const handleSubmit = async () => {
    if (!originalFile || !designFile) {
      alert("Please upload both files before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("original", originalFile);
    formData.append("design", designFile);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Include token if required
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        alert("Files uploaded successfully!");
        console.log(result);
      } else {
        alert("Failed to upload files.");
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("An error occurred while uploading files.");
    }
  };

  return (
    <>
      <header className="header">
        <p>Welcome, User 👋</p>
        <img src={Logo} alt="Company Logo" />
      </header>
      <main className="inner">
        <h1 className="head">Click. Compare. Share with Confidence!</h1>
        <section className="body">
          <div className="original">
            <h2 className="pargraph">Upload Original File</h2>
            <DragDrop onFileUpload={(file) => handleFileUpload(file, "original")} />
            <p className="format-pargraph">Formats accepted are .ppx and .pdf</p>
          </div>
          <div className="updated">
            <h2 className="pargraph">Upload Design File</h2>
            <DragDrop onFileUpload={(file) => handleFileUpload(file, "design")} />
            <p className="format-pargraph">Formats accepted are .ppx and .pdf</p>
          </div>
        </section>
        <p className="description">Disclaimer: We use a closed-system AI-powered technology to check files. All information remains secure and private, with no external sharing</p>
        <button
         className={`submit-button ${
          originalFile && designFile ? "active" : "inactive"
        }`}
         onClick={handleSubmit} 
        >
          Compare files now
        </button>
      </main>
    </>
  );
};

export default Dashboard;
