import React, { useState } from "react";
import image from "../../pictures/2@2x 1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../reducers/auth";
import "./style.css";

const baseUrl = "http://194.242.57.64:5000";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [remember, setRemember] = useState();
  const [dis, setDis] = useState(true);
  const login = () => {
    if (!username || !password) {
      console.log("Please enter both username and password.");
      return;
    }

    axios
      .post(
        `${baseUrl}/login`,
        null, // No body required for this login API
        {
          headers: {
            Authorization: `Basic ${btoa(`${username}:${password}`)}`,
          },
        }
      )
      .then((response) => {
        console.log("Login successful:", response.data);
        setSuccess(true);
        setErrorMessage("");
        if (remember) {
          localStorage.setItem("userName", response.data.name);
          localStorage.setItem("userEmail", response.data.email);
          localStorage.setItem("userCompany", response.data.company);
          localStorage.setItem("userPhone", response.data.phone);
          localStorage.setItem("password", password);
        } else {
          sessionStorage.setItem("userName", response.data.name);
          sessionStorage.setItem("userEmail", response.data.email);
          sessionStorage.setItem("userCompany", response.data.company);
          sessionStorage.setItem("userPhone", response.data.phone);
          sessionStorage.setItem("password", password);
        }

        dispatch(setLogin(password));
        if (response) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        setSuccess(false);
        setErrorMessage("Login failed. Please check your credentials.");
      });
  };
  console.log(dis);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "0 auto" }}
    >
      <div
        className="block"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "754px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div style={{}}>
          <p
            style={{
              margin: "0px",
              fontSize: "32px",
              fontWeight: "500",
              fontFamily: "inter",
              cursor: "default",
            }}
          >
            Welcome!
          </p>
          <p
            style={{
              fontFamily: "inter",
              fontWeight: "500",
              fontSize: "16px",
              color: "#999999",
              cursor: "default",
            }}
          >
            Log in to streamline QA and improve file comparisons.
          </p>

          <div>
            <p
              style={{
                fontFamily: "inter",
                fontWeight: "500",
                fontSize: "14px",
                marginTop: "29px",
                cursor: "default",
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
                cursor: "default",
              }}
              onChange={(e) => setUsername(e.target.value.replace(/\s+/g, ""))}
            />
          </div>
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontFamily: "inter",
                fontWeight: "500",
                fontSize: "14px",
                marginTop: "29px",
                cursor: "default",
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
                cursor: "default",
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
              }}
              onClick={() => {
                setDis(!dis);
              }}
            >
              <i
                class={!dis ? "fas fa-eye-slash" : "fas fa-eye"}
                style={{ cursor: "pointer" }}
              ></i>
            </span>
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
                style={{ height: "24px", width: "24px", cursor: "pointer" }}
                onChange={(e) => setRemember(e.target.value)}
              />
              <p
                style={{
                  marginLeft: "5px",
                  fontFamily: "inter",
                  fontWeight: "500",
                  fontSize: "14px",
                  cursor: "default",
                }}
              >
                Remember me
              </p>
            </div>
            <p
              style={{
                fontFamily: "inter",
                fontWeight: "500",
                fontSize: "14px",
                color: "#0F3DDE",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/forgotten");
              }}
            >
              Forgot password?
            </p>
          </div>
          <button
            onClick={login}
            style={{
              width: "100%",
              height: "32px",
              backgroundColor: success ? "#4CAF50" : "#F56666", // Green on success
              color: "white",
              border: "0px",
              borderRadius: "10px",
              cursor: "pointer",
              fontFamily: "inter",
              fontWeight: "700",
              fontSize: "14px",
            }}
          >
            Login
          </button>
          {errorMessage && (
            <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
          )}

          <p
            style={{
              fontFamily: "inter",
              fontWeight: "500",
              fontSize: "14px",
              textAlign: "center",
              cursor: "default",
            }}
          >
            Don’t have an account?{" "}
            <span
              style={{
                color: "#0F3DDE",
                textAlign: "center",
                width: "100%",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
      <div
        className="img"
        style={{
          width: "1100px",
          height: "100vh",
          maxHeight: "1440px",
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
};

export default Login;
