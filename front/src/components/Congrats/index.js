import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../../pictures/Group 8.png";
import { deleteCompare } from "../reducers/compare";
const Congrats = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const username = localStorage.getItem("userName") || sessionStorage.getItem("userName");


  const handleBack = () => {
    dispatch(deleteCompare());
    navigate("/");
  };

  return (
    <>

      <header className="header">
        <p>Welcome, {username} 👋</p>
        <img src={Logo} alt="Company Logo" />
      </header>
      <div style={{ maxWidth: "100rem", margin: "auto", width: "90%" }}>
        <div style={{ display: "flex", alignItems: "end" }}>
          <svg
            width="50"
            height="50"
            viewBox="0 5 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              handleBack();
            }}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M10.9375 23.4375H42.1875C42.6019 23.4375 42.9993 23.6021 43.2924 23.8951C43.5854 24.1882 43.75 24.5856 43.75 25C43.75 25.4144 43.5854 25.8118 43.2924 26.1049C42.9993 26.3979 42.6019 26.5625 42.1875 26.5625H10.9375C10.5231 26.5625 10.1257 26.3979 9.83265 26.1049C9.53962 25.8118 9.375 25.4144 9.375 25C9.375 24.5856 9.53962 24.1882 9.83265 23.8951C10.1257 23.6021 10.5231 23.4375 10.9375 23.4375Z"
              fill="black"
            />
            <path
              d="M11.5844 25L24.5437 37.9563C24.8371 38.2497 25.002 38.6476 25.002 39.0625C25.002 39.4774 24.8371 39.8754 24.5437 40.1688C24.2503 40.4622 23.8524 40.627 23.4375 40.627C23.0226 40.627 22.6246 40.4622 22.3312 40.1688L8.26874 26.1063C8.12323 25.9611 8.00778 25.7887 7.92901 25.5989C7.85024 25.409 7.80969 25.2055 7.80969 25C7.80969 24.7945 7.85024 24.591 7.92901 24.4012C8.00778 24.2113 8.12323 24.0389 8.26874 23.8938L22.3312 9.83127C22.6246 9.53787 23.0226 9.37305 23.4375 9.37305C23.8524 9.37305 24.2503 9.53787 24.5437 9.83127C24.8371 10.1247 25.002 10.5226 25.002 10.9375C25.002 11.3524 24.8371 11.7504 24.5437 12.0438L11.5844 25Z"
              fill="black"
            />
          </svg>

          <h1 className="head" style={{ marginBottom: "0px" }}>
            These small changes will make a big impact!
          </h1>
        </div>
        <p
          style={{
            marginTop: "0px",
            marginLeft: "50px",
            fontFamily: "inter",
            fontWeight: "700",
            fontSize: "24px",
            color: "#2b1b4c",
          }}
        >
          Number of Issues: 0
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{ fontFamily: "inter", fontWeight: "700", fontSize: "48px" }}
          >
            Woo hoo!! 🎉
          </h1>
          <h1
            style={{ fontFamily: "inter", fontWeight: "600", fontSize: "48px" }}
          >
            Your presentaion is error free!
          </h1>
          <p
            style={{
              marginTop: "0px",
              fontFamily: "inter",
              fontWeight: "700",
              fontSize: "24px",
              color: "#2b1b4c",
            }}
          >
            Number of Issues: 0
          </p>
          <button
            style={{
              maxWidth: "473px",
              width: "100%",
              height: "49px",
              borderRadius: "12px",
              backgroundColor: "#f56666",
              fontFamily:"inter",
              fontWeight:"700",
              fontSize:"24px",
              color:"white"
            }}
            onClick={()=>{
                handleBack()
            }}
          >
            Compare more slides
          </button>
        </div>
      </div>
    </>
  );
};

export default Congrats;
