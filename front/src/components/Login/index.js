import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import image from '../../pictures/2@2x 1.png'
import axios from "axios";

import { AuthContext } from "../../contexts/authContent";

import { useDispatch,useSelector } from "react-redux";
  import {  setLogin,
    setUserId,
    setLogout,}from "../reducers/auth/index"
//===============================================================

const Login = () => {
 const {/* isLoggedIn,*/ saveToken } = useContext(AuthContext);
  const history = useNavigate();
  const dispatch =useDispatch();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
const {token,userid,isLoggedIn}=useSelector((state)=>{
  return{
token:state.auth.token
,userid:state.auth.userid,
isLoggedIn:state.auth.isLoggedIn
  }
})
  //===============================================================

  const login = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      if (result.data) {
        setMessage("");
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("userId", result.data.userId);
        // saveToken(result.data.token, result.data.userId);
        dispatch(setLogin(result.data.token),setUserId(result.data.userId))
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Login, please try again");
    }
  };

  //===============================================================

  useEffect(() => {
    if (isLoggedIn) {
      history("/dashboard");
    }
  });

  //===============================================================

  return (
    <>
    <div className="page">
      <div className="Form">
        <h1 className="welcome">Welcome!</h1>
        <p className="Title">Log in to streamline QA and improve file comparisons.:</p>
        <form onSubmit={login}>
          <br />
        <h4>Email address</h4>
          <input
            type="email"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <h4>Password</h4>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            onClick={(e) => {
              login(e);
            }}
          >
            Login
          </button>
        </form>

        {status
          ? message && <div className="SuccessMessage">{message}</div>
          : message && <div className="ErrorMessage">{message}</div>}
      </div>
      <div className="image"><img src={image}/></div>
      </div>      
    </>
  );
};

export default Login;
