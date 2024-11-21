import React, { useContext, useState } from "react";
import "./style.css";
import Logo from "../../pictures/Group 8.png";
import DragDrop from "../DragDrop/index";
import { useDispatch, useSelector } from "react-redux";
import { setCompare } from "../reducers/compare";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://194.242.57.64:5000";

const Dashboard = () => {
  const navigate = useNavigate()
 
  const dispatch = useDispatch();
  const username = localStorage.getItem("userName");
  const useremail = localStorage.getItem("userEmail");
  const password = "123456789";
  const basicAuth = `Basic ${btoa(`${useremail}:${password}`)}`;

 
  // State to manage files
  const [originalFile, setOriginalFile] = useState(null);
  const [designFile, setDesignFile] = useState(null);
  const { compare } = useSelector((state) => {
    return {
      compare: state.compare.comparing,
    };
  });
console.log(compare);
  // API endpoint
  const baseUrl = "http://194.242.57.64:5000";

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
    formData.append("old_doc", originalFile);
    formData.append("new_doc", designFile);

    console.log(useremail);

    try {
      const response = await fetch(`${baseUrl}/compare`, {
        method: "POST",
        headers: {
          Authorization: basicAuth,
        },
        body: formData,
      });
      if (response.ok) {
        const result = await response.json();
        dispatch(setCompare(result));
        console.log(result);
        navigate("/compare");
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
        <p>Welcome, {username} 👋</p>
        <img src={Logo} alt="Company Logo" />
      </header>
      <div style={{ maxWidth: "100rem", margin: "auto", width: "90%" }}>
        <h1 className="head">Click. Compare. Share with Confidence!</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gap: "10px",
          }}
        >
          <div style={{ width: "100%" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
              Upload Original File
            </h3>
            <hr />
            <DragDrop
              onFileUpload={(file) => handleFileUpload(file, "original")}
              style={{ margin: "33px", backgroundcolor: "black" }}
            />
            <p>Formats accepted are .ppx and .pdf</p>
            <div>
              <p style={{ margin: "0px", color: "#0083A0" }}>
                This is the original file provided by the client.
              </p>
              <svg
                width="307"
                height="6"
                viewBox="0 0 307 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M305.975 2.36227C306.527 2.37606 306.986 1.93967 307 1.38756C307.013 0.83545 306.577 0.376688 306.025 0.36289L305.975 2.36227ZM1.02349 5.99972C78.4436 4.18076 247.788 0.90805 305.975 2.36227L306.025 0.36289C247.777 -1.09283 78.3752 2.18182 0.976512 4.00028L1.02349 5.99972Z"
                  fill="#4DDCFB"
                />
              </svg>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <svg
              width="3"
              height="324"
              viewBox="0 0 3 324"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2.49999"
                y1="0.00302109"
                x2="0.542285"
                y2="324.003"
                stroke="#E3E3E3"
              />
            </svg>
          </div>
          <div style={{ width: "100%" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Upload Design File
            </h3>
            <hr style={{ borderColor: "#E3E3E3" }} />
            <DragDrop
              onFileUpload={(file) => handleFileUpload(file, "design")}
            />
            <p>Formats accepted are .ppx and .pdf</p>
            <div>
              <p style={{ margin: "0px", color: "#946600" }}>
                This is the original file provided by the client.
              </p>
              <svg
                width="298"
                height="6"
                viewBox="0 0 298 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M296.974 2.36225C297.526 2.37646 297.985 1.94042 298 1.38832C298.014 0.836219 297.578 0.377127 297.026 0.362909L296.974 2.36225ZM1.0242 5.99971C76.1604 4.18073 240.506 0.908077 296.974 2.36225L297.026 0.362909C240.495 -1.09286 76.0899 2.18185 0.975798 4.00029L1.0242 5.99971Z"
                  fill="#F9C95F"
                />
              </svg>
            </div>
          </div>
        </div>
        <p style={{ color: "#9D9D9D", fontSize: "16px", fontWeight: "400" }}>
          Disclaimer: We use a closed-system AI-powered technology to check
          files. All information remains secure and private, with no external
          sharing
        </p>
        <button
          className={`submit-button ${
            originalFile && designFile ? "active" : "inactive"
          }`}
          onClick={handleSubmit}
        >
          Compare files now
        </button>
      </div>
    </>
  );
};

export default Dashboard;
