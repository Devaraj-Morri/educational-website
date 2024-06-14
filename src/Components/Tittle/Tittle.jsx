import React from "react";
import "./Tittle.css";
const Tittle = ({subTitle,Title}) => {
  return (
    <div className="tittle">
      <h3>{subTitle}</h3>
      <h2>{Title}</h2>
    </div>
  );
};

export default Tittle;
