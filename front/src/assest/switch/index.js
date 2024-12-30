import React, { useState } from "react";

const Switch = ({onValueChange,value}) => {
  const [isToggled, setIsToggled] = useState(value);
  
  return (
    <div
      style={{
        height: "20px",
        width: "36px",
        borderRadius: "16px",
        border: "solid",
        borderWidth:"0.25px",
        borderColor: isToggled ?"#9D3FFF":"#C8C8C8",
        position: "relative",
        cursor:"pointer",
        transition:"all 0.5s",
      }}
      onClick={()=>{
        setIsToggled(!isToggled)
        onValueChange(!isToggled)
    }}
    >
      <span
        style={{
          height: "16px",
          width: "16px",
          borderRadius: "16px",
          backgroundColor: isToggled ?"#9D3FFF":"#C8C8C8",
          position: "absolute",
          left: isToggled ? "18px" : "2px",
          top: "2px",
          transition:"all 0.5s",
    
        }}
      ></span>
    </div>
  );
};

export default Switch;
