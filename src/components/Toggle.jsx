import React, { useState } from "react";
import "./Toggle.css";
import { FaLightbulb } from "react-icons/fa";
const Toggle = () => {
  const [check, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck((prev) => !prev);
  };
  return (
    <div className={`container ${check ? "light__mode" : "dark__mode"}`}>
      <div className="toggle__container">
        <span>
          {" "}
          <label htmlFor="checkId"> {check ? "Light Mode" : "Dark Mode"}</label>
          <input type="checkbox" onChange={handleCheck} id="checkId" />
        </span>
        <FaLightbulb className={`bulb ${check ? "light" : "dark"}`} />
      </div>
    </div>
  );
};

export default Toggle;
