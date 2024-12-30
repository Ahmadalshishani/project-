import React from "react";

const SettingArr = (compare, setting ,finalArr) => {
  const newWordArr = [];
  compare?.map((element, index) => {
    const oldMask = element.old_mask.split("");
    const newMask = element.new_mask.split("");
    let ok = false;

    newMask.map((char, charIndex) => {
      if (char != 0 && setting[char]) {
        return (ok = true);
      }
    });
    oldMask.map((char, charIndex) => {
      if (char != 0 && setting[char]) {
        return (ok = true);
      }
    });
    if (ok) {
      return newWordArr.push(element);
    }
  });
finalArr(newWordArr)
  return <div></div>;
};

export default SettingArr;
