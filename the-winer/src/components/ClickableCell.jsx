import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CSS/Game.css";

function ClickableCell({ index }) {
  const [cell, setCell] = useState(false);
  function fillCell() {
    setCell(true);
  }
  console.log(`cell n°${index}`);
  if (cell === true) {
    return <h1>Hello World</h1>;
  }
  return (
    <div
      id="menfou"
      className="grid-element"
      type="button"
      role="button"
      tabIndex="-1"
      onKeyDown={fillCell}
      onClick={fillCell}
    >
      1{" "}
    </div>
  );
}

ClickableCell.propTypes = {
  index: PropTypes.number.isRequired,
};

export default ClickableCell;
