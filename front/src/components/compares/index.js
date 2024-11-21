import React from "react";
import { useSelector } from "react-redux";
import Logo from "../../pictures/Group 8.png";
import "./style.css";

function Compares() {
  const { compare } = useSelector((state) => ({
    compare: state.compare.comparing,
  }));

  const username = localStorage.getItem("userName");
  console.log("compare page", compare);

  const colorMap = {
    1: "red",
    2: "blue",
    3: "green",
    4: "orange",
    5: "purple",
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

  console.log("Parsed New Masks:", newMasks);
  console.log("Parsed Old Masks:", oldMasks);

  return (
    <>
      <header className="header">
        <p>Welcome, {username} 👋</p>
        <img src={Logo} alt="Company Logo" />
      </header>
      <div style={{ maxWidth: "100rem", marginLeft: "auto", width: "90%" }}>
        <div style={{ display: "flex", alignItems: "end" }}>
          <h1 className="head" style={{ marginBottom: "0px" }}>
            Small Edits, Big Improvements
          </h1>
        </div>
        <div style={{ paddingLeft: "50px" }}>
          <p style={{ marginTop: "0px" }}>
            Number of Issues: {compare?.length || 0}
          </p>
        </div>

        {/* Table Mapping */}
        <div className="map">
          {compare?.map((element, index) => (
            <div
              key={index}
              style={{
                maxWidth:"1250",
                width:"90%",
                display: "flex",
                marginLeft:"auto",
                padding: "40px",
                border: "top",
              }}
            >
              {/* Old File Mapping */}
              <div className="old">
                {element.old.split("").map((char, charIndex) => (
                  <span
                    key={charIndex}
                    style={{
                      backgroundColor:
                        colorMap[oldMasks[index]?.[charIndex]] || "white",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <div className="oldPage">Page: {element.old_number}</div>
              <div className="newPage">Page: {element.new_number}</div>
              {/* New File Mapping */}
              <div className="new">
                {element.new.split("").map((char, charIndex) => (
                  <span
                    key={charIndex}
                    style={{
                      backgroundColor:
                        colorMap[newMasks[index]?.[charIndex]] || "white",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Compares;
