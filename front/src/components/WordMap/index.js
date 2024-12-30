import React, { useState } from "react";

const WordMap = (sentence) => {
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
  const [dis, setDis] = useState(null);

  let oldNum = null;
  const wordArr = [];
  let wordArrIndex = 0;
  const stringArr = sentence.sentence.split("");
  const maskArr = sentence.mask.split("");
  const boldArr = sentence.bold.split("");
  const italicArr = sentence.italic.split("");
  const underlineArr = sentence.underline.split("");
  const setting = sentence.setting;

  stringArr.map((element, index) => {
    if (maskArr[index] !== oldNum) {
      wordArr.push({
        s: element,
        m: maskArr[index],
        b: boldArr[index],
        i: italicArr[index],
        u: underlineArr[index],
      });
      oldNum = maskArr[index];
      return (wordArrIndex = wordArrIndex + 1);
    } else if (maskArr[index] == oldNum) {
      return (wordArr[wordArrIndex - 1].s =
        wordArr[wordArrIndex - 1].s + element);
    }
  });

  return (
    <div style={{}}>
      {wordArr.map((char, charIndex) => (
        <span
          style={{
            position: "relative",
            backgroundColor: setting[char.m]
              ? colorMap[char.m]
              : "white" || "white",
            cursor: char.m != 0 ? "pointer" : "default",
            fontWeight: char.b != 0 ? "900" : "400",
            fontStyle: char.i != 0 ? "italic" : "inter",
            textDecoration: char.u != 0 ? "underline" : "none",
          }}
          onPointerOver={() => {
            if (char.m != 0 && setting[char.m]) {
              setDis({
                char: char,
                charIndex: charIndex,
              });
            } else {
              setDis(null);
            }
          }}
          onPointerLeave={() => {
            setDis(null);
          }}
        >
          {char.s}&nbsp;
          {dis && dis.charIndex === charIndex && (
            <span
              className="popup"
              style={
                dis
                  ? {
                      borderRadius: "15px",
                      padding: "10px 10px",
                      position: "absolute",
                      top: "-50px",
                      left: "-75px",
                      backgroundColor: "#2b1b4c",
                      color: "white",
                      width: "200px",
                      zIndex: "2",
                      fontSize: "16px",
                      fontFamily: "inter",
                      fontWeight: "700 !important",
                    }
                  : { display: "none" }
              }
            >
              {errorType[char.m]}
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default WordMap;
