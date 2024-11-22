import React, { useState } from "react";
import image from "../../pictures/2@2x 1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../reducers/auth";

const baseUrl = "http://194.242.57.64:5000";

const Login = () => {
  const navigate = useNavigate();
const dispatch=useDispatch()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [remember,setRemember]=useState()

  const login = () => {
    if (!username || !password) {
      console.log("Please enter both username and password.");
      return;
    }
    console.log(typeof username);
    console.log(typeof password);
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
        if(remember){
          localStorage.setItem("userName", response.data.name);
          localStorage.setItem("userEmail", response.data.email);
          localStorage.setItem("userCompany", response.data.company);
          localStorage.setItem("userPhone", response.data.phone);
        }else{
          sessionStorage.setItem("userName", response.data.name);
          sessionStorage.setItem("userEmail", response.data.email);
          sessionStorage.setItem("userCompany", response.data.company);
          sessionStorage.setItem("userPhone", response.data.phone);
        }
       
       
        dispatch(setLogin(password))
        if (response) {
          console.log(localStorage.getItem("userName"));
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        setSuccess(false);
        setErrorMessage("Login failed. Please check your credentials.");
      });
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", gap: "40px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div>
          <p
            style={{
              margin: "0px",
              fontSize: "32px",
              fontWeight: "500",
              fontFamily: "inter",
            }}
          >
            Welcome!
          </p>
          <p
            style={{
              fontFamily: "inter",
              fontWeight: "500",
              fontSize: "16px",
              color: "#000000",
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
              }}
              onChange={(e) => setUsername(e.target.value.replace(/\s+/g, ""))}
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                maxWidth: "404px",
                width: "100%",
                height: "35px",
                borderRadius: "6px",
                paddingLeft: "10px",
              }}
              onChange={(e) => setPassword(e.target.value)}
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
                style={{ height: "24px", width: "24px" }}
                onChange={(e)=>setRemember(e.target.value)}
                
              />
              <p
                style={{
                  marginLeft: "5px",
                  fontFamily: "inter",
                  fontWeight: "500",
                  fontSize: "14px",
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
            }}
          >
            Login
          </button>
          {errorMessage && (
            <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
          )}

          <p>
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
      <div style={{ width: "100%" }}>
        <img
          src={image}
          style={{ height: "100vh", width: "100%", objectFit: "fill" }}
          alt="Login Illustration"
        />
      </div>
    </div>
  );
};

export default Login;
