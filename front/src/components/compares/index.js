import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../pictures/Group 8.png";
import "./style.css";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteCompare } from "../reducers/compare";
import Issues from "../Issues";
import WordMap from "../WordMap";
import Switch from "../../assest/switch";
import Gear from "../../assest/Gear.js";
import SettingArr from "../SettingArr/index.js";

function Compares() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { compare } = useSelector((state) => ({
    compare: state.compare.comparing,
  }));
  const [dis, setDis] = useState(false);
  const [popup, setPopup] = useState(false);
  //
  const [Double, setDouble] = useState(true);
  const [Content, setContent] = useState(true);
  const [Formatting, setFormatting] = useState(true);
  const [Points, setPoints] = useState(true);
  const [Discrepancies, setDiscrepancies] = useState(true);
  const [setting, setSetting] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });
  //
  const [finalArr, setFinalArr] = useState([]);
  const username =
    localStorage.getItem("userName") || sessionStorage.getItem("userName");
  const disArray = [
    {
      text: "Double Spacing",
      color: "#d5ba81",
      shade: false,
    },
    {
      text: "Content Error",
      color: "#7abdcd",
      shade: false,
    },
    {
      text: "Formatting Issues (Example: Punctuation)",
      color: "#76cba5",
      shade: false,
    },
    {
      text: "Bullet Points Inconsistencies",
      color: "#9381cf",
      shade: false,
    },
    {
      text: "Uppercase/Lowercase Discrepancies",
      color: "#d28989",
      shade: false,
    },
  ];

  const handleBack = () => {
    dispatch(deleteCompare());
    navigate("/");
  };

  const handleBox = () => {
    setDis(!dis);
  };

  const parseMask = (mask) => {
    const parsedMask = {};
    mask.split("").forEach((char, index) => {
      if (char !== "0") {
        parsedMask[index] = parseInt(char, 10);
      }
    });

    return parsedMask;
  };

  const newMasks = finalArr?.map((item) =>
    item.new_mask ? parseMask(item.new_mask) : {}
  );
  const oldMasks = finalArr?.map((item) =>
    item.old_mask ? parseMask(item.old_mask) : {}
  );

  if (newMasks) {
    newMasks.map((char) => {
      Object.values(char).forEach((value) => {
        if (value == 1) {
          disArray[1].shade = true;
          return (disArray[1].color = "#4ddcfb");
        }
        if (value == 2) {
          disArray[2].shade = true;
          return (disArray[2].color = "#4ef4a8");
        }
        if (value == 3) {
          disArray[0].shade = true;
          return (disArray[0].color = "#f9c95f");
        }
        if (value == 4) {
          disArray[3].shade = true;
          return (disArray[3].color = "#805af9");
        }
        if (value == 5) {
          disArray[4].shade = true;
          return (disArray[4].color = "#f56666");
        }
      });
    });
  }

  if (oldMasks) {
    oldMasks.map((char) => {
      Object.values(char).forEach((value) => {
        if (value == 1) {
          disArray[1].shade = true;
          return (disArray[1].color = "#4ddcfb");
        }
        if (value == 2) {
          disArray[2].shade = true;
          return (disArray[2].color = "#4ef4a8");
        }
        if (value == 3) {
          disArray[0].shade = true;
          return (disArray[0].color = "#f9c95f");
        }
        if (value == 4) {
          disArray[3].shade = true;
          return (disArray[3].color = "#805af9");
        }
        if (value == 5) {
          disArray[4].shade = true;
          return (disArray[4].color = "#f56666");
        }
      });
    });
  }
  useEffect(() => {
    SettingArr(compare, setting, setFinalArr);
  }, [popup]);

  const handleSetting = () => {
    setting[1] = Content;
    setting[2] = Formatting;
    setting[3] = Double;
    setting[4] = Points;
    setting[5] = Discrepancies;
    setPopup(false);
  };
  const handleSettingClose = () => {
    setContent(setting[1]);
    setFormatting(setting[2]);
    setDouble(setting[3]);
    setPoints(setting[4]);
    setDiscrepancies(setting[5]);
    setPopup(false);
  };
  console.log("finalArr", finalArr);

  return (
    <>
      {!compare && <Navigate to="/" />}
      <header className="header">
        <p
          style={{
            display: "flex",
            flexDirection: "column",
            cursor: "default",
            fontFamily: "inter",
            fontWeight: "900",
            fontSize: "36px",
          }}
        >
          Welcome, {username} 👋{" "}
          <span
            style={{
              width: "59px",
              height: "19px",
              fontFamily: "inter",
              fontWeight: "700",
              fontSize: "16px",
              marginTop: "16px",
              color: "#f9c95f",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => {
              localStorage.clear();
              sessionStorage.clear();
              navigate("/login");
            }}
          >
            Log out
          </span>
        </p>
        <img id="logo" src={Logo} alt="Company Logo" />
      </header>
      <div
        className="page_com"
        style={{
          maxWidth: "100rem",
          width: "90%",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div
          style={{
            MaxWidth: "100rem",
            width: "94%",
            display: "flex",
            alignItems: "end",
          }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 1 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              handleBack();
            }}
            style={{ cursor: "pointer", marginBottom: "0" }}
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
          <h1
            className="head"
            style={{
              marginBottom: "0px",
              maxWidth: "583px",
              width: "100%",
              fontFamily: "inter",
              fontWeight: "600",
              fontSize: "40px",
              cursor: "default",
            }}
          >
            Small Edits, Big Improvements
          </h1>
        </div>

        <div style={{ paddingLeft: "0" }}>
          <p
            style={{
              marginTop: "12px",
              fontFamily: "inter",
              fontWeight: "700",
              fontSize: "24px",
              color: "#2b1b4c",
              cursor: "default",
              marginLeft: "50px",
            }}
          >
            Number of Issues: {finalArr.length}
          </p>
        </div>

        {/* Table Mapping */}
        <div
          className="map"
          style={{
            maxWidth: "1250",
            width: "100%",
            borderTop: "0.5px solid #8b8b8b",
            marginLeft: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: "1250px",
              width: "100%",
              position:"sticky",
              top:"0px",
              backgroundColor:"white",
              zIndex:"2"
            }}
          >
            <div
              style={{
                maxWidth: "531.5px",
                width: "88%",
                borderRight: "solid 0.5px",
                borderRightColor:"8b8b8b",
                marginTop: "32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {" "}
              <h1
                style={{
                  marginTop: "0px",
                  textAlign: "center",
                  fontFamily: "inter",
                  fontSize: "36px",
                  fontWeight: "700",
                  color: "#2b1b4c",
                  cursor: "default",
                  marginBottom: "0",
                }}
              >
                Original
              </h1>
              <svg
                width="144"
                height="7"
                viewBox="0 0 144 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M142.941 2.99831C143.493 3.03074 143.966 2.61009 143.998 2.05876C144.031 1.50743 143.61 1.03419 143.059 1.00176L142.941 2.99831ZM0.555215 6.99851C36.7471 4.99712 115.812 1.40248 142.941 2.99831L143.059 1.00176C115.788 -0.602402 36.5862 3.00296 0.444785 5.00156L0.555215 6.99851Z"
                  fill="#4DDCFB"
                />
              </svg>
            </div>
            <h3
              className="page_head"
              style={{
                maxWidth: "187px",
                width: "80%",
                textAlign: "center",
                fontFamily: "inter",
                fontSize: "24px",
                fontWeight: "400",
                color: "#2b1b4c",
                cursor: "default",
              }}
            >
              <span className="page_num"> Page/Slide</span>
            </h3>
            <div
              style={{
                maxWidth: "531.5px",
                width: "88%",
                borderLeft: "0.5px solid #8b8b8b",
                marginTop: "32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {" "}
              <h1
                style={{
                  marginTop: "0px",
                  textAlign: "center",
                  fontFamily: "inter",
                  fontSize: "36px",
                  fontWeight: "700",
                  color: "#2b1b4c",
                  cursor: "default",
                  marginBottom: "0",
                }}
              >
                Designed
              </h1>
              <svg
                width="144"
                height="7"
                viewBox="0 0 144 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M142.941 2.99831C143.493 3.03074 143.966 2.61009 143.998 2.05876C144.031 1.50743 143.61 1.03419 143.059 1.00176L142.941 2.99831ZM0.555215 6.99851C36.7471 4.99712 115.812 1.40248 142.941 2.99831L143.059 1.00176C115.788 -0.602402 36.5862 3.00296 0.444785 5.00156L0.555215 6.99851Z"
                  fill="#F9C95F"
                />
              </svg>
            </div>
          </div>
          <div
            className="box"
            style={{
              maxWidth: "1250px",
              width: "100%",
              minHeight: "85vh",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {finalArr?.map((element, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Old File Mapping */}
                <div
                  style={{
                    maxWidth: "450px",
                    width: "90%",
                    textAlign: "center",
                    borderBottom: "0.5px solid #8b8b8b",
                    borderRight: "0.5px solid #8b8b8b",
                    paddingBottom: "52px",
                    paddingTop: "50px",
                    fontFamily: "inter",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "1.5",
                    position: "relative",
                    wordWrap: "break-word",
                  }}
                >
                  <WordMap
                    sentence={element.old}
                    index={index}
                    mask={element.old_mask}
                    bold={element.old_bold}
                    italic={element.old_italic}
                    underline={element.old_underline}
                    setting={setting}
                  />
                </div>

                <div
                  style={{
                    maxWidth: "93px",
                    width: "90%",
                    textAlign: "center",
                    borderBottom: "0.5px solid #8b8b8b",
                    borderRight: "0.5px solid #8b8b8b",
                    paddingBottom: "52px",
                    paddingTop: "50px",
                  }}
                >
                  <div
                    className="oldPage"
                    style={{
                      maxWidth: "93px",
                      width: "90%",
                      textAlign: "center",
                      fontFamily: "inter",
                      fontWeight: "500",
                      fontSize: "36px",
                    }}
                  >
                    {element.old_number}
                  </div>
                </div>
                <div
                  style={{
                    maxWidth: "93px",
                    width: "90%",
                    textAlign: "center",
                    borderBottom: "0.5px solid #8b8b8b",
                    borderRight: "0.5px solid #8b8b8b",
                    paddingBottom: "52px",
                    paddingTop: "50px",
                  }}
                >
                  {" "}
                  <div
                    className="newPage"
                    style={{
                      textAlign: "center",
                      fontFamily: "inter",
                      fontWeight: "500",
                      fontSize: "36px",
                    }}
                  >
                    {element.new_number}
                  </div>
                </div>
                {/* New File Mapping */}

                <div
                  style={{
                    maxWidth: "450px",
                    width: "90%",
                    textAlign: "center",
                    borderBottom: "0.5px solid #8b8b8b",
                    paddingBottom: "52px",
                    paddingTop: "50px",
                    fontFamily: "inter",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "1.5",
                    position: "relative",
                    wordWrap: "break-word",
                  }}
                >
                  <WordMap
                    sentence={element.new}
                    index={index}
                    mask={element.new_mask}
                    bold={element.new_bold}
                    italic={element.new_italic}
                    underline={element.new_underline}
                    setting={setting}
                  />
                </div>
              </div>
            ))}
            {/**tool legend */}

            <div
              className="item"
              style={
                dis
                  ? {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "0px",
                      maxWidth: "1250px",
                      width: "100%",
                      position: "sticky",
                      bottom: "0px",
                      left: "0px",
                      cursor: "pointer",
                      zIndex: 2,
                      marginTop: "auto",
                    }
                  : {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "0px",
                      maxWidth: "1250px",
                      width: "100%",
                      position: "sticky",
                      bottom: "0px",
                      left: "0",
                      cursor: "pointer",
                      zIndex: "2",
                      marginTop: "auto",
                    }
              }
            >
              <div
                className="tool_button"
                style={{
                  width: "112px",
                  height: "46px",
                  fontFamily: "inter",
                  fontWeight: "400",
                  fontSize: "15px",
                  backgroundColor: "#e5e2e2",
                  textAlign: "center",
                  borderTopRightRadius: "15px",
                  borderTopLeftRadius: "15px",
                }}
                onClick={() => {
                  handleBox();
                }}
              >
                {!dis && (
                  <span>
                    <svg
                      id="up_arrow"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.625 6.75L9.125 11.25L4.625 6.75"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      id="right_arrow"
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m15 19-7-7 7-7"
                      />
                    </svg>
                  </span>
                )}

                {dis && (
                  <span>
                    <svg
                      id="up_arrow"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.375 11.25L9.875 6.75L14.375 11.25"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      id="right_arrow"
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m9 5 7 7-7 7"
                      />
                    </svg>
                  </span>
                )}
                <p style={{ margin: "0px" }}>Tool Legend</p>
              </div>
              {dis && (
                <div
                  className="legend"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    maxWidth: "1250px",
                    width: "100%",
                    backgroundColor: "#e5e2e2",
                    borderTopRightRadius: "15px",
                    borderTopLeftRadius: "15px",
                  }}
                >
                  {disArray.map((element, index) => {
                    const { color, text, shade } = element;
                    return (
                      <div
                        className="tool"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "nowrap",
                          whiteSpace: "normal",
                        }}
                      >
                        {" "}
                        <div
                          className="circle"
                          key={index}
                          style={{
                            maxWidth: "20px",
                            width: "20px",
                            maxHeight: "20px",
                            height: "100%",
                            backgroundColor: color,
                            borderRadius: "50%",
                            display: "inline-block",
                            marginRight: "2px",
                            marginLeft: "5px",
                          }}
                        >
                          {" "}
                        </div>{" "}
                        <p
                          style={{
                            display: "flex",
                            color: shade ? "#000000" : "#999999",
                            fontFamily: "inter",
                            fontWeight: "400",
                            fontSize: "15px",
                          }}
                        >
                          {text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
              <div
                style={{
                  height: "44px",
                  width: "44px",
                  backgroundColor: "#E5E2E2",
                  position: "absolute",
                  top: "5px",
                  right: "25px",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => {
                  setPopup(true);
                }}
              >
                <Gear />
              </div>
              {popup && (
                <div
                  style={{
                    position: "fixed",
                    left: "0px",
                    top: "0px",
                    height: "100vh",
                    width: "100vw",
                    backgroundColor: "rgba(0,0,0, 0.4 )",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "475px",
                      width: "100%",
                      maxHeight: "364px",
                      height: "100%",
                      backgroundColor: "white",
                      borderRadius: "15px",
                      // paddingTop: "20px",
                      // paddingLeft: "32px",
                      // paddingRight: "32px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        maxWidth: "411px",
                        width: "100%",
                        maxHeight: "29px",
                        height: "100%",
                        marginTop: "20px",
                        marginLeft: "32px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "inter",
                          fontSize: "24px",
                          fontWeight: "700",
                          margin: "0",
                        }}
                      >
                        Settings
                      </p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          handleSettingClose();
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      style={{
                        maxWidth: "411px",
                        width: "100%",
                        maxHeight: "196px",
                        height: "100%",
                        padding: "0px",
                        marginTop: "32px",
                        marginLeft: "32px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          height: "20px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "inter",
                            fontSize: "16px",
                            fontWeight: "400",
                            margin: "0",
                          }}
                        >
                          Show Double Spacing
                        </p>
                        <Switch
                          onValueChange={(e) => {
                            setDouble(e);
                          }}
                          value={setting[3]}
                        />{" "}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "22px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "inter",
                            fontSize: "16px",
                            fontWeight: "400",
                            margin: "0",
                          }}
                        >
                          Show Content Error
                        </p>
                        <Switch
                          onValueChange={(e) => {
                            setContent(e);
                          }}
                          value={setting[1]}
                        />{" "}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "22px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "inter",
                            fontSize: "16px",
                            fontWeight: "400",
                            margin: "0",
                          }}
                        >
                          Show Formatting Issues
                        </p>
                        <Switch
                          onValueChange={(e) => {
                            setFormatting(e);
                          }}
                          value={setting[2]}
                        />{" "}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "22px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "inter",
                            fontSize: "16px",
                            fontWeight: "400",
                            margin: "0",
                          }}
                        >
                          Show Points Inconsistencies
                        </p>
                        <Switch
                          onValueChange={(e) => {
                            setPoints(e);
                          }}
                          value={setting[4]}
                        />{" "}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "22px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "inter",
                            fontSize: "16px",
                            fontWeight: "400",
                            margin: "0",
                          }}
                        >
                          Show Uppercase/Lowercase Discrepancies
                        </p>
                        <Switch
                          onValueChange={(e) => {
                            setDiscrepancies(e);
                          }}
                          value={setting[5]}
                        />{" "}
                      </div>
                    </div>
                    <button
                      style={{
                        maxWidth: "404px",
                        width: "100%",
                        height: "32px",
                        backgroundColor: "#2B1B4C",
                        fontFamily: "inter",
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "white",
                        borderRadius: "5px",
                        marginLeft: "35.5px",
                        marginTop: "32px",
                      }}
                      onClick={handleSetting}
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Compares;
