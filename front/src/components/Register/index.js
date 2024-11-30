import React, { useState } from "react";
import image from "../../pictures/2@2x 1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://194.242.57.64:5000";
function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [dis, setDis] = useState(true);

  const register = () => {
    if (!agree) {
      console.log("Please Agree the terms");
      setErrorMessage("Please Agree the terms and policy");
      return;
    }

    axios
      .put(`${baseUrl}/register`, {
        name: name,
        email: email,
        password: password,
        company: company,
        phone: phone,
      })
      .then((result) => {
        console.log(result);
        setSuccess(true);
        setErrorMessage("");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setSuccess(false);
        setErrorMessage("Login failed. Please check your credentials.");
      });
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", }}
    >
      <div className="block"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
          justifyContent: "center",
        
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
            cursor={"pointer"}
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                navigate("/login");
              }}
             
            >
              <path
                d="M10.9375 23.4375H42.1875C42.6019 23.4375 42.9993 23.6021 43.2924 23.8951C43.5854 24.1882 43.75 24.5856 43.75 25C43.75 25.4144 43.5854 25.8118 43.2924 26.1049C42.9993 26.3979 42.6019 26.5625 42.1875 26.5625H10.9375C10.5231 26.5625 10.1257 26.3979 9.83265 26.1049C9.53962 25.8118 9.375 25.4144 9.375 25C9.375 24.5856 9.53962 24.1882 9.83265 23.8951C10.1257 23.6021 10.5231 23.4375 10.9375 23.4375Z"
                fill="black"
              />
              <path
                d="M11.5845 25L24.5439 37.9562C24.8373 38.2496 25.0021 38.6476 25.0021 39.0625C25.0021 39.4774 24.8373 39.8753 24.5439 40.1687C24.2505 40.4621 23.8525 40.627 23.4376 40.627C23.0227 40.627 22.6248 40.4621 22.3314 40.1687L8.26886 26.1062C8.12335 25.9611 8.0079 25.7887 7.92913 25.5988C7.85036 25.409 7.80981 25.2055 7.80981 25C7.80981 24.7945 7.85036 24.591 7.92913 24.4011C8.0079 24.2113 8.12335 24.0389 8.26886 23.8937L22.3314 9.83124C22.6248 9.53784 23.0227 9.37302 23.4376 9.37302C23.8525 9.37302 24.2505 9.53784 24.5439 9.83124C24.8373 10.1246 25.0021 10.5226 25.0021 10.9375C25.0021 11.3524 24.8373 11.7503 24.5439 12.0437L11.5845 25Z"
                fill="black"
              />
            </svg>

            <p
              style={{
                margin: "0px",
                fontSize: "32px",
                fontWeight: "500",
                fontFamily: "inter",
                cursor:"default",
              }}
            >
              Sign Up to Compare
            </p>
          </div>
          <div style={{ marginTop: "58px" }}>
            <p
              style={{
                fontFamily: "inter",
                fontWeight: "500",
                fontSize: "14px",
                cursor:"default",
              }}
            >
              Name
            </p>
            <input
              placeholder="Enter your name"
              style={{
                maxWidth: "404px",
                width: "100%",
                height: "35px",
                borderRadius: "6px",
                paddingLeft: "10px",
                cursor:"default",
              }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p
              style={{
                fontFamily: "inter",
                fontWeight: "500",
                fontSize: "14px",
                cursor:"default",
              }}
            >
              Email Address
            </p>
            <input
              placeholder="Enter your email address"
              style={{
                maxWidth: "404px",
                width: "100%",
                height: "35px",
                borderRadius: "6px",
                paddingLeft: "10px",
                cursor:"default",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontFamily: "inter",
                fontWeight: "500",
                fontSize: "14px",
                cursor:"default",
              }}
            >
              Password
            </p>
            <input
              type={dis ? "password" : "text"}
              placeholder="Enter your password"
              style={{
                maxWidth: "404px",
                width: "100%",
                height: "35px",
                borderRadius: "6px",
                paddingLeft: "10px",
                cursor:"default",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              class="password-toggle-icon"
              style={{
                height: "20px",
                width: "20px",
                position: "absolute",
                top: "40px",
                right: "0",
                cursor:"pointer",
              }}
              onClick={() => {
                setDis(!dis);
              }}
            >
              <i class={!dis ? "fas fa-eye-slash" : "fas fa-eye"}></i>
            </span>
          </div>

          <div>
            <p
              style={{
                fontFamily: "inter",
                fontWeight: "500",
                fontSize: "14px",
                cursor:"default",
              }}
            >
              Company Name
            </p>
            <input
              placeholder="Enter your company’s name"
              style={{
                maxWidth: "404px",
                width: "100%",
                height: "35px",
                borderRadius: "6px",
                paddingLeft: "10px",
                cursor:"default",
              }}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div>
            <p
              style={{
                fontFamily: "inter",
                fontWeight: "500",
                fontSize: "14px",
                cursor:"default",
              }}
            >
              Phone Number
            </p>
            <input
              placeholder="Enter your phone number"
              style={{
                maxWidth: "404px",
                width: "100%",
                height: "35px",
                borderRadius: "6px",
                paddingLeft: "10px",
                cursor:"default",
              }}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                style={{ height: "24px", width: "24px" ,cursor:"pointer",}}
                onChange={(e) => setAgree(e.target.value)}
              />
              <p
                style={{
                  marginLeft: "5px",
                  fontFamily: "inter",
                  fontWeight: "500",
                  fontSize: "14",
                  cursor:"default",
                }}
              >
                I agree to the terms & policy
              </p>
            </div>
          </div>
          <button
            onClick={register}
            style={{
              width: "100%",
              height: "32px",
              backgroundColor: success ? "#4CAF50" : "#F56666", // Green on success
              color: "white",
              border: "0px",
              borderRadius: "10px",
              cursor: "pointer",
              fontFamily: "inter",
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            Signup
          </button>
          {errorMessage && (
            <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
          )}
        </div>
      </div>
      <div
        className="img"
        style={{
          width: "50%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          style={{
            width: "100%",
            objectFit: "cover",
            height: "100%",
            objectPosition: "top left",
          }}
          alt="Login Illustration"
        />
      </div>
    </div>
  );
}

export default Register;
