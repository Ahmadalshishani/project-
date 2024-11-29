import React, { useState } from "react";
import image from "../../pictures/2@2x 1.png";
import { useNavigate } from "react-router-dom";
import "./style.css"


const baseUrl = "http://194.242.57.64:5000";

const Forget = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [dis, setDis] = useState(false);
  const login = () => {
    setErrorMessage("Sorry, Something Went Wrong");
  };
  console.log(dis);
  return (
    <div
      style={{ display: "flex", justifyContent: "center",  }}
    >
      <div className="block"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          maxWidth: "754px",
          width: "100%",
        }}
      >
        <div>
          <p className="forget"
            style={{
              maxWidth: "351px",
              width: "100%",
              maxHeight: "39px",
              height: "100%",
              margin: "0px",
              fontSize: "32px",
              fontWeight: "500",
              fontFamily: "inter",
            }}
          >
            Forgot your password?
          </p>
          <p
            style={{
              maxWidth: "230px",
              width: "100%",
              height: "19px",
              fontFamily: "inter",
              fontWeight: "500",
              fontSize: "16px",
              color: "#999999",
            }}
          >
            No worries, We got your back!
          </p>

          <div>
            <p
              style={{
                maxWidth: "170px",
                width: "100%",
                height: "17px",
                fontFamily: "inter",
                fontWeight: "500",
                fontSize: "14px",
                marginTop: "20px",
                marginBottom: "8px",
              }}
            >
              Enter your email address
            </p>
            <input
              placeholder="Enter your email address"
              style={{
                maxWidth: "408px",
                width: "100%",
                height: "35px",
                borderRadius: "6px",
                paddingLeft: "10px",
              }}
            />
          </div>
          <button
            onClick={login}
            style={{
              maxWidth: "404px",
              width: "100%",
              height: "35px",
              backgroundColor: "#F56666", // Green on success
              color: "white",
              border: "0px",
              borderRadius: "10px",
              cursor: "pointer",
              fontFamily: "inter",
              fontWeight: "700",
              fontSize: "17px",
              marginTop: "20px",
            }}
          >
            Send Recovery Email
          </button>
          {errorMessage && (
            <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
          )}
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

export default Forget;
