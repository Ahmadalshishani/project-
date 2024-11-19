import React from "react";
import image from "../../pictures/2@2x 1.png";

const Login = () => {
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
          <p style={{ margin: "0px", fontSize: "32px", fontWeight: "500" }}>
            Welcome!
          </p>
          <p>Log in to streamline QA and improve file comparisons.</p>
          <div>
            <p>Email address</p>
            <input
              placeholder="Enter your email address"
              style={{
                maxWidth: "404px",
                width: "100%",
                height: "35px",
                borderRadius: "6px",
                paddingLeft: "10px",
              }}
            />
          </div>
          <div>
            <p>Email address</p>
            <input
              placeholder="Enter your password"
              style={{
                maxWidth: "404px",
                width: "100%",
                height: "35px",
                borderRadius: "6px",
                paddingLeft: "10px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex" }}>
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p>forgot password?</p>
          </div>
          <button
            style={{
              width: "100%",
              height: "32px",
              backgroundColor: "#F56666",
              color: "white",
              border: "0px",
              borderRadius: "10px",
            }}
          >
            Login
          </button>
          <p>
            Don’t have an account?{" "}
            <span
              style={{ color: "#0F3DDE", textAlign: "center", width: "100%" }}
            >
              Sign Up
            </span>{" "}
          </p>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <img
          src={image}
          style={{ height: "100vh", width: "100%", objectFit: "fill" }}
        />
      </div>
    </div>
  );
};

export default Login;
