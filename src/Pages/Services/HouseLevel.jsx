// src/Pages/HouseLevel.js
import React from "react";
import { useParams } from "react-router-dom";

function HouseLevel() {
  const { level } = useParams(); // Get the dynamic 'level' from the route parameter

  let content;
  switch (level) {
    case "g":
      content = <div>Ground Floor (G)</div>;
      break;
    case "g+1":
      content = <div>Ground + First Floor (G+1)</div>;
      break;
    case "g+2":
      content = <div>Ground + Two Floors (G+2)</div>;
      break;
    case "g+3":
      content = <div>Ground + Three Floors (G+3)</div>;
      break;
    default:
      content = <div>Invalid level</div>;
  }

  return (
    <div>
      <h3>{level.toUpperCase()} Level</h3>
      {content}
    </div>
  );
}

export default HouseLevel;
