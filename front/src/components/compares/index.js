import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../pictures/Group 8.png";
import "./style.css";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteCompare } from "../reducers/compare";
import Issues from "../Issues";

function Compares() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { compare } = useSelector((state) => ({
    compare: state.compare.comparing,
  }));
  const [dis, setDis] = useState(false);
  const username =
    localStorage.getItem("userName") || sessionStorage.getItem("userName");
  const [popupData, setPopupData] = useState(null);
  const [newPopupData, setNewPopupData] = useState(null);
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
  const colorMap = {
    1: "#4ddcfb",
    2: "#4ef4a8",
    3: "#f9c95f",
    4: "#805af9",
    5: "#f56666",
  };
  const errorType = {
    1: "Content error",
    2: "formatting issues",
    3: "Double spacing",
    4: "Bullet points",
    5: "Uppercase/Lowercase Discrepancies",
  };
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

  const newMasks = compare?.map((item) =>
    item.new_mask ? parseMask(item.new_mask) : {}
  );
  const oldMasks = compare?.map((item) =>
    item.old_mask ? parseMask(item.old_mask) : {}
  );
  const newBold = compare?.map((item) =>
    item.new_bold ? parseMask(item.new_bold) : {}
  );
  const oldBold = compare?.map((item) =>
    item.old_bold ? parseMask(item.old_bold) : {}
  );
  const newItalic = compare?.map((item) =>
    item.new_italic ? parseMask(item.new_italic) : {}
  );
  const oldItalic = compare?.map((item) =>
    item.old_italic ? parseMask(item.old_italic) : {}
  );
  const newUnderline = compare?.map((item) =>
    item.new_underline ? parseMask(item.new_underline) : {}
  );
  const oldUnderLline = compare?.map((item) =>
    item.old_underline ? parseMask(item.old_underline) : {}
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
  const handleCharacterClick = (sentenceIndex, charIndex, char, masks) => {
    const value = masks[sentenceIndex]?.[charIndex];
    if (value) {
      setPopupData({
        sentenceIndex,
        charIndex,
        char,
        value,
      });
    } else {
      setPopupData(null);
    }
  };
  const handleCharacterHover = (sentenceIndex, charIndex, char) => {
    const value = newMasks[sentenceIndex]?.[charIndex];
    if (value) {
      setNewPopupData({
        sentenceIndex,
        charIndex,
        char,
        value,
      });
    } else {
      setNewPopupData(null);
    }
  };
  console.log(compare);

  return (
    <>
      {!compare && <Navigate to="/" />}
      <header className="header">
        <p>Welcome, {username} 👋</p>
        <img src={Logo} alt="Company Logo" />
      </header>
      <div style={{ maxWidth: "100rem", marginLeft: "auto", width: "90%" }}>
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
            Small Edits, Big Improvements
          </h1>
        </div>
        <div style={{ paddingLeft: "50px" }}>
          <p
            style={{
              marginTop: "0px",
              fontFamily: "inter",
              fontWeight: "700",
              fontSize: "24px",
              color: "#2b1b4c",
            }}
          >
            Number of Issues: <Issues />
          </p>
        </div>

        {/* Table Mapping */}
        <div
          className="map"
          style={{
            maxWidth: "1088",
            width: "80%",
            borderTop: "0.5px solid #8b8b8b",

            display: "flex",
            flexDirection: "column",
            alignItems: "inherit",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                maxWidth: "450px",
                width: "88%",
                borderRight: "0.5px solid #8b8b8b",
                marginTop: "32px",
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
                }}
              >
                Original
              </h1>
            </div>
            <h3
              style={{
                maxWidth: "188px",
                width: "100%",
                textAlign: "center",
                fontFamily: "inter",
                fontSize: "24px",
                fontWeight: "400",
                color: "#2b1b4c",
              }}
            >
              Page/Slide
            </h3>
            <div
              style={{
                maxWidth: "450px",
                width: "88%",
                borderLeft: "0.5px solid #8b8b8b",
                marginTop: "32px",
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
                }}
              >
                Designed
              </h1>
            </div>
          </div>
          <div className="box" style={{ maxWidth: "1200px" }}>
            {compare?.map((element, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "stretch",
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
                  }}
                >
                  {" "}
                  <div
                    className="old"
                    style={{
                      fontFamily: "inter",
                      fontWeight: "400",
                      fontSize: "24px",
                    }}
                  >
                    {element.old.split("").map((char, charIndex) => (
                      <span
                        key={charIndex}
                        onPointerOver={() =>
                          handleCharacterClick(index, charIndex, char, oldMasks)
                        }
                        onPointerLeave={() => {
                          setPopupData(null);
                        }}
                        style={{
                          position: "relative",
                          backgroundColor:
                            colorMap[oldMasks[index]?.[charIndex]] || "white",
                          cursor: oldMasks[index]?.[charIndex]
                            ? "pointer"
                            : "default",
                          fontWeight: oldBold[index]?.[charIndex]
                            ? "900"
                            : "400",
                          fontStyle: oldItalic[index]?.[charIndex]
                            ? "italic"
                            : "normal",
                          textDecoration: oldUnderLline[index]?.[charIndex]
                            ? "underline"
                            : "none",
                        }}
                      >
                        {popupData &&
                          popupData.sentenceIndex === index &&
                          popupData.charIndex === charIndex && (
                            <div
                              className="popup"
                              style={{
                                borderRadius: "15px",
                                padding: "10px 10px",
                                position: "absolute",
                                top: "-50px",
                                left: "-100px",
                                backgroundColor: "#2b1b4c",
                                zIndex: "99999",
                                color: "white",
                                width: "200px",
                                fontWeight: "400 !important",
                              }}
                            >
                              {errorType[oldMasks[index]?.[charIndex]]}
                            </div>
                          )}
                        {char}
                      </span>
                    ))}
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
                  }}
                >
                  {" "}
                  <div
                    className="new"
                    style={{
                      fontFamily: "inter",
                      fontWeight: "400",
                      fontSize: "24px",
                    }}
                  >
                    {element.new.split("").map((char, charIndex) => (
                      <span
                        key={charIndex}
                        onPointerOver={() => {
                          setNewPopupData(null);
                          handleCharacterHover(index, charIndex, char);
                        }}
                        onPointerLeave={() => {
                          setNewPopupData(null);
                        }}
                        style={{
                          position: "relative",
                          backgroundColor:
                            colorMap[newMasks[index]?.[charIndex]] || "white",
                          cursor: newMasks[index]?.[charIndex]
                            ? "pointer"
                            : "default",
                          fontWeight: newBold[index]?.[charIndex]
                            ? "900"
                            : "400",
                          fontStyle: newItalic[index]?.[charIndex]
                            ? "italic"
                            : "inter",
                          textDecoration: newUnderline[index]?.[charIndex]
                            ? "underline"
                            : "none",
                        }}
                      >
                        {newPopupData &&
                          newPopupData.sentenceIndex === index &&
                          newPopupData.charIndex === charIndex && (
                            <div
                              className="popup"
                              style={{
                                borderRadius: "15px",
                                padding: "10px 10px",
                                position: "absolute",
                                top: "-50px",
                                left: "-100px",
                                backgroundColor: "#2b1b4c",
                                zIndex: "99999",
                                color: "white",
                                width: "200px",
                              }}
                            >
                              <span>
                                {" "}
                                {errorType[newMasks[index]?.[charIndex]]}
                              </span>
                            </div>
                          )}

                        {char}
                      </span>
                    ))}
                  </div>
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
                      maxWidth: "1088px",
                      width: "100%",
                      position: "sticky",
                      bottom: "0px",
                      left: "0px",
                    }
                  : {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "0px",
                      maxWidth: "1088px",
                      width: "100%",
                      position: "sticky",
                      bottom: "0px",
                      left: "0",
                    }
              }
            >
              <div
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
                  <svg
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
                )}

                {dis && (
                  <svg
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
                )}
                <p style={{ margin: "0px" }}>Tool Legend</p>
              </div>
              {dis && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    justifyContent: "space-around",
                    maxWidth: "1088px",
                    width: "100%",
                    fontFamily: "inter",
                    fontWeight: "400",
                    fontSize: "15px",
                    backgroundColor: "#e5e2e2",
                    borderTopRightRadius: "15px",
                    borderTopLeftRadius: "15px",
                    transition: "height 5s",
                  }}
                >
                  {disArray.map((element, index) => {
                    const { color, text, shade } = element;
                    return (
                      <p
                        style={{
                          display: "flex",
                          color: shade ? "#000000" : "#999999",
                        }}
                      >
                        <span
                          key={index}
                          style={{
                            width: "20px",
                            height: "15px",
                            backgroundColor: color,

                            borderRadius: "50%",
                            display: "inline-block",
                            marginRight: "2px",
                            marginLeft: "5px",
                          }}
                        >
                          {" "}
                        </span>
                        {text}
                      </p>
                    );
                  })}
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
