import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Issues = () => {
  const { compare } = useSelector((state) => ({
    compare: state.compare.comparing,
  }));

  let old = null;
  const newArr = [];
  const oldArr = [];
  let result = 0;
  let result2 = 0;
  compare?.forEach((element) => {
    const oldNum = element.old_mask.split("");
    const newNum = element.new_mask.split("");
    newNum.forEach((num, index) => {
      if (num == oldNum[index]) {
        newArr.push(num);
      } else if (num != oldNum[index] && num != 0) {
        newArr.push(num);
      } else if (num != oldNum[index] && num == 0) {
        newArr.push(oldNum[index]);
      }
    });
  });


  newArr.forEach((num) => {
    if (num != 0 && num != old) {
      oldArr.push(num);
      result2++;
      old = num;
    } else if (num == 0) {
      old = null;
    }
  });

  return <span>{result2}</span>;
};

export default Issues;
